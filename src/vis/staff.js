$hf.vis.staff = {
	width:10,
	offset:8,
	lines:5,
	opactity:1,
	lineWidth: 1,
	lineColor: 'black',
	top:0,
	left:0,
	bottom:0
};

$hf.vis.staff.render = function(x, y, data) {
	
	var layer = new Kinetic.Layer();

	var i = 1;
	while (i <= this.lines) {
		console.log(i);
		var staff = new Kinetic.Line({
			points: [this.left,y,this.left + this.width,y],
			stroke: this.lineColor,
			strokeWidth: this.strokeWidth,
			opacity: this.opacity
		});
		layer.add(staff);
		$hf.stage.stage.add(layer);
		y = y + this.offset;
		i++;
	}
	this.height = (this.lines * this.offset)
	return y;
}