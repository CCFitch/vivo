$(function(){
    $(window).on('scroll',function(){
        var html = document.documentElement || document.body;
        //header设置
        if(html.scrollTop <= 0){
            $('.s_headerT').css('background','none')
            $('.s_up').css('display','none')

        }
        if(html.scrollTop >= 68){
            $('.s_headerT').css('background','white')
            $('.s_up').css('display','block')
        }

        // //第二屏动作
        var p1 = parseInt($('.s_pin1').css('height'))

        if(html.scrollTop >= parseInt($('.s_pin1').css('height'))){
            $('.s_pin2').css('position','fixed')
            $('.s_pin2').css('top','auto')
            $('.s_pin2').css('bottom',0)
            $('.s_pin3-8').css('top',"2000px")
        }
        if(html.scrollTop <=  parseInt($('.s_pin1').css('height'))){
            $('.s_pin2').css('position','relative')
            $('.s_pin2').css('top','0')
            $('.s_pin2').css('bottom','0')
        }

        //第四屏动作
        if(html.scrollTop >= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+100){
            $('.s_p4_camera').animate({
                    top: 90
                },500,'linear');
            
        }
        if(html.scrollTop <= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+100 || html.scrollTop >= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin4').css('height'))-100){
            $('.s_p4_camera').css('top',145)
            $('.s_p4_camera').stop()
        }

        //第五屏动作
        if(html.scrollTop >= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin4').css('height'))){
            $('.s_pin5five').animate({
                top: 274
            },500,'linear');
        }
        if(html.scrollTop <= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin4').css('height')) || html.scrollTop >= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin4').css('height'))+parseInt($('.s_pin5').css('height'))){
            $('.s_pin5five').stop()
            $('.s_pin5five').css('top',324)
        }

        //第六屏动作
        if(html.scrollTop >= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin4').css('height'))+parseInt($('.s_pin5').css('height'))){
            $('.s_pin6two').animate({
                bottom: -10
            },500,'linear');
        }
        if(html.scrollTop <= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin4').css('height')) + parseInt($('.s_pin5').css('height')) || html.scrollTop >= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin4').css('height'))+parseInt($('.s_pin5').css('height'))+parseInt($('.s_pin6').css('height'))){
            $('.s_pin6two').stop()
            $('.s_pin6two').css('bottom',-25)
        }

            //第七屏动作
        $('.s_pin7set').on('click',' .pre',function(){
            $('.s-pin7pre').css('z-index','1')
            $('.pre').css('opacity','1')
            $('.after').css('opacity','0.5')

        })
        $('.s_pin7set').on('click',' .after',function(){
            $('.s-pin7pre').css('z-index','-1')
            $('.pre').css('opacity','0.5')
            $('.after').css('opacity','1')

        })

        //第八屏动作
        if(html.scrollTop >= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin4').css('height'))+parseInt($('.s_pin5').css('height'))+parseInt($('.s_pin6').css('height'))+parseInt($('.s_pin7').css('height'))-1000){
            $('.s_pin8-4').animate({
                right: 0
            },1000,'linear',function(){
                $('.s_pin8-5').css('display','block')
                $('.s_pin8-5').animate({
                    height: 100
                },1000,'linear',function(){
                    $('.s_pin8-6').fadeIn(1000)
                })
            });
        }
        if(html.scrollTop <= parseInt($('.s_pin1').css('height')) + parseInt($('.s_pin2').css('height')) + parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin3').css('height'))+parseInt($('.s_pin4').css('height'))+parseInt($('.s_pin5').css('height'))+parseInt($('.s_pin6').css('height'))+parseInt($('.s_pin7').css('height')) ){
            $('.s_pin8-4').stop()
            // $('.s_pin8-5').stop()
            // $('.s_pin8-6').stop()
            $('.s_pin8-4').css('right',-183)
            // ('.s_pin8-5').css('height',50)
            $('.s_pin8-5').css('display','none')
            $('.s_pin8-6').css('display','none')
        }

        $('.s_serve li').on('mouseenter','a',function(){
            $(this).siblings('span').animate({
                width: 70
            },300,'linear');
        })    
           
         $('.s_serve li').on('mouseout','a',function(){
            $(this).siblings('span').animate({
                width: 10
            },300,'linear');
        })


        //返回顶部
       $('.s_up').on('click',function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        clearInterval(timer);
        var  timer = setInterval(function () {
           scrollTop -= 1000;
     
           if (scrollTop <= 0) {
             clearInterval(timer);
             scrollTop = 0;
           }
     
           document.documentElement.scrollTop = scrollTop;
           document.body.scrollTop = scrollTop;
         }, 40);
           })


           //购买
           $('.s_header').on('click','.buy',function(){
            location.href = '../global/buy.html?id=S_series' 
            console.log(666)
           })

           $('.s_pin1 .s_buypath').on('click','.s_official',function(){
            // location.href = '../global/buy.html?id=S_series'
            console.log(666)
           })

           $('.s_pin2_adv').on('click','.s_pin2_buy',function(){
            location.href = '../global/buy.html?id=S_series'
           })

           $('.s_pin6one').on('click','.s_pin6_buy',function(){
            location.href = '../global/buy.html?id=S_series'
           })

           $('.s_pin8').on('click','.s_pin8_buy',function(){
            location.href = '../global/buy.html?id=S_series'
           })

    })  
})
