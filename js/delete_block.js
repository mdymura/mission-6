/*This script delete block, in which it is*/
$(document).ready(function () {
  $('.delete_block', '.menu').click(function(){
  	var obj = $('ul', '.menu');
  	if (obj.hasClass('menu_list')) {

    	obj.removeClass('menu_list');
  	}else{
  		obj.addClass('menu_list');
  	}
    });
})