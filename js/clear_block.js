/*This script delete block, in which it is*/
$(document).ready(function () {
  $('.clear_coment').click(function(e){
  	$(this).parent().clone().appendTo(".history_deleted");
    var index=$('.clear_coment').index(this); 
    $(this).parent().remove();
  	$('.clear_coment').hide();
  });
})