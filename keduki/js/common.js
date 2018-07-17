$(document).ready(function(){

/*карусель*/
$('.owl-carousel').owlCarousel({
    loop:true,
    nav : true,
    navText : ["">""],
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
    
/*карусель*/   
    
    
    
    
/*ссылка на popup*/  
$('.KedukiVintage').on('click',function(){
    $('.popup-wrapp').fadeIn();
    $('#KedukiVintage').fadeIn(); 
    $("html,body").css("overflow","hidden");
});
    
 $('.KedukiTireno').on('click',function(){
    $('.popup-wrapp').fadeIn();
     $('#KedukiTireno').fadeIn();
     $("html,body").css("overflow","hidden");
});
    
$('.KedukiUgoConti').on('click',function(){
    $('.popup-wrapp').fadeIn();
    $('#KedukiUgoConti').fadeIn();
    $("html,body").css("overflow","hidden");
});
/*ссылка на popup*/ 
    
    
/*закрыть popup*/  
$(".close").click(function(){
    $(".popup-wrapp").hide();
    $(".popup").hide();
    $("html,body").css("overflow","visible");
});
    
$(".popup-wrapp").click(function(event){
    $(".popup-wrapp").hide();
    $(".popup").hide(); 
    $("html,body").css("overflow","visible");
});   
     
/*закрыть на popup*/
    
    

/*ссылка на каталог*/
$('.header__btn').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.catalog').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.catalog').offset().top }, 500); 
        }
    return false;
});
/*ссылка на каталог*/
    
    
/*главное меню*/
$('#home').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.header').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.header').offset().top }, 500); 
        }
    return false;
});

$('#product').on('click', function(){ 
	var scroll_el = $(this).attr('href');  
        if ($('.product').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.product').offset().top }, 500); 
        }
    return false;
});

$('#catalog').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.catalog').length != 0) { 
            $('html, body').animate({ scrollTop: $('.catalog').offset().top }, 500); 
        }
        return false;
});

$('#delivery ').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.delivery').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.delivery').offset().top }, 500); 
        }
    return false;
});

$('#reviews').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.reviews').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.reviews').offset().top }, 500); 
        }
    return false;
});
    
$('#footer').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.footer').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.footer').offset().top }, 500); 
        }
    return false;
});
/*главное меню*/




/*всплывающее меню*/ 
 /*гамбургер*/   
$(".fa-bars").click(function(){
        $(".small-menu").slideToggle();
});
 /*гамбургер*/

$('#S_home').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.reviews').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.home').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});

$('#S_product').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.reviews').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.product').offset().top }, 500);
        $(".small-menu").slideUp();
        }
    return false;
});

$('#S_catalog').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.reviews').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.catalog').offset().top }, 500);
        $(".small-menu").slideUp();
        }
        return false;
});

$('#S_delivery').on('click', function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($('.reviews').length != 0) { 
	       $('html, body').animate({ scrollTop: $('.delivery').offset().top }, 500);
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
	   $('html, body').animate({ scrollTop: $('.footer').offset().top }, 500); 
        $(".small-menu").slideUp();
        }
return false;
});
/*закрыть всплывающее меню*/  
$(".fa-times").click(function(){
        $(".small-menu").slideUp();
});
/*закрыть всплывающее меню*/   
/*всплывающее меню*/
  
    
    
    
var arr1 = []
    for (var x=0; x<= 70; x++){
        var path = $('body').attr('data-path') + '1/';
        var x2 = 'img3d_000045.3d.100.';
        arr1.push(path + x2 + x + ".jpg");
    };
    
var arr2 = []
    for (var x=1; x<= 72; x++){
        var path = $('body').attr('data-path') + '2/';
        var x2 = '0';
        arr2.push(path + x2 + x + ".jpg");
    };
    
var arr3 = []
    for (var x=1; x<= 72; x++){
        var path = $('body').attr('data-path') + '3/';
        var x2 = '0';
        arr3.push(path + x2 + x + ".jpg");
    };


  $("#bl36").threesixty({images:arr1, method:'auto', autoscrollspeed:100});
  $("#bl362").threesixty({images:arr2, method:'auto', autoscrollspeed:100});
  $("#bl363").threesixty({images:arr3, method:'auto', autoscrollspeed:100});
    
    
$("#360KedukiUgoConti").click(function(){
    $("#PKedukiUgoConti").fadeIn();
});
$(".close360").click(function(){
    $("#PKedukiUgoConti").fadeOut();
});
  
    
    
$("#360KedukiTireno").click(function(){
    $("#PKedukiTireno").fadeIn();
});
$(".close360").click(function(){
    $("#PKedukiTireno").fadeOut();
});
    
    
$("#360KedukiVintage").click(function(){
    $("#PKedukiVintage").fadeIn();
});
$(".close360").click(function(){
    $("#PKedukiVintage").fadeOut();
});
    
    $("label").hide();
    $("input[name*='name_last']").hide();
    $("input[type*='text']").addClass("name col-xs-6 col-xs-offset-3");
    $("input[type*='tel']").addClass("tel col-xs-6 col-xs-offset-3");
    $("button").addClass("popup-btn col-xs-6 col-xs-offset-3");

});  