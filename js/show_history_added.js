$(document).ready(function() {
	$(".history_added_button").click(function() {
		var his = $(this).closest('body').find('.history_added');
	    if(!his.is(':visible')) {
	    $('.history_added').hide();
	    his.show();
		}
		else{his.hide();}
	});
})