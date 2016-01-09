function clear() {
	$(".color, .color1, .color2, .color3").remove();
}

function submit() {

	var color = $("#colorStart").val();
	color = color.replace('#', '');
	color = color.match(/[\s\S]{1,2}/g) || [];
	var red = parseInt(color[0], 16);
	var green = parseInt(color[1], 16);
	var blue = parseInt(color[2], 16);
	var hueInterval = $("#hueInterval").val();
	var eye = (Math.floor(-255/hueInterval)-1);
	var aye = (Math.floor(255/hueInterval)+1);

	function hueToHex1(hue) {
		switch(hue) {
			case 0: case 1: case 2:
			case 3: case 4: case 5:
			case 6: case 7: case 8:
			case 9: hexHue1 = hue; break;
			case 10: hexHue1 = "a"; break;
			case 11: hexHue1 = "b"; break;
			case 12: hexHue1 = "c"; break;
			case 13: hexHue1 = "d"; break;
			case 14: hexHue1 = "e"; break;
			case 15: hexHue1 = "f"; break;
		}
	}

	function hueToHex2(hue) {
		switch(hue) {
			case 0: case 1: case 2:
			case 3: case 4: case 5:
			case 6: case 7: case 8:
			case 9: hexHue2 = hue; break;
			case 10: hexHue2 = "a"; break;
			case 11: hexHue2 = "b"; break;
			case 12: hexHue2 = "c"; break;
			case 13: hexHue2 = "d"; break;
			case 14: hexHue2 = "e"; break;
			case 15: hexHue2 = "f"; break;
		}
	}

	for (var i=eye; i<aye; i++) {
		var hueInterval = $("#hueInterval").val();
		hueInterval = +hueInterval * i;

		var redhex = (red + +hueInterval);

		if (redhex>255)
		{redhex = 255}
		else{
			if (redhex<0) {redhex = 0}
		}

		var redhue1 = (Math.floor(redhex/16));
		var redhue2 = (((redhex/16)% 1)*16);

		hueToHex1(redhue1);
		var redhexhue1 = hexHue1;

		hueToHex2(redhue2);
		var redhexhue2 = hexHue2;

		var greenhex = (green + +hueInterval);

		if (greenhex>255)
		{greenhex = 255}
		else{
			if (greenhex<0) {greenhex = 0}
		}

		var greenhue1 = (Math.floor(greenhex/16));
		var greenhue2 = (((greenhex/16)% 1)*16);

		hueToHex1(greenhue1);
		var greenhexhue1 = hexHue1;

		hueToHex2(greenhue2);
		var greenhexhue2 = hexHue2;

		var bluehex = (blue + +hueInterval);

		if (bluehex>255)
		{bluehex = 255}
		else{
			if (bluehex<0) {bluehex = 0}
		}

		var bluehue1 = (Math.floor(bluehex/16));
		var bluehue2 = (((bluehex/16)% 1)*16);

		hueToHex1(bluehue1);
		var bluehexhue1 = hexHue1;

		hueToHex2(bluehue2);
		var bluehexhue2 = hexHue2;

		var color1 = (redhexhue1.toString() + redhexhue2.toString() + greenhexhue1.toString() + greenhexhue2.toString() + bluehexhue1.toString() + bluehexhue2.toString());

		var hex = redhex + greenhex + bluehex;

		var border;

		if (hex>0) {
			if (hex<765) {
				if (hex>300) {
					if (redhex!=255) {
						if (greenhex!=255) {
							if (bluehex!=255) {
								border = 'color';}
							else {
								border = 'color2';}
						}
						else {
							border = 'color2';}
					}
					else {
						border = 'color2';}
				}
				else {
					if (redhex!=0) {
						if (greenhex!=0) {
							if (bluehex!=0) {
								border = 'color1';}
							else {
								border = 'color3';}
						}
						else {
							border = 'color3';}
					}
					else {
						border = 'color3';}
				}
			}
		}
		$("<div class=\'" + border + "\'></div>").css("background-color", "#" + color1).html("#" + color1 + "</br>R" + redhex + "</br>G" + greenhex +"</br>B" + bluehex).prependTo("#colors");
	}
}

$(document).ready(function() {
	$("#clear").click(function() {
		clear();
	});

	$("#submit2").on('click', function() {
		submit();
	});

	$("#submit1").on('click', function() {
		clear();
		submit();
	});
});