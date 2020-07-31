$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#menu',
		lockAnchors: false,
		anchors:['1', '2', '3', '4'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['1', '2', '3', '4'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

	});
});