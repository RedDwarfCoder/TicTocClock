$(document).ready(function() {
	startTime();
});

function startTime() {
	var today = new Date();
	var hourOrig = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	var hour = hourOrig;

	// Reset borders
	$('.cell').css('border', '3px solid #acacac');

	// Reset the minutes and seconds
	$('.cell div').text(' .').css('background-color', '#acacac');

	/*======================================
	           Hours
	======================================*/
	if (hour >= 12) {
		$('.table').css('border', '3px solid #ff0000');
	}

	if (hour > 12) {
		hour = hour - 12;
	}

	if (hour >= 1) {
		$('.two').css('border-left', '3px solid #ff0000');
	}

	if (hour >= 2) {
		$('.two').css('border-bottom', '3px solid #ff0000');
	}

	if (hour >= 3) {
		$('.two').css('border-right', '3px solid #ff0000');
	}

	if (hour >= 4) {
		$('.six').css('border-top', '3px solid #ff0000');
	}

	if (hour >= 5) {
		$('.six').css('border-left', '3px solid #ff0000');
	}

	if (hour >= 6) {
		$('.six').css('border-bottom', '3px solid #ff0000');
	}

	if (hour >= 7) {
		$('.eight').css('border-right', '3px solid #ff0000');
	}

	if (hour >= 8) {
		$('.eight').css('border-top', '3px solid #ff0000');
	}

	if (hour >= 9) {
		$('.eight').css('border-left', '3px solid #ff0000');
	}

	if (hour >= 10) {
		$('.four').css('border-bottom', '3px solid #ff0000');
	}

	if (hour >= 11) {
		$('.four').css('border-right', '3px solid #ff0000');
	}

	if (hour >= 12) {
		$('.four').css('border-top', '3px solid #ff0000');
	}

	/*====== End of Hours =================*/

	/*======================================
	           Minutes
	======================================*/
	var minuteGroups = parseInt(minute/7);
	var numberInlastGroup = minute%7;
	var lastGroupText = " .";

	for (var i = 1; i <= minuteGroups; i++) {
		$(".minuteText"+i).text("|/_/|/_").css("background-color", "#00ff00");
	}

	for (var i = 1; i <= numberInlastGroup; i++) {
		switch (i) {
			case 5:
			case 1:
				lastGroupText = lastGroupText + "|";
				break;
			case 6:
			case 4:
			case 2:
				lastGroupText = lastGroupText + "/";
				break;
			case 7:
			case 3:
				lastGroupText = lastGroupText + "_";
				break;
		}
	}

	$(".minuteText"+(minuteGroups+1)).text(lastGroupText);

	/*====== End of Minutes =================*/

	/*======================================
	           Seconds
	======================================*/
	var secondGroups = parseInt(second/7);
	var numberInlastGroup2 = second%7;
	var lastGroupText = " .";

	for (var i = 1; i <= secondGroups; i++) {
		$(".secondText"+i).text("|/_/|/_").css("background-color", "#0000ff");
	}

	for (var i = 1; i <= numberInlastGroup2; i++) {
		switch (i) {
			case 5:
			case 1:
				lastGroupText = lastGroupText + "|";
				break;
			case 6:
			case 4:
			case 2:
				lastGroupText = lastGroupText + "/";
				break;
			case 7:
			case 3:
				lastGroupText = lastGroupText + "_";
				break;
		}
	}

	$(".secondText"+(secondGroups+1)).text(lastGroupText);

	/*====== End of Seconds =================*/


	updatePopUpTime(hour, minute, second);

	// Do every 1/2 second
	var t = setTimeout(startTime, 500);
}

function formatTime(whichTime) {
	if (whichTime < 10) {
		whichTime = '0' + whichTime;
	}

	return whichTime
}

function updatePopUpTime(hour, minute, second) {
	hour = formatTime(hour);
	minute = formatTime(minute);
	second = formatTime(second);

	$('#popUpTime').text('The time is ' + hour + ':' + minute + ':' + second);

	$('.container').hover(function() {
		$('#popUpTime').show();
	}, function () {
		$('#popUpTime').hide();
	})
}