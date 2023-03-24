$('html, body').stop().animate({
    scrollLeft : 0
}, 1000)

var sect1, sect2, sect3, sect4
function init(){
    sect1 = $('#sect1').offset().left
    sect2 = $('#sect2').offset().left
    sect3 = $('#sect3').offset().left
    sect4 = $('#sect4').offset().left
}
init()
$(window).on('resize', function(){
    init()
})

$('#menu li a').on('click', function(){
    var num = $(this).parent().index()
    var sectdist = $('section').eq(num).offset().left
    $('.walkBox').addClass('on')
    $('html, body').animate({
        scrollLeft:sectdist
    }, 600, function(){
        $('.walkBox').removeClass('on')
    })
    return false; 
})

var sct=0;
$(window).on('scroll', function(){
    sct = $(this).scrollLeft()
    if ( sct>=0 && sct<sect2) {
        $('#menu li').eq(0).addClass('on')
        $('#menu li').eq(0).siblings().removeClass('on')
    } else if ( sct>=sect2 && sct<sect3 ) {
        $('#menu li').eq(1).addClass('on')
        $('#menu li').eq(1).siblings().removeClass('on')
        $('body').removeClass('on')
    } else if ( sct>=sect3 && sct<sect4 ) {
        $('#menu li').eq(2).addClass('on')
        $('#menu li').eq(2).siblings().removeClass('on')
        $('body').addClass('on')
    } else if ( sct>=sect4) {
        $('#menu li').eq(3).addClass('on')
        $('#menu li').eq(3).siblings().removeClass('on')
    } 
})

$('section').on('mousewheel', function(e, delta){
    $('.walkBox').addClass('on')
    if (delta>0) {    
            $('html, body').stop().animate({
                scrollLeft:'-=200px'
            }, 300, function(){
                $('.walkBox').removeClass('on')
            })
   } else if (delta<0) {  
            $('.walkBox').addClass('on')
            $('html, body').stop().animate({
                scrollLeft:'+=200px'
            }, 300, function(){
                $('.walkBox').removeClass('on')
            })
    }
})


$('.open').on('click', function(){
    $(this).toggleClass('on')
})

$('.openlist li a').on('click', function(){
    $('.open').removeClass('on')
})