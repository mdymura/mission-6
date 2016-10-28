$(document).ready(function () {
  $('.menu_open', '.menu').click(function(){
  	// var obj = $('ul', '.menu');
  	// if (obj.hasClass('menu_list')) {
   //  	obj.removeClass('menu_list');
  	// }else{
  	// 	obj.addClass('menu_list');
  	// }
  	var menu = $(this).closest('body').find('.menu_list');
	    if(!menu.is(':visible')) {
	    $('.menu_list').hide();
	    menu.show();
		}
		else{menu.hide();}
});
  })
  $(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(".menu_open").length) return;
    $(".menu_list").hide("slow");
    event.stopPropagation();
  });
});