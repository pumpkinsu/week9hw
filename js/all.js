$(document).ready(function(){
   $(".title").hover(function(){
        $("#content").slideDown(1000);
    }, function(){
    $("#content").slideUp(500);});
   $(function() {
			$( "#accordion" ).accordion();
		});
});
