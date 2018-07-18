$('document').ready(function () {
    
    
    
    
    $(window).scroll(function() {   
        
        if ($(document).scrollTop() > 100 ) {
            $(".head").addClass("fix-menu");
        }
        else{
            $(".head").removeClass("fix-menu");   
        };
        
    });






















});
