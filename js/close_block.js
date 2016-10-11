$(document).ready(function() {
	$(".show_close_block").click(function() {
		var del = $(this).closest('body').find('.clear_coment');
	    if(!del.is(':visible')) {
	    $('.clear_coment').hide();
	    del.show();
		}
		else{del.hide();}
		$(this).closest('body').find('.menu_list').hide();
	});
})