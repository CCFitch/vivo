window.onload=function(){
    // var str1 = window.location.href
    // var suc = str1.split('=')[1]

    // console.log(location.search);
    if(location.search){
        var searchArr=location.search.substr(1).split("&");
        for(var i=0;i<searchArr.length;i++){
            if(searchArr[i].split("=")[0]=="uername"){
            var name=decodeURIComponent(searchArr[i].split("=")[1]);	
                console.log(name)
            };
        }  
    }

    var str2 = localStorage.getItem("token")
    // console.log(str2)
    // console.log(suc)
    // console.log(str2)
    if(name){
        localStorage.setItem('username',name)
    }else if(str2){
        localStorage.setItem('username',str2)
    }else{
        localStorage.setItem('username','')
    }
    if(name || str2){    
        $('.home_top_r').html(`                
        <li class="home_goods"><a href="./global/goods.html">购物车</a></li>              
        <li class="home_per"><a href = "" >个人中心</a>
                <div class="home_per_list">
                    <p><a href="./global/per-my-collect.html"> 
                    <i class="iconfont icon-kuaidi"></i> 我的订单
                    </a></p>
                    <p><a href="./global/per-my-collect.html">
                    <i class="iconfont icon-ziyuan"></i> 我的收藏
                    </a></p>
                    <p><a href="./global/per-my-collect.html">
                    <i class="iconfont icon-erji"></i> 账号中心
                    </a></p>
                </ol>        
            
        </li>`)
            $('.home_per').hover(function(){
                console.log(666)
                $('.home_per_list').css({display:"block"})
            },function(){
                $('.home_per_list').css({display:"none"})
            })

    }else{
        return
    }
}

$('.home_phones').hover(
    function(){
        $('.phone').stop(true,true)
        console.log(666)
},function(){
    $('.mask_phone').slideUp(500,'swing') 
})

var col = $('.home_guide').css('background')

$('.phone').hover(
    function (){
        console.log(col)
        $('.mask_phone').stop(true,true)
        $('.phone').stop(true,true)
        $(this).children('.phone_to').children('img').stop(true,true) 
        $('.phone_to').stop(true,true)
        $('.home_guide .icon-VIVO').css('color','#000')
        // $('.home_guide').css('background-color','none')
        $('.home_guide .home_phones li>a').css('color','#000')
        $(this).children('a').css('color','blue')
        $('.mask_phone').slideDown(500,'swing') 
        $(this).children('.phone_to').slideDown(500,'swing')
    },
    function(){
        $('.mask_phone').stop(true,true)
        $('.phone').stop(true,true)
        $(this).children('.phone_to').children('img').stop(true,true) 
        $('.phone_to').stop(true,true)
        $(this).children('.phone_to').slideUp(500,'swing')
        $('.home_guide').css('background',col)
        $('.home_guide .icon-VIVO').css('color','white')
        $('.home_guide .home_phones li>a').css('color','white')

    }
)


$('._list li').hover(
    function(){
        $('.mask_phone').stop(true,true)
        $('.phone').stop(true)
        $(this).children('img').stop(true,true)
        $('.phone').children('.phone_to').stop(true)
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
        $('.mask_phone').stop(true,true)
        $('.phone').stop(true,true)
        $('.phone').children('.phone_to').stop(true,true)
        $(this).children('img').stop(true,true)
        $(this).children('img:not(.phone_img1)').animate({left:'80px'},500)
        $(this).children('.phone_img1').animate({left:'60px'},500)
    }
)
$('._list li a').hover(
    function(){
        $('.mask_phone').stop(true,true)
        $('.phone').stop(true)
        $('.phone').children('.phone_to').stop(true)
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
        $('.mask_phone').stop(true,true)
        $('.phone').stop(true,true)
        $('.phone').children('.phone_to').stop(true,true)
        $(this).children('img').stop(true,true)
        $(this).children('img:not(.phone_img1)').animate({left:'80px'},500)
        $(this).children('.phone_img1').animate({left:'60px'},500)
    }
)



$('.home_search').click(function(){
    $('.h_search').show(500,'easeInBack')
    $('.h_search').css('z-index','2')
    $('.home_guide').hide(500,'easeInBack')
})
$('.cha').click(function(){
    $('.h_search').hide(500,'easeInBack')
    $('.home_guide').show(500,'easeInBack')

})
// var arr = [iQOO,nex,x,s,z,y]
// for(var i = 0;i<7;i++){
//     $('._list').eq(i).children('li').eq(0).click(function(){
//         $(window).location.href = `${arr[i]}.html`
//     })
// }
