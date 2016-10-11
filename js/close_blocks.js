$(document).ready(function () {
  $('.close_blocks').click(function(){
  		$('.basic').clone().appendTo(".history_deleted");
  		$('.added_object').clone().appendTo(".history_deleted");
  		$('.divs').remove();
  		$(this).closest('body').find('.menu_list').hide();
	})
});