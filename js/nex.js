$(document).scroll(function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop
    console.log(scrollT)
    if(scrollT==1){
        $('.img1_con').hide(0)
        $('.nex_img1').hide(0)
        $('.img1_con').show(0)
        $('.nex_img1').fadeIn(500)
    }
    if(scrollT >= 80){
        $('.nex_top').css({'position':'fixed','top':0})
    }else{
        $('.nex_top').css({'position':'absolute','top':'100px'})
    }
    if(scrollT == 800){
        $('.img2_con').animate({top:'100px'},1000)
    }

    // nex3
    if(scrollT>1600 && scrollT<2000){
        $('.nex3_i1').css({position:'absolute'})
    }
    if(scrollT<1600){
        $('.nex3_i1').css({position:'absolute'})
    }else if(scrollT >= 1600 && scrollT<=2000){
        // $('.img5').css(top,0)
        $('.nex3_i1').css({position:'fixed'})
    }else{
        $('.nex3_i1').css({position:'absolute',top:650,left:420,height:300})
        $('.img3_con').css({top:500})
    }

    for(var i = 0 ;i<=400;i++){
        if(scrollT == 1600+i){
            $('.nex3_i1').css({height:700-i,left:-80+1.1*i,top:0+0.5*i})
            $('.img3_con').css({top:60+1.1*i})
        }
    }
   
    if(scrollT > 2000){
        $('.nex3_i2').css('display','block')        
    }else{
        $('.nex3_i2').css('display','none')
    }
    // if(scrollT == 2200){
    //     $('.nex4_i1').slideIn(1000,'swing')
    // }

    //nex4
    if(scrollT == 2500 || scrollT==2550 || scrollT==2650){
        $('.nex4_i1').animate({right:'100px',opacity:'0.5'},3000)
    }
    if(scrollT == 2800 || scrollT == 2750 || scrollT == 2780){
        $('.nex4_i1').stop(true)
        $('.img4_con').animate({opacity:'1',left:'200px'},500)
        $('.nex4_i1').animate({right:'200px',opacity:'1'},3000)
        
    }
    if(scrollT == 2900){
        $('.nex4_i1').animate({right:'100px',opacity:'0.5'},3000)
    }

    // nex5
    if(scrollT<3550){
        $('.nex5_i1').css({position:'absolute',top:'200px'})
        $('.img5').css({"z-index":1})
    }else if(scrollT >= 3550 && scrollT<=3950){
        // $('.img5').css(top,0)
        $('.nex5_i1').css({position:'fixed',top:100})
    }else{
        $('.nex5_i1').css({position:'absolute',top:'500px'})
        $('.nex5_i1').css({height:900})
        $('.img5').css({"z-index":0})
    }
    for(var i = 0 ;i<=400;i++){
        if(scrollT == 3550+i){
            $('.nex5_i1').css({height:500+i,left:200-i,top:120-0.5*i})
        }
    }

    if(scrollT >= 4100 && scrollT < 4250){
        $('.nex6_i2').animate({top:'275px'},1000)
    }
    if(scrollT >= 4300 || scrollT<=4000){
        $(".nex6_i2").stop()
        $('.nex6_i2').animate({top:'350px'},1000)
    }
    // if(scrollT >= 4300 || scrollT<=4000){
    // $('.nex6_i1').css('z-index',0)
    // }
    if(scrollT >= 5130 && scrollT<=5500){
        $(".nex7_i1").stop()
        $('.nex7_i1').animate({opacity:'1'},2000)

    }else if(scrollT <= 5120){
         $(".nex7_i1").stop()
        $('.nex7_i1').animate({opacity:'0'},1000)
    }else if(scrollT >= 5600){
         $(".nex7_i1").stop()
        $('.nex7_i1').animate({opacity:'0'},1000)
    }


    // nex8
    if(scrollT<6260 &&scrollT>=6235){
        $('.nex8_v1').stop()
        $('.nex8_v1').css({height:'550px',left:0,top:280}) 
        $('.nex8_v1').css('z-index',1)
        $('.nex8_v1').attr('src','')
    }
    if(scrollT>=6270 && scrollT<= 6320){
        $('.nex8_v1').stop()
        $('.nex8_v1').css({height:'800px',width:'1400px',left:0,top:100}) 
        $('.nex8_v1').css('z-index',4)
        $('.nex8_v1').attr('src','../images/nex/cool-video.mp4')
    }
    if(scrollT>=6422 && scrollT<=6424){
        $('.nex8_v1').stop()
        $('.nex8_v1').css({height:'550px',width:'auto',left:200,top:400}) 
        $('.nex8_v1').css('z-index',1)
        $('.nex8_v1').attr('src','')
    }

    //nex9  
    

    // nex10
    if(scrollT<7015 && scrollT>7000){
        $('.nex10_i1').css({position:'absolute',top:0})
        $('.mask').css({position:'absolute',top:0})
        $('.img10_con').css({top:650})
        $('.nex_img10').css({height:900})
    }
    if(scrollT >= 7015 && scrollT<= 7025){
        $('.nex10_i1').css({position:'fixed',top:0})
        $('.mask').css({position:'fixed',top:0})
    }
    if(scrollT >= 7540 && scrollT<= 7550){
        $('.nex10_i1').css({position:'fixed',top:0})
        $('.mask').css({position:'fixed',top:0})
    }
    if(scrollT >= 7560 && scrollT<= 7650){
        $('.nex10_i1').css({position:'absolute',top:500})
        $('.mask').css({position:'absolute',top:500})
        $('.img10_con').css({top:600})
        $('.nex_img10').css({height:1280})
    }
    for(var i = 0;i<100;i++){
        if(scrollT == 7015 + 5*i){
            $('.mask').css({opacity:0.8-0.01*i})
        }
    }




})

// footer1
$('.s_serve li').on('mouseenter','a',function(){
    $(this).siblings('span').animate({
        width: 70
    },500,'linear');
})       
 $('.s_serve li').on('mouseout','a',function(){
    $(this).siblings('span').animate({
        width: 10
    },400,'linear');
})

//  $('.nex_img1').show(500)
