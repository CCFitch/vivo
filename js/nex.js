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
    }else if(scrollT >= 3550 && scrollT<=3950){
        // $('.img5').css(top,0)
        $('.nex5_i1').css({position:'fixed',top:100})
    }else{
        $('.nex5_i1').css({position:'absolute',top:'500px'})
        $('.nex5_i1').css({height:900})
    }
    for(var i = 0 ;i<=400;i++){
        if(scrollT == 3550+i){
            $('.nex5_i1').css({height:500+i,left:200-i,top:120-0.5*i})
        }
    }




})

//  $('.nex_img1').show(500)
