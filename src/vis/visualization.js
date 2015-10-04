$hf.vis.Visualization = function (x, y, data) {
	console.log('Visualization initialized...');
	this.top = 0;
	this.left = 0;
	this.height = 0;
	this.bottom = 0;
	this.width = 0;
	this.border = false;
	this.borderColor = 'black';
	this.x = 0;
	this.y = 0;
}

$hf.vis.Visualization.prototype.init = function(data) {
//
};

$hf.vis.Visualization.prototype.render = function(x, y, offsetX) {
//
};

$hf.vis.renderVisualization = function(x, y, vis, data, width) {
	var x = x;
	var y = y;
	var vis;

	if (!$.isNumeric(width)) {
		vis = $hf.vis[vis];
		x = x + vis.left;
	} else {
		vis = $.extend(true,{}, $hf.vis[vis]);
		vis.left = 0;
		vis.width = width;
	}
	y = y + vis.top;
	vis.render(x, y, data, vis, width);
	
	if (vis.border == true) {
		$hf.drawBorder(x, y, vis);
	}
	return y + vis.height + vis.bottom;
}