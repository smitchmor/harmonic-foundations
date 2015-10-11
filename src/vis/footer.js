$hf.vis.footer = {
		width: 1100,
		height:20,
		borderColor: "#000",
		borderThickness: 1,
		border: false,
		left: 50,
		top: 0,
		bottom: 0,
		fontSize: 12,
		fontFamily: 'Verdana',
		fill: 'black'
};
$hf.vis.footer.init = function(data) {
		this.beatsInMeasure = data.super.meta.beats_in_measure;
		this.key = data.super.meta.key;
		this.mode = parseInt(data.super.meta.mode);
		this.artist = data.super.meta.artist;
		this.BPM = data.super.meta.BPM;
		this.modeName = $hf.hookMode[this.mode-1][0][0];
}
$hf.vis.footer.render = function(x, y, data) {
	this.init(data);

	var footerText = "Artist: " + this.artist;
	footerText = footerText + " | Beats in Measure: " + this.beatsInMeasure;
	footerText = footerText + " | BPM: " + this.BPM;
	footerText = footerText + " | Key: " + this.key; 
	footerText = footerText + " | Mode: " + this.modeName; 

	var text = new Kinetic.Text ({
		x: x,
		y: y,
		text: footerText,
		fontSize: this.fontSize,
			fontFamily: this.fontFamily,
			fill: this.fill,
			width: this.width,
			align: 'left'
		});

		layer.add(text);
		$hf.stage.stage.add(layer);
		centerVertical = (this.height - text.getHeight())/2;
		text.setY(y + centerVertical);
};