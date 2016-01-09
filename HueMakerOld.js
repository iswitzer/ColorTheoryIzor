function clear() {
		$(".color, .color1, .color2, .color3").remove();
	}
	
function submit() {
		
	var color = $("#colorStart").val();
	color = color.replace('#', '');

	var red1 = color.charAt(0);
	var red2 = color.charAt(1);
	var green1 = color.charAt(2);
	var green2 = color.charAt(3);
	var blue1 = color.charAt(4);
	var blue2 = color.charAt(5);
	
	function hexToDec1 (color) {
		switch(color) {
			case "0": dec1 = 0; break;
			case "1": dec1 = 1*16; break;
			case "2": dec1 = 2*16; break;
			case "3": dec1 = 3*16; break;
			case "4": dec1 = 4*16; break;
			case "5": dec1 = 5*16; break;
			case "6": dec1 = 6*16; break;
			case "7": dec1 = 7*16; break;
			case "8": dec1 = 8*16; break;
			case "9": dec1 = 9*16; break;
			case "a": dec1 = 10*16; break;
			case "b": dec1 = 11*16; break;
			case "c": dec1 = 12*16; break;
			case "d": dec1 = 13*16; break;
			case "e": dec1 = 14*16; break;
			case "f": dec1 = 15*16; break;
			default: alert ("incompatible number"); break;
		}
	}

	function hexToDec2 (color) {
		switch(color) {
			case "0": dec2 = 0; break;
			case "1": dec2 = 1; break;
			case "2": dec2 = 2; break;
			case "3": dec2 = 3; break;
			case "4": dec2 = 4; break;
			case "5": dec2 = 5; break;
			case "6": dec2 = 6; break;
			case "7": dec2 = 7; break;
			case "8": dec2 = 8; break;
			case "9": dec2 = 9; break;
			case "a": dec2 = 10; break;
			case "b": dec2 = 11; break;
			case "c": dec2 = 12; break;
			case "d": dec2 = 13; break;
			case "e": dec2 = 14; break;
			case "f": dec2 = 15; break;
			default: alert ("incompatible number"); break;
		}
	}
		
	hexToDec1(red1);
	var red1dec = dec1;
			
	hexToDec2(red2);
	var red2dec = dec2;

	hexToDec1(green1);
	var green1dec = dec1;

	hexToDec2(green2);
	var green2dec = dec2;

	hexToDec1(blue1);
	var blue1dec = dec1;
			
	hexToDec2(blue2);
	var blue2dec = dec2;

	var red = red1dec + red2dec;
	var green = green1dec + green2dec;
	var blue = blue1dec + blue2dec;
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
		
		if (hex>0) {
		if (hex<765) {
		if (hex>300) {
		if (redhex!=255) {
		if (greenhex!=255) {
		if (bluehex!=255) {			
			$("<div class='color'></div>").css("background-color", "#" + color1).html("#" + color1 + "</br>R" + redhex + "</br>G" + greenhex +"</br>B" + bluehex).prependTo("#colors");}
		else {
			$("<div class='color2'></div>").css("background-color", "#" + color1).html("#" + color1 + "</br>R" + redhex + "</br>G" + greenhex +"</br>B" + bluehex).prependTo("#colors");}
		}
		else {
			$("<div class='color2'></div>").css("background-color", "#" + color1).html("#" + color1 + "</br>R" + redhex + "</br>G" + greenhex +"</br>B" + bluehex).prependTo("#colors");}
		}
		else {
			$("<div class='color2'></div>").css("background-color", "#" + color1).html("#" + color1 + "</br>R" + redhex + "</br>G" + greenhex +"</br>B" + bluehex).prependTo("#colors");}
		}
		else {
			if (redhex!=0) {
		if (greenhex!=0) {
		if (bluehex!=0) {	
			$("<div class='color1'></div>").css("background-color", "#" + color1).html("#" + color1 + "</br>R" + redhex + "</br>G" + greenhex +"</br>B" + bluehex).prependTo("#colors");}
		else {
			$("<div class='color3'></div>").css("background-color", "#" + color1).html("#" + color1 + "</br>R" + redhex + "</br>G" + greenhex +"</br>B" + bluehex).prependTo("#colors");}	
		}
		else {
			$("<div class='color3'></div>").css("background-color", "#" + color1).html("#" + color1 + "</br>R" + redhex + "</br>G" + greenhex +"</br>B" + bluehex).prependTo("#colors");}	
		}	
		else {
			$("<div class='color3'></div>").css("background-color", "#" + color1).html("#" + color1 + "</br>R" + redhex + "</br>G" + greenhex +"</br>B" + bluehex).prependTo("#colors");}	
		}
		}
		}
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