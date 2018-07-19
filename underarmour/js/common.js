$('#b').owlCarousel({
    loop:true,
    nav : true,
    navText : ["">""],
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    



window.addEventListener("load", function(){
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
});
    




$('#c').owlCarousel({
    loop:true,
    nav : true,
    navText : ["">""],
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#n').owlCarousel({
    loop:true,
    nav : true,
    navText : ["">""],
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


    
    $('.btn-open').on('click', function(e){
        e.preventDefault
        $('.wrp-form').hide();
        $('.forma').fadeIn(1000);
    });

    $('.close').on('click', function(){
        $('.forma').hide();
        $('.wrp-form').show();
    });
    
    $(window).scroll(function() {
    if ($(this).scrollTop() > $('.models').offset().top - 400) {
        // создаем эффекты и анимацию
        $(".model-title").css("opacity", "1");
            $(".title-line-model").animate({
                width: '160px',
                height: '9px'
            });
        }
        
    });

    $(window).scroll(function() {
    if ($(this).scrollTop() > $('.delivery').offset().top - 400) {
        // создаем эффекты и анимацию
        $(".delivery-title").css("opacity", "1");
            $(".title-line-delivery").animate({
                width: '160px',
                height: '9px'
            });
        $( "#item1" ).delay( 1000 ).fadeIn( 400 );
        $( "#item2" ).delay( 1600 ).fadeIn( 400 );
        $( "#item3" ).delay( 2200 ).fadeIn( 400 );
        $( "#item4" ).delay( 2800 ).fadeIn( 400 );
        
        }
        
    });




    
    $(window).scroll(function() {
    if ($(this).scrollTop() > $('.gallery').offset().top - 400) {
       
        $(".title-gallery").css("opacity", "1");
            $(".title-line-gallery").animate({
                width: '160px',
                height: '9px'
            });
        }
        
    });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.reviews').offset().top - 400) {
        
            $(".review__title").css("opacity", "1");
            $(".title-line-reviews").animate({
                width: '160px',
                height: '9px'
            });
        
        }
        
    });





  $('.btn').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.models').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.models').offset().top }, 500); 
        }
    return false;
});  
    





/*гамбургер*/   
$(".fa-bars").click(function(){
        $(".small-menu").slideToggle();
});
 /*гамбургер*/

$('#S_home').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.header').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.header').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});

$('#S_delivery').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.delivery').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.delivery').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});

$('#S_models').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.models').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.models').offset().top }, 500);
        $(".small-menu").slideUp();
        }
        return false;
});

$('#S_gallery').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.gallery').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.gallery').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});

$('#S_reviews').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.reviews').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.reviews').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});  
    
    
$('#S_footer').on('click', function(){ 
var scroll_el = $(this).attr('href'); 
    if ($('.footer').length != 0) { 
        $('html, body').animate({ scrollTop:   $('.footer').offset().top }, 500); 
        $(".small-menu").slideUp();
        }
return false;
});



/*закрыть всплывающее меню*/  
$(".fa-times").click(function(){
        $(".small-menu").slideUp();
});
/*закрыть всплывающее меню*/ 




$('#home').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.header').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.header').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});

$('#delivery').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.delivery').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.delivery').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});

$('#models').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.models').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.models').offset().top }, 500);
        $(".small-menu").slideUp();
        }
        return false;
});

$('#gallery').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.gallery').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.gallery').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});

$('#reviews').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.reviews').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.reviews').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});  
    
    
$('#footer').on('click', function(){ 
var scroll_el = $(this).attr('href'); 
    if ($('.footer').length != 0) { 
        $('html, body').animate({ scrollTop:   $('.footer').offset().top }, 500); 
        $(".small-menu").slideUp();
        }
return false;
});


$(".size").click(function(){
        $(".size-popup").fadeIn();
});

$(".size-close").click(function(){
        $(".size-popup").fadeOut();
});


$(window).scroll(function(){
    parallax();
})

function parallax(){
    var wScroll = $(window).scrollTop();
    $('.parallax--bg').css('background-position','center '+(wScroll/2)+'px');
    $('h1').css({'top': -$(window).scrollTop()/3});
}





$("input[name*='name_last']").addClass("hidden");
name="name_first"
$("input[name*='name_first']").addClass("name col-xs-8 col-xs-offset-2");

$("lable[for*='name_last']").addClass("hidden");

$("input[name*='phone']").addClass("tel col-xs-8 col-xs-offset-2");

$("button").addClass("popup-btn col-xs-8 col-xs-offset-2");

$('form input[name=phone]').closest('.form-group').after('<div class="form-group"><select class="form-control col-xs-8 col-xs-offset-2" style="border-radius: 0;" required name="color"><option selected="selected" value="" class="">Модель</option><option value="man" class="">Мужской</option><option value="woman" class="">Женский</option></select></div>')