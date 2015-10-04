$hf.vis.voiceLeading = new $hf.vis.Visualization();
$hf.vis.voiceLeading.width = $hf.stage.width;
$hf.vis.voiceLeading.top = 10;
$hf.vis.voiceLeading.bottom = 0;

$hf.vis.voiceLeading.octaves = 1;
$hf.vis.voiceLeading.offset = 10;
$hf.vis.voiceLeading.lines = 11;
$hf.vis.voiceLeading.lineWidth = 5;
$hf.vis.voiceLeading.radius = 4;
$hf.vis.voiceLeading.left = 10;

$hf.vis.voiceLeading.height =
	($hf.vis.voiceLeading.octaves *
		($hf.vis.voiceLeading.lines * $hf.vis.voiceLeading.offset)) + 20;

$hf.vis.voiceLeading.render = function(x, y, vis, data, chordWidth) {
	this.border = false;

	var chordCenter = x + chordWidth/2;
	var layer = new Kinetic.Layer();

	var y = y;
	var _Y = y;

	console.log("new vis");

	var circle = new Kinetic.Circle({
		x: chordCenter,
		y: y,
		radius: this.radius,
		fill: 'red',
		stroke: 'black',
		strokeWidth: .5
	});
	layer.add(circle);
	$hf.stage.stage.add(layer);
	y = y + this.offset;

	for (var i = 0; i < this.octaves; i++) {
		console.log("new octave");

		var j = 0;
		while (j <= this.lines) {
			console.log(j);
			if ($hf.reversedChromaticDegree[j].diatonic == true) {
				var staff = new Kinetic.Circle({
					x: chordCenter,
					y: y,
					radius: this.radius,
					fill: $hf.reversedChromaticDegree[j].color,
					stroke: 'black',
					strokeWidth: .5,
					opacity: 1
				});
				layer.add(staff);
				$hf.stage.stage.add(layer);
			} else {
				var staff = new Kinetic.Circle({
					x: chordCenter,
					y: y,
					radius: this.radius - 2,
					fill: $hf.reversedChromaticDegree[j].color,
					stroke: 'black',
					strokeWidth: .1,
					opacity: 1
				});
				layer.add(staff);
				$hf.stage.stage.add(layer);
			}
			y = y + this.offset;
			j++;
		}
	}

	$hf.stage.stage.add(layer);
}