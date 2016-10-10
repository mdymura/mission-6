$(function (){
	$('.create_block').click(function(){
		var object_name = $('#object_name').val();
		var adress = $('#adress').val();
		var contacts = $('#contacts').val();
		var information = $('#information').val();
    	$('.basic').append('<div class="object1">'+
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
	})
});
