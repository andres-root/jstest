window.onload = function () {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var length, divergence, reduction, line_width, startpoints = [];
	
	setup();

	function setup() {
		context.fillStyle = "white";
		context.fillRect(0, 0, canvas.width, canvas.height);

		length = 100 + Math.round(Math.random() * 50);
		divergence = 10 + Math.round(Math.random() * 50);
		probability = Math.random();
		if (probability < 0.5) {
			reduction = 0.75;
		} else {
			reduction = Math.round(50 + Math.random() * 20) / 100;
		}
		line_width = 10;

		var trunk = {x: canvas.width / 2, y: length + 50, angle: 90};
		startpoints = [];
		startpoints.push(trunk);

		context.beginPath();
		context.moveTo(trunk.x, canvas.height - 50);
		context.lineTo(trunk.x, canvas.height - trunk.y)
		context.strokeStyle = "brown";
		context.lineWidth = line_width;
		context.stroke();

		branch();		
	}

	function branch() {
		length = length * reduction;
		line_width = line_width * reduction;
		context.lineWidth = line_width;

		var new_startpoints = [];
		for (var i = 0; i < startpoints.length; i++) {
			var startpoint = startpoints[i];
			var endpoint1 = get_endpoint(startpoint.x, startpoint.y, startpoint.angle+divergence, length);
			var endpoint2 = get_endpoint(startpoint.x, startpoint.y, startpoint.angle-divergence, length);

			context.moveTo(startpoint.x, canvas.height - startpoint.y);
			context.lineTo(endpoint1.x, canvas.height - endpoint1.y);
			
			context.moveTo(startpoint.x, canvas.height - startpoint.y);
			context.lineTo(endpoint2.x, canvas.height - endpoint2.y);

			endpoint1.angle = startpoint.angle + divergence;
			endpoint2.angle = startpoint.angle - divergence;

			new_startpoints.push(endpoint1);
			new_startpoints.push(endpoint2);
		}
			if (length < 10) {
				context.strokeStyle = "green";
			} else {
				context.strokeStyle = "brown";
			}
			context.stroke();

			startpoints = new_startpoints;
			if (length > 2) {
				setTimeout(branch, 50);
			} else {
				setTimeout(setup, 500);
			}
	}

	function get_endpoint(x, y, angle, length) {
		var endpointx = x + length * Math.cos(angle * Math.PI / 180);
		var endpointy = y + length * Math.sin(angle * Math.PI / 180);
		return {x: endpointx, y: endpointy}
	}
}
