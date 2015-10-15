$hf.vis.hookChords = {
	width: 1152,
	height: 50,
	borderColor: "#000",
	borderThickness: 0,
	border: false,
	top: 0,
	bottom: 20,
	left: 24,
	chord: {
		stroke: 'black',
		strokeWidth: 0,
		cornerRadius: 3,
		border: 3,
		top: 10
	},
	text: {
		y: 6,
		type: 'roman',
		fontSize: 26,
		fontFamily: 'Verdana',
		fill: '#000000',
		inversionType: 'popular', //popular
		augmented: true,
		embellishment: true,
		secondaryDominant: true
	},
};

$hook.drawChords = function(x, y, data, visualizations) {
	var y = y + $hf.vis.hookChords.top;
	var x = x + $hf.vis.hookChords.left;
	var visualizationsHeight = 0;
	var _X = x, _Y = y;

	for (var i = 0; i < visualizations.length ; i++) {
		if (visualizations[i] != 'chords') {
		visualizationsHeight = 
			visualizationsHeight +
			$hf.vis[visualizations[i]].top +
			$hf.vis[visualizations[i]].height +
			$hf.vis[visualizations[i]].bottom;
		}
	}

	if ($.isArray(data) == true) {
		for (var i = 0; i < data.length ; i++) {
			x = $hook.drawChord(x, y, data[i], visualizations, visualizationsHeight);
		}
	} else {
		x = $hook.drawChord(x, y, data, visualizations, visualizationsHeight);
	}

	if ($hf.vis.hookChords.border == true) {
		$hf.drawBorder(_X, y + visualizationsHeight + $hf.vis.hookChords.chord.top, $hf.vis.hookChords);
	}

	return y + visualizationsHeight +
		$hf.vis.hookChords.height + 
		$hf.vis.hookChords.chord.top + 
		$hf.vis.hookChords.bottom;
}

$hook.drawChord = function(x, y, data, visualizations, visualizationsHeight) {
	var y = y; var x = x;
	var chord, chordText;
	var chordWidth = data.chord_duration * $hook.pixelRatio;

	for (var i = 0; i < visualizations.length ; i++) {
		if (visualizations[i] != 'chords') {
			y = $hf.vis.renderVisualization(
				x,
				y,
				visualizations[i],
				data,
				chordWidth);
		}
	}

	y =  y + $hf.vis.hookChords.chord.top;

	chord = $hook.analyzeChord(data);
	chordText = $hook.renderChordText(chord);

	var kChord = new Kinetic.Rect({
		x: x,
		y: y,
		width: chordWidth,
		height: $hf.vis.hookChords.height,
		fill: chord.color,
		stroke: $hf.vis.hookChords.chord.stroke,
		strokeWidth: $hf.vis.hookChords.chord.strokeWidth,
		cornerRadius: $hf.vis.hookChords.chord.cornerRadius
	});
	layer.add(kChord);
	$hf.stage.stage.add(layer);

	var border = $hf.vis.hookChords.chord.border;
	var chordContainer = new Kinetic.Rect({
		x: x + border,
		y: y + border,
		width: chordWidth - (border * 2),
		height: $hf.vis.hookChords.height - (border * 2),
		fill: 'white',
		cornerRadius: $hf.vis.hookChords.chord.cornerRadius
	});
	layer.add(chordContainer);
	$hf.stage.stage.add(layer);

	text = new Kinetic.Text ({
		x: x,
		y: y,
		text: chordText,
		fontSize: $hf.vis.hookChords.text.fontSize,
		fontFamily: $hf.vis.hookChords.text.fontFamily,
		fill: $hf.vis.hookChords.text.fill,
		width: chordWidth,
		align: 'center'
	});

	if (chordText != '') {
		centerVertical = ($hf.vis.hookChords.height - text.getHeight())/2;
		text.setY(y + centerVertical);
		layer.add(text);
		$hf.stage.stage.add(layer);

	}

	var mode = new Kinetic.Rect({
		x: x,
		y: y + $hf.vis.hookChords.height + 5,
		width: chordWidth,
		height: 5,
		fill: chord.keyColor,
//		stroke: $hf.vis.hookChords.chord.stroke,
		strokeWidth: $hf.vis.hookChords.chord.strokeWidth,
		cornerRadius: $hf.vis.hookChords.chord.cornerRadius
	});
	layer.add(mode);
	$hf.stage.stage.add(layer);

	return x + chordWidth;
}

$hook.analyzeChord = function(data) {
	var mode = $hook.mode;
	var chord = {
		isRest: '',
		roman: '',
		solfege: '',
		seventh: '',
		figuredBass: '',
		popularBass: '',
		suspended: '',
		embellished: '',
		secondary: '',
		color:'',
		keyColor: ''
	}

	if (data.isRest == 1) {
		chord.isRest = true;
		return chord;
	} else {
		chord.isRest = false;
	}
	
	chord.roman = $hf.hookMode[$hook.mode-1][1][data.sd-1][0];
	chord.color = $hf.hookMode[$hook.mode-1][1][data.sd-1][2];
	chord.keyColor = $hf.hookMode[$hook.mode-1][0][1];

/*  TEMPORARILY DISABLED FUNCTIONALITY
	chord.solfege = $hf.degree[parseInt(data.sd)-1].solfege;
	chord.suspended = data.sus;
	chord.figuredBass = data.fb;

	if (data.emb != undefined) {
		chord.embellished = data.emb;
	}

	if (data.fb == '') {
		chord.popularBass = '';
	} else if (data.fb == '6') {
		chord.popularBass = '/3';
		chord.seventh = '';
	} else if (data.fb == '64') {
		chord.popularBass = '/5';
		chord.seventh = '';
	} else if (data.fb == '65') { 
		chord.popularBass = '/3';
		chord.seventh = $hf.chordDegree[$hook.mode-1][data.sd][1];
	} else if (data.fb == '43') {
		chord.popularBass = '/5';
		chord.seventh = $hf.chordDegree[$hook.mode-1][data.sd][1];
	} else if (data.fb == '42') {
		chord.popularBass = '/7';
		chord.seventh = $hf.chordDegree[$hook.mode-1][data.sd][1];
	} else if (data.fb == '7') {
		chord.popularBass = '';
		chord.seventh = $hf.chordDegree[$hook.mode-1][data.sd][1];
	} else {

	};

	if (data.sec != '') {
		chord.secondary = $hf.secondaryDominant.degree[data.sec];
		if (data.sd == 5) {
			chord.roman = 'V';
			chord.seventh = 7;
		} else if (data.sd == 4) {
			chord.roman = 'IV';
			chord.seventh = $hf.maj7;
		} else if (data.sd == 7) { 
			chord.roman = 'vii';
			chord.seventh = $hf.halfDim7;
		} else {

		}
	}
TEMPORARILY DISABLED FUNCTIONALITY */

	if (data.borrowed != '') {
		console.log(data.borrowed + ":" + data.sd);
		chord = $hook.handleBorrowedChords(data, chord);
	}
	return chord;
}

$hook.renderChordText = function(chord) {
	var chordText = '';
	if ($hf.vis.hookChords.text.type == 'solfege') {
		chordText = chord.solfege;
	} else {
		chordText = chord.roman;
	}
	chordText = chordText + chord.seventh;
	if ($hf.vis.hookChords.text.inversionType == 'figuredBass') {
		chordText = chordText + chord.figuredBass;
	} else {
		chordText = chordText + chord.popularBass;
	}
	chordText = chordText + chord.suspended;
	chordText = chordText + chord.embellished;

	if (chord.secondary != '') {
		chordText = chordText + "\nof " + chord.secondary;
	}
	return chordText;
}


$hook.handleBorrowedChords = function(data, chord) {
	var borrowerKey = data.borrowed;

	chord.roman = $hf.chordDegree[6 - borrowerKey][1][data.sd-1][0];
	chord.color = $hf.chordDegree[6 - borrowerKey][1][data.sd-1][2];
	chord.keyColor = $hf.chordDegree[6 - borrowerKey][0][1];

//	chord.roman = '____';
	chord.seventh = '';
	return chord;
}
