$('.main_5').hover(
    function(){
        $(this).children().css('width','500px')
        $(this).css('width','500px')
        // $(this).animate({width:500},true,1000,"linear")
    },
    function(){
        $(this).children().css('width','340px')
        $(this).css('width','340px')
    }
)
$('.main_t').hover(
    function(){
        $(this).css('background-size','1300px auto')
        $(this).css('background-position','-300px -100px')
    },
    function(){
        $(this).css('background-size','1080px auto')
        $(this).css('background-position','center -50px')
    }

)
$(document).scroll(function(){
    var dTop = $(document).scrollTop() 
    if(dTop > 100){
        $('.backTop').css('display','block')
    }else{
        $('.backTop').css('display','none')
    }
    if(dTop > 32){
        $('.home_guide').css({'position':'fixed','top':0})
        $('.home_guide').css('background','white')
        $('.home_guide .icon-VIVO').css('color','#000')
        $('.home_guide .home_phones li>a').css('color','#000')
    }else{
        $('.home_guide').css({'position':'absolute','top':32})
        $('.home_guide').css('background','none')
        $('.home_guide .icon-VIVO').css('color','white')
        $('.home_guide .home_phones li>a').css('color','white')
    }
})
$('.backTop div').click(function(){
    $(document).scrollTop(0)
})
$('.home_search').click(function(){
    $('.h_search').css('display','block')
})
$('.cha').click(function(){
    $('.h_search').css('display','none')
})
// $('.h_search').click(function(){
//     $('.h_search').css('display','none')
// })
$('.h_search').children().click(function(e){
    e.stopProPagation()
})
$('.phone').hover(
    function(){
        $('.home_guide').css('background','white')
        $('.home_guide .icon-VIVO').css('color','#000')
        $('.home_guide .home_phones li>a').css('color','#000')
        $(this).children('a').css('color','blue')
    },
    function(){
        $('.home_guide').css('background','none')
        $('.home_guide .icon-VIVO').css('color','white')
        $('.home_guide .home_phones li>a').css('color','white')
    }
)
$('.phone').hover(
    function(){
        $(this).children('.phone_to').css('display','block')
    },
    function(){
        $(this).children('.phone_to').css('display','none')
    }
)

$('._list li').hover(
    function(){
        setTimeout(function(){
            $(this).children('.phone_img1').css('left','50px')
            $(this).children('.phone_img2').css('left','65px')
            $(this).children('.phone_img4').css('left','95px')
        },2000)
    },
    function(){
        $(this).children('img').css('left','80px')
    }
)