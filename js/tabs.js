$(function(){

	$('#tabs ul li').click(function(){
		var id= $(this).children().attr('href');

		//cache celui qui est actif
		$('#tabs div.active').removeClass('active').toggle();
		$('#tabs ul li.active').removeClass('active');

		//affiche celui qui est cliqué
		$(id).addClass('active').fadeToggle('fast');
		$(this).addClass('active');
	});

});