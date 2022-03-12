$(function(){
    'use strict';

    // Add Active to item
    $('.navbar-nav li').on('click',function(){
     $(this).addClass('active').siblings().removeClass();
    });
    //Scroll to Top Icon
    $('.scroll-top i').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500)
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-top i').fadeIn();
        } else {
            $('.scroll-top i').fadeOut();
        }
    });
    $('.scroll-top i').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500)
    });
    // Navbar Changes On Scroll Down
    var navbar = $('.navbar');
        $(window).scroll(function(){
        if ($(window).scrollTop() >= navbar.height()) {
            $('.navbar').css({
                'padding':'1em',
                'fontSize':'1em',
                
             });
            navbar.addClass('main-color');
             $('.navbar-brand').css('fontSize','1em');
        }else {
            $('.navbar').css({
                'padding':'1.5em',
                'backgroundColor':'transparent'
        });
            navbar.removeClass('main-color');
            $('.navbar-brand').css('fontSize','1.25em');

        }
    });
    //Scroll Down Icon
    $('.scroll-down').on('click',function(){
        $('html,body').animate({
            scrollTop:$('.features').offset().top
        },2000)
    });
    // Scroll to Div 
    $('.navbar-nav li a').click(function(e){
        e.preventDefault();
        var x = $('#' + $(this).data('s'));
        console.log(x);
        $('html,body').animate({
            scrollTop: x.offset().top - 80
        },600)
    });
    //CountTo Simple Function
     function countTo(select,number) {
        var count = 1;
     var fun =  setInterval(function(){
            count++
            $(select).html(count);
            if ( count >= number) {
                clearInterval(fun);
            }
        },50)
    }
        countTo('.count',500)

   // Nice Scroll Config
   $("html,body").niceScroll({
    cursorcolor: "#203A43",
    cursorwidth: "10px",
    cursorborder:'1px solid #203A43',
    cursorborderradius:'0px',
    scrollspeed: 160, // scrolling speed
    mousescrollstep: 15, // scrolling speed with mouse wheel (pixel)
   });
   //Google Maps
});
//loading
$(window).on('load',function(){
    $('.v-loading').fadeOut();
})
