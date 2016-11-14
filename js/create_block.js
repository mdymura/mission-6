$('.create_block').click(function(){
		var object_name = $('#object_name').val();
		var adress = $('#adress').val();
		var contacts = $('#contacts').val();
		var information = $('#information').val();
		var his = $(this).closest('body').find('.new_object');
    	$('.divs').append('<div class="added_object">'+
       ' <img alt="close button" src="style/png/close.png" class="clear_coment">'+
            '<div class="img">'+
                '<img src="style/png/No_img.png" alt="picture">'+
            '</div>'+
            '<div class="object_name">'+
                object_name +
            '</div>'+
            '<br>'+
            '<div class="adress">'+
                'Адрес: ' +adress +
            '</div>'+
            '<div class="contacts">'+
                'Номер телефона: '+ contacts +
            '</div>'+
            '<br>'+
            '<div class="information">'+
                 information +
            '</div>'+
        '</div>');
        $('.added_object').clone().appendTo(".history_added");
    	his.hide();
    }   ); 
// $('.clear_coment').click(function(e){
//     $(this).parent().clone().appendTo(".history_deleted");
//     var index=$('.clear_coment').index(this); 
//     $(this).parent().remove();
//     $('.clear_coment').hide();
//   });
