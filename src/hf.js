(function (window, undefined) {
	window.$hook = {};
	window.$hf = {};
	window.$hf.vis = {};
	$hf.stage = {};
	$hf.layer;
	var hook;

	$hf.initializeHF = function() {
		var data;
		var url = $.url(document.location);
		$.ajax({
			url: url.attr('base') + url.attr('directory') + 'data/' + $.url().param('id') + '.xml',
			type: 'GET',
			dataType: 'xml',
			success: function(data, textStatus, xhr) {

			},
			error: function(xhr, textStatus, errorThrown) {
				console.log('error retreiving data');
			}
		})
		.done(function(xml) {
			var x2js = new X2JS();
			data = x2js.xml2json(xml);
			console.log(data);
			$hf.stage.render(data);
		});
	}

	$hf.stage = {
		name: 'stage',
		origin: 0,
		width: 1200,
		height: 890,
		borderColor: "#000",
		borderThickness: 2,
		border: true
	}
	$hf.stage.render = function(data) {
		$hf.stage.stage = new Kinetic.Stage({
			width: this.width, 
			height: this.height,
			container: 'stage'
		});
		layer = new Kinetic.Layer();

		var x = this.origin;
		var y = x;

		if (this.border == true) {
			$hf.drawBorder(x, y, this);
		}

		if ($hf.layout.hasOwnProperty('header')) {
			y = $hf.renderHeader(x, y, data);
		}

		if ($hf.layout.hasOwnProperty('hook')) {
			$hook.initializeData(data);
			y = $hook.drawSegments(x, y, $hook.section.segment);
		}

		if ($hf.layout.hasOwnProperty('footer')) {
			y = $hf.renderFooter(x, y, data);
		}
		console.log(y);
	}

	$hf.renderHeader = function(x, y, data) {
		for (var i = 0; i < $hf.layout.header.length ; i++) {
			y = $hf.vis.renderVisualization(x, y, $hf.layout.header[i], data);
		}
		return y; 
	}

	$hf.renderFooter = function(x, y, data) {
		for (var i = 0; i < $hf.layout.footer.length ; i++) {
			y = $hf.vis.renderVisualization(x, y, $hf.layout.footer[i], data);
		}
		return y;
	}

	$hf.drawBorder = function(x, y, attr) {
		var rect = new Kinetic.Rect({
			x: x,
			y: y,
			width: attr.width, 
			height: attr.height,
			stroke: attr.borderColor,
			strokeWidth: attr.borderThickness
		});
		layer.add(rect); 
		$hf.stage.stage.add(layer);
	}

})(window, undefined);