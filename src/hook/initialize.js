var $hook = {};

$hook.initializeData = function(hook) {
	$hook.BPM = hook.super.meta.BPM;
	$hook.title = hook.super.meta.title;
	$hook.beatsInMeasure = hook.super.meta.beats_in_measure;
	$hook.key = hook.super.meta.key;
	$hook.mode = parseInt(hook.super.meta.mode);
	$hook.artist = hook.super.meta.artist;
	$hook.pixelRatio;
	if ($hook.beatsInMeasure == 6){
		$hook.pixelRatio = 24;
	} else if ($hook.beatsInMeasure == 4) {
		$hook.pixelRatio = 36;
	} else if ($hook.beatsInMeasure == 3) {
		$hook.pixelRatio = 48;
	}

	var keys = Object.keys(hook.super.sections);
	for (var i = 0; i < keys.length ; i++) {
		if (keys[i].indexOf("Section") != 0) {
			$hook.section = hook.super.sections[keys[i]];
		}
	} 
	
	var max, min; 
	var data = [];
	var segmentLength = $hook.section.segment.length;

	if (segmentLength == undefined) {
		for (var j = 0; j < $hook.section.segment.notes.note.length ; j++) {
			var noteDegree = $hook.analyzeNote($hook.section.segment.notes.note[j]);
			if (!isNaN(noteDegree))
				data.push(noteDegree);
		} 
	} else {
		for (var i = 0; i < segmentLength ; i++) {
			for (var j = 0; j < $hook.section.segment[i].notes.note.length ; j++) {
			var noteDegree = $hook.analyzeNote($hook.section.segment[i].notes.note[j]);
			if (!isNaN(noteDegree))
				data.push(noteDegree);
			}
		}
	}
	$hf.vis.hookNotes.max = max = Math.max.apply(Math, data);
	$hf.vis.hookNotes.min = min = Math.min.apply(Math, data);
	$hf.vis.hookNotes.height = $hook.getNotesHeight(min, max);
}

$hook.drawSegments = function(x, y, data) {
	if (! $.isArray(data)) {
		y = $hook.drawSegment(x, y, $hf.layout.hook, data);
	} else {
		for (var i = 0; i < data.length ; i++) {
			y = $hook.drawSegment(x, y, $hf.layout.hook, data[i]);
		}
	}
	return y;
}

$hook.drawSegment = function(x, y, types, data) {
	for (var i = 0; i < types.length ; i++) {
		if ($.isArray(types[i].chords)) {
//			for (var j = 0; j < types[i].chords.length ; j++) {
//				console.log(types[i].chords[j]);
				y = $hook.drawChords(x, y, data.chords.chord, types[i].chords);
//			}
		} else if ($.isArray(types[i].notes)) {
//			for (var j = 0; j < types[i].notes.length ; j++) {
//				console.log(types[i].notes[j]);
				y = $hook.drawNotes(x, y, data.notes.note, types[i].notes);
//			}
		} else {
			console.log('unsuppored segment type');
		}
	}
	return y;
}