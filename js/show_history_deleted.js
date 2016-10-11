$(document).ready(function() {
	$(".history_deleted_button").click(function() {
		var his = $(this).closest('body').find('.history_deleted');
	    if(!his.is(':visible')) {
	    $('.history_deleted').hide();
	    his.show();
		}
		else{his.hide();}
	});
})