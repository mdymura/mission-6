$(document).ready(function () {
  $('.close_blocks').click(function(){
  		$('.basic').clone().appendTo(".history_deleted");
  		$('.added_object').clone().appendTo(".history_deleted");
  		// $('.object1').remove();
  		$('.divs').remove();
  		$('container').append('<div class="divs"></div>');
  		// $('<div class="divs">' + '</div>' + '<div class"basic"></div>').appendTo(".history_added");
  		$(this).closest('body').find('.menu_list').hide();
	 })
});