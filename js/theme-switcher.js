

jQuery(function($){
	

	// style switcher area hide & active

	  $('.style-switch-button').click(function(){
	    $('.theme_style_switcher').toggleClass("style-switch-active");
	  })

	  // theme style css changed	 

	  $('#bridge').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/bridge-theme.css');
	  });

	  $('#default').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/default-theme.css');
	  });

	  $('#darkRed').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/dark-red-theme.css');
	  });

	  $('#green').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/green-theme.css');
	  });

	  $('#liteBlue').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/lite-blue-theme.css');
	  });

	  $('#orange').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/orange-theme.css');
	  });

	  $('#pink').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/pink-theme.css');
	  });

	  $('#blue').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/blue-theme.css');
	  });

	  $('#red').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/red-theme.css');
	  });  

	  $('#yellow').click(function (e){
	  	e.preventDefault();
	    $('#switcher').attr('href','css/themes/yellow-theme.css');
	  });
	
});