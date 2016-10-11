$(document).ready(function() {
	$(".show_add_block").click(function() {
		var add = $(this).closest('body').find('.new_object');
	    if(!add.is(':visible')) {
	    $('.new_object').hide();
	    add.show();
		}
		else{add.hide();}
		$(this).closest('body').find('.menu_list').hide();
	});
})