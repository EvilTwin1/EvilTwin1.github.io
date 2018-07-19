$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    dots:false,
    autoHeight: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

$( document ).ready(function() {
    $('#proj1').click(function(e){
        e.preventDefault();
        $("#info1").toggle();
    });
    
    $('#proj2').click(function(e){
        e.preventDefault();
        $("#info2").toggle();
    });
    
    $('#proj3').click(function(e){
        e.preventDefault();
        $("#info3").toggle();
    });
    
    
     window.addEventListener("load", function(){
        var load_screen = document.getElementById("load_screen");
        document.body.removeChild(load_screen);
    });

    
    $(window).scroll(function() {
    if ($(this).scrollTop() > $('.header').offset().top + 700) {
            $(".menu-fix").css("display", "block");
        }
        else{
            $(".menu-fix").css("display", "none");
        }
        
    });
    
    
    $('.arrow-down').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.about').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.about').offset().top }, 500); 
        }
    return false;
});  
    
});