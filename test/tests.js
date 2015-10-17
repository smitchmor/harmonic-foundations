QUnit.config.reorder = false;
$hook.mode = 1; //Ionian

module("page structure integrity");
test("visualizations", function() {
	$hf.vis.foo = new $hf.vis.Visualization();
	equal($hf.vis.foo.top, 0);
	equal($hf.vis.foo.borderColor, 'black');
	equal($hf.vis.renderVisualization(0,0,'foo'), 0);
	equal($hf.vis.renderVisualization(0,10,'foo'), 10);
	$hf.vis.foo.top = 10;
	equal($hf.vis.renderVisualization(0,10,'foo'), 20);
	$hf.vis.foo.left = 5;
	equal($hf.vis.renderVisualization(0,10,'foo', {}, 10), 20);

});


module("anaylze mode degree");
test("anaylze mode degree", function() {
	var degree = 1;
	equal($hook.analyzeModeDegree(degree), 0);
	$hook.mode = 1; //Dorian
	equal($hook.analyzeModeDegree(degree), 0);
	var degree = 3;
	equal($hook.analyzeModeDegree(degree), 2);
	$hook.mode = 7; //Locrian
	equal($hook.analyzeModeDegree(degree), 1);
	$hook.mode = 2; //Phrygian
	equal($hook.analyzeModeDegree(degree), 3);
	$hook.mode = 1; //Ionian
});

module("anaylze note");

test("anaylze note", function() {
	var data = {scale_degree: 1, octave: 0};
	equal($hook.analyzeNote(data), 1);
	var data = {scale_degree: 4, octave: 0};
	equal($hook.analyzeNote(data), 4);
	var data = {scale_degree: 1, octave: 1};
	equal($hook.analyzeNote(data), 8);
	var data = {scale_degree: 7, octave: 1};
	equal($hook.analyzeNote(data), 14);
	var data = {scale_degree: 1, octave: 2};
	equal($hook.analyzeNote(data), 15);
	var data = {scale_degree: 7, octave: -1};
	equal($hook.analyzeNote(data), 0);
	var data = {scale_degree: 6, octave: -1};
	equal($hook.analyzeNote(data), -1);
	var data = {scale_degree: 6, octave: -2};
	equal($hook.analyzeNote(data), -8);
});

test("anaylze note: sharp, flat and rest", function() {
	var data = {scale_degree: '1s', octave: 0};
	equal($hook.analyzeNote(data), 1.5);
	var data = {scale_degree: '4f', octave: 0};
	equal($hook.analyzeNote(data), '3.5');
	var data = {scale_degree: '1f', octave: 1};
	equal($hook.analyzeNote(data), 7.5);
	var data = {scale_degree: 'rest'};
	equal($hook.analyzeNote(data), 'NAN');
	var data = {scale_degree: '6s', octave: -1};
	equal($hook.analyzeNote(data), -0.5);
	var data = {scale_degree: '6f', octave: -2};
	equal($hook.analyzeNote(data), -8.5);
});


module("get notes height");

test("note height", function() {
	$hf.vis.hookNotes.height = 10;
	$hf.vis.hookNotes.offset = 10;
	equal($hook.getNotesHeight(0,1), 2 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(0,5), 6 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(0,0), 1 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(4,8), 5 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(4,4), 1 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(-1,0), 2 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(-1,1), 3 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(-5,0), 6 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(-5,-7), 3 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(-5,-15), 11 * $hf.vis.hookNotes.height);
})

test("note height offset", function() {
	$hf.vis.hookNotes.height = 10;
	$hf.vis.hookNotes.note.offset = 0;
	equal($hook.getNotesHeight(0,1), 1 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(0,5), 1 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(0,0), 1 * $hf.vis.hookNotes.height);
	$hf.vis.hookNotes.note.offset = 10;
	equal($hook.getNotesHeight(4,8), 5 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(4,4), 1 * $hf.vis.hookNotes.height);
	equal($hook.getNotesHeight(-1,0), 2 * $hf.vis.hookNotes.height);
	$hf.vis.hookNotes.note.offset = 5;
	equal($hook.getNotesHeight(-1,1), 20);
	equal($hook.getNotesHeight(-5,0), 35);
	equal($hook.getNotesHeight(-5,-7), 20);
	equal($hook.getNotesHeight(-5,-15), 60);
})


module( "anaylze chords");
var data = {sd: 1, fb: "", isRest: 1, pedal: "", sd: 1, sec: "", sus: ""};

test( "scale degrees", function() {
		equal($hook.analyzeChord(data).isRest, true, "chord is a rest");
//		console.log(data);
//		data.isRest = 0;   //the following fails: TypeError: Cannot read property '1' of undefined
//		console.log(data);
		equal($hook.analyzeChord(data).isRest, false, "chord is not a rest");
		data.borrowed = '';
		equal($hook.analyzeChord(data).roman, 'I', "scale degree: I");
		data.sd = 7;
		equal($hook.analyzeChord(data).roman, 'vii', "scale degree: vii");
		data.sd = 5;
		equal($hook.analyzeChord(data).roman, 'V', "scale degree: V");
});
test( "solfage", function() {
		data.isRest = 0;
		equal($hook.analyzeChord(data).solfege, "sol");
		data.sd = 7;
		equal($hook.analyzeChord(data).solfege, "ti");
		data.sd = 3;
		equal($hook.analyzeChord(data).solfege, "mi");
});

test( "figured bass", function() {
		data.fb = '64';
		equal($hook.analyzeChord(data).figuredBass, "64");
});

test( "popular bass", function() {
		equal($hook.analyzeChord(data).popularBass, "/5");
		data.fb = '42';
		equal($hook.analyzeChord(data).popularBass, "/7");
});

test( "suspended", function() {
		data.sus = 'sus4'
		equal($hook.analyzeChord(data).suspended, "sus4");
});

test( "embellished", function() {
		equal($hook.analyzeChord(data).embellished, "");
		data.emb = 'add9';
		equal($hook.analyzeChord(data).embellished, "add9");
});

test( "secondary dominants", function() {
		data.sec = '1';
		equal($hook.analyzeChord(data).secondary, 'i');
});

test( "color", function() {
		data.sd = 1;
		equal($hook.analyzeChord(data).color,"rgba(255, 0, 0, 1)");
		data.sd = 4;
		equal($hook.analyzeChord(data).color,"rgba(34, 139, 34, 1)");
});

module( "render chord text");

test("chord text", function() {
		var chord = {
			isRest: '',
			roman: 'I',
			solfege: 'do',
			seventh: '',
			figuredBass: '',
			popularBass: '',
			suspended: '',
			embellished: '',
			secondary: ''
		}
		equal($hook.renderChordText(chord), "I");  
		$hf.vis.hookChords.text.type = 'solfege'
		equal($hook.renderChordText(chord), "do");
		$hf.vis.hookChords.text.type = 'roman'
		chord.seventh = $hf.maj7;
		equal($hook.renderChordText(chord), "I" + $hf.maj7);
		$hf.vis.hookChords.text.inversionType = 'figuredBass'
		chord.figuredBass = '64';
		equal($hook.renderChordText(chord), "I" + $hf.maj7 + '64');
		$hf.vis.hookChords.text.inversionType = 'popular'
		chord.popularBass = '/5';
		equal($hook.renderChordText(chord), "I" + $hf.maj7 + '/5');
});
