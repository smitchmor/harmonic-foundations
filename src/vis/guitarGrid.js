$hf.vis.guitarGrid = new $hf.vis.Visualization();

$hf.vis.guitarGrid.left = 0;
$hf.vis.guitarGrid.top = 5;
$hf.vis.guitarGrid.height = 50;
$hf.vis.guitarGrid.width = 50;
$hf.vis.guitarGrid.gridHeight = 50;
$hf.vis.guitarGrid.gridWidth = 50;
$hf.vis.guitarGrid.bottom = 5;
$hf.vis.guitarGrid.strings = 6;
$hf.vis.guitarGrid.frets = 5;
//$hf.vis.guitarGrid.offsetX = 2;
$hf.vis.guitarGrid.border = false;
$hf.vis.guitarGrid.borderColor = 'black';

$hf.vis.guitarGrid.render = function(x, y, vis, data, chordWidth) {
	//var chordWidth = chordWidth;
	var chordCenter = x + chordWidth/2;
	var x = chordCenter - (this.gridWidth/2)

	var i = 0;
	while (i < this.strings) {
		var offset = (i * (this.gridWidth/(this.strings - 1)))
		var line = new Kinetic.Line({
			points: [x + offset,y, x + offset,y+this.gridHeight],
			stroke: 'black',
			strokeWidth: 1,
			opacity: 1
			});
		layer.add(line);
		$hf.stage.stage.add(layer);
		i++;
	}

	var i = 0;
	while (i < this.frets) { 
		var offset = (i * (this.gridHeight / (this.frets - 1)))
		var line = new Kinetic.Line({
			points: [x,y + offset,x + this.gridWidth,y  + offset],
			stroke: 'black',
			strokeWidth: 1,
			opacity: 1
			});
		layer.add(line);
		$hf.stage.stage.add(layer);
		i++
	}
	return chordCenter;
};