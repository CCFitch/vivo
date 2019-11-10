$('.home_phones').hover(
    function(){
        $('.home_guide').css('background','white')
        $('.home_guide .icon-VIVO').css('color','#000')
        $('.home_guide .home_phones li>a').css('color','#000')
        $(this).children('a').css('color','blue')
        // $(this).children('.phone_to').slideDown(500,'swing')
    },
    function(){
        $('.home_guide').css('background','none')
        $('.home_guide .icon-VIVO').css('color','white')
        $('.home_guide .home_phones li>a').css('color','white')
        // $(this).children('.phone_to').slideUp(500,'swing')
    }
)
$('.phone').hover(
    function(){
        $('.phone').children('.phone_to').stop(true,true)
        $(this).children('.phone_to').slideDown(500,'swing')
        // $(this).children('.phone_to').slideDown(500,"swing")
        $(this).children('.phone_to').slideDown(500,"swing")
    },
    function(){
        $('.phone').children('.phone_to').stop(true,true)
        $(this).children('.phone_to').slideUp(500,'swing')
        // setTimeout(function(){
        //     $(this).children('._list').css('display','none')
        // },500)
    }
)

$('._list li').hover(
    function(){
        $(this).children('img').stop(true,true)
        if($(this).children('img').length == 5){
            $(this).children('.phone_img1').animate({left:'50px'},500)
            $(this).children('.phone_img2').animate({left:'65px'},500)
            $(this).children('.phone_img3').animate({left:'80px'},500)
            $(this).children('.phone_img4').animate({left:'95px'},500)
            $(this).children('.phone_img5').animate({left:'115px'},500)
        }else if($(this).children('img').length == 4){
            $(this).children('.phone_img1').animate({left:'50px'},500)
            $(this).children('.phone_img2').animate({left:'65px'},500)
            $(this).children('.phone_img3').animate({left:'80px'},500)
            $(this).children('.phone_img4').animate({left:'95px'},500)
        }else if($(this).children('img').length == 3){
            $(this).children('.phone_img1').animate({left:'55px'},500)
            $(this).children('.phone_img2').animate({left:'80px'},500)
            $(this).children('.phone_img3').animate({left:'105px'},500)
        }else if($(this).children('img').length == 2){
            $(this).children('.phone_img1').animate({left:'55px'},500)
            $(this).children('.phone_img2').animate({left:'90px'},500)
        } 
    },
    function(){
        $(this).children('img').stop(true,true)
        $(this).children('img:not(.phone_img1)').animate({left:'80px'},500)
        $(this).children('.phone_img1').animate({left:'60px'},500)
    }
)