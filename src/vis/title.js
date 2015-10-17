$hf.vis.title = {
		width: 1100,
		height:50,
		borderColor: "#000",
		borderThickness: 1,
		border: false,
		left: 50,
		top: 5,
		bottom: 5,
		fontSize: 36,
		fontFamily: 'Verdana',
		fill: 'white'
};
$hf.vis.title.init = function(data) {
	this.title = data.super.meta.title;
}
$hf.vis.title.render = function(x, y, data) {
	this.init(data);
	var text = new Kinetic.Text ({
			x: x,
			y: y,
			text: '', // REMOVED TO MEET Content Usage Policy REQS
			fontSize: this.fontSize,
			fontFamily: this.fontFamily,
			fill: this.fill,
			width: this.width,
			align: 'center'
		});
		layer.add(text);
		$hf.stage.stage.add(layer);
		centerVertical = (this.height - text.getHeight())/2;
		text.setY(y + centerVertical);
}