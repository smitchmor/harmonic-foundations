$hf.vis.hookNotes = {
	width: 1152,
	//height: 0,  overidden by init
	borderColor: "#000",
	borderThickness: 1,
	border: true,
	top: 0,
	bottom: 0,
	left: 24,
	note: {
		height: 10,
		offset: 10,
		stroke: 'black',
		strokeWidth: 0,
		cornerRadius: 3
	}
};

/* 
$hf.vis.hookNotes.init = function(data) {
	$hook.initializeData(data);
}

$hf.vis.hookNotes.render = function(data) {
	//this.init(data);
	//$hook.drawNotes(data);
}
*/
$hook.analyzeNote = function(data) {
	var y = 'NAN';
	var accidental = 0;
	var _OCTAVE = 7;
	if (data.scale_degree == 'rest') {
		return y;
	}
	if (isNaN(data.scale_degree)) {
		accidental = data.scale_degree.match(/f|s/g);
		if (accidental == 's') {
			accidental = .5;
		} else if (accidental == 'f') {
			accidental = -.5;
		} else {};
	}
	y = (parseInt(data.octave) * _OCTAVE) + parseInt(data.scale_degree) + accidental;
	return y;
}

$hook.analyzeNoteFrequency = function(x, y, data) {
	var note = $hook.analyzeNote(data);
	var position = y - (note - $hf.vis.hookNotes.max) * $hf.vis.hookNotes.note.offset;
	return position;
}

$hook.analyzeModeDegree = function(degree) {
	var degree = degree - 1;
	var mode = $hook.mode - 1;
	degree = degree + mode;
	degree =  degree % 7;
	return degree;
}

$hook.getNotesHeight = function(min, max) {
	var noteHeight;
	if ((max > 0 && min > 0) || (max < 0 && min < 0)) {
		noteHeight = ($hf.vis.hookNotes.note.height) + 
		 ((Math.abs(max) - Math.abs(min)) *
		 ($hf.vis.hookNotes.note.offset)); 
	} else {
		noteHeight = ($hf.vis.hookNotes.note.height) + 
		 ((Math.abs(max) + Math.abs(min)) *
		 ($hf.vis.hookNotes.note.offset)); 
	}
	return noteHeight;
}

	$hook.drawNotes = function(x, y, data) {
		y = y + $hf.vis.hookNotes.top;
		x = x + $hf.vis.hookNotes.left; 
		var _X = x, _Y = y;  

		if ($.isArray(data) == true) {
			for (var i = 0; i < data.length ; i++) {
				x = $hook.drawNote(x, y, data[i]);
			}
		} else {
			 x = $hook.drawNote(x, y, data);
		}

		if ($hf.vis.hookNotes.border == true) {
			$hf.drawBorder(_X, y, $hf.vis.hookNotes);
		}
		
		return y + $hf.vis.hookNotes.height + $hf.vis.hookNotes.bottom;
	}

$hook.drawNote = function(x, y, data) {
	var noteWidth = data.note_length * $hook.pixelRatio;
	if (data.scale_degree == 'rest') {
		return x + noteWidth;
	}
	y = $hook.analyzeNoteFrequency(x, y, data);

	var degree = parseInt(data.scale_degree);
	degree = $hook.analyzeModeDegree(degree);

	var accidental;
	if (isNaN(data.scale_degree)) {
		accidental = data.scale_degree.match(/f|s/g);
		if (accidental == 's') {
			accidental = 1;
		} else if (accidental == 'f') { 
			accidental = -1;
		} else {}; //let it be

		degreeWAccidental = degree + accidental;
		degree = $hf.degree[degree];
		accidental = $hf.degree[degreeWAccidental];

		var note = new Kinetic.Rect({
			x: x,
			y: y,
			width: noteWidth,
			height: $hf.vis.hookNotes.note.height,
			fillLinearGradientStartPoint: { x: noteWidth, y: $hf.vis.hookNotes.note.height/2 },
			fillLinearGradientEndPoint: { x: noteWidth, y: $hf.vis.hookNotes.note.height/2 + 1},
			fillLinearGradientColorStops: [0, accidental.color, 1, degree.color], 
			stroke: $hf.vis.hookNotes.note.stroke,
			strokeWidth: $hf.vis.hookNotes.note.strokeWidth,
			cornerRadius: $hf.vis.hookNotes.note.cornerRadius
		});	

	} else {
		degree = $hf.degree[degree];

		var note = new Kinetic.Rect({
			x: x,
			y: y,
			width: noteWidth,
			height: $hf.vis.hookNotes.note.height,
			fill: degree.color,
			stroke: $hf.vis.hookNotes.note.stroke,
			strokeWidth: $hf.vis.hookNotes.note.strokeWidth,
			cornerRadius: $hf.vis.hookNotes.note.cornerRadius
		});
	}
	layer.add(note);
	$hf.stage.stage.add(layer);
	return x + noteWidth;
}
