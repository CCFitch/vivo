$(function(){
//单选
$('.goods_list').on('click','li .goods_box',function(){
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    $('li .goods_box').each(function(index,item){
        if($(item).prop('checked')){
            arr1.push('a')
            arr2.push($(this).parent().siblings('.goods_numaccount').children('.goods_numinp').html())
            arr3.push($(this).parent().siblings('.goods_allP').html())
            alltodoR_num(arr2)
            alltodoR_account(arr3)
        
       }else{
            arr1.push('b')
            alltodoR_num(arr2)
            alltodoR_account(arr3)
        }
    })
    if(arr1.indexOf('b') ==-1){
        $('#goods_allcheckbox1').prop('checked',true)
        $('#goods_allcheckbox2').prop('checked',true)  
    }else{
        $('#goods_allcheckbox1').prop('checked',false)
        $('#goods_allcheckbox2').prop('checked',false)  
    }
})


//单个收藏
$('.goods_list').on('click','li .goods_collect',function(){
     var self = this
        $('.goods_collect-mark').css('display','block')
        $('.wrap').css('opacity','0.5')
        $('.goods_service').css('opacity','0.5')
        $('.goods_help').css('opacity','0.5')   
        $('.goods_collect-mark').on('click','.goods_collect-cancel',function(){
            $('.goods_collect-mark').css('display','none');
            $('.wrap').css('opacity','1')
            $('.goods_service').css('opacity','1')
            $('.goods_help').css('opacity','1')
        })
        $('.goods_collect-mark').on('click','.goods_collectY',function(){
            $('.goods_collect-mark').css('display','none');
            $('.wrap').css('opacity','1')
            $('.goods_service').css('opacity','1')
            $('.goods_help').css('opacity','1')

            var coll = $(self).parent().parent().attr('code');
            if(localStorage.getItem('collect')){
                var colArr = JSON.parse(localStorage.getItem('collect')).col;
            }else{
                var colArr = [];
            }

            if(colArr.indexOf(coll)==-1){
                colArr.push(coll);
                var colJson = JSON.stringify({"col":colArr});
                localStorage.setItem("collect",colJson);
            }

        })
             
})

//全选
$('.goods_check1').on('click','#goods_allcheckbox1',function(){
    var arr3 = [];
    var arr4 = [];
    if($(this).prop('checked')){
        $('.goods_list .goods_box').prop('checked',true)
        $('#goods_allcheckbox2').prop('checked',true)  
        $('.goods_list li').each(function(item){
            arr3.push($(this).find('.goods_numinp').html())
            alltodoR_num(arr3)
            arr4.push($(this).find('.goods_allP').html())
            alltodoR_account(arr4)
        })
     }else{
        $('.goods_list .goods_box').prop('checked',false)
        $('#goods_allcheckbox2').prop('checked',false)   
        alltodoR_num(arr3)
        alltodoR_account(arr4)
     }
})
$('.goods_check2').on('click','#goods_allcheckbox2',function(){
    var arr4 = [];
    var arr5 = [];
    if($(this).prop('checked')){
        $('.goods_list .goods_box').prop('checked',true)
        $('#goods_allcheckbox1').prop('checked',true)  
        $('.goods_list li').each(function(item){
            arr4.push($(this).find('.goods_numinp').html())
            arr5.push($(this).find('.goods_allP').html())
            alltodoR_num(arr4)
            alltodoR_account(arr5)
        })
     }else{
        $('.goods_list .goods_box').prop('checked',false)
        $('#goods_allcheckbox1').prop('checked',false)   
        alltodoR_num(arr4)
        alltodoR_account(arr5)
     }
})

//-
$('.goods_list').on('click','li .goods_numaccount .goods_del',function(){
    var count = $(this).siblings('.goods_numinp').html()
    var s_price = $(this).parent().siblings('.goods_singleP').html()
    count--;
    if(count<=0){
        count = 1;
    }
    var code = $(this).parent().parent().attr('code');
    $.each(codeArr,function(index,val){
        if( code == val){
            numArr[index] = count
        }
    })
    var jsonStr = JSON.stringify({"code":codeArr})//更新本地存储
    var jsonNum = JSON.stringify({"num":numArr})
    localStorage.setItem('goods',jsonStr)
    localStorage.setItem('goods1',jsonNum)


    $(this).siblings('.goods_numinp').html(count);
    $(this).parent().siblings('.goods_allP').html(s_price*count+'.00')
    $(this).parent().siblings('.goods_send').html(s_price*count)
})
//+
$('.goods_list').on('click','li .goods_numaccount .goods_add',function(){
    var count = $(this).siblings('.goods_numinp').html()
    var s_price = $(this).parent().siblings('.goods_singleP').html()
    count++;
    if(count>5){
        count=5;
        $('.goods_over-mark').css('display','block')
        $('.wrap').css('opacity','0.5')
        $('.goods_service').css('opacity','0.5')
        $('.goods_help').css('opacity','0.5')   
    }

    var code = $(this).parent().parent().attr('code');
    $.each(codeArr,function(index,val){
        if( code == val){
            numArr[index] = count
        }
    })
    var jsonStr = JSON.stringify({"code":codeArr})//更新本地存储
    var jsonNum = JSON.stringify({"num":numArr})
    localStorage.setItem('goods',jsonStr)
    localStorage.setItem('goods1',jsonNum)

    $(this).siblings('.goods_numinp').html(count);
    $(this).parent().siblings('.goods_allP').html(s_price*count+'.00')
    $(this).parent().siblings('.goods_send').html(s_price*count)
    console.log(666)
})

//超过弹框操作
    $('.goods_over-mark').on('click','.goods_over-cancel',function(){
        $('.goods_over-mark').css('display','none');
        $('.wrap').css('opacity','1')
        $('.goods_service').css('opacity','1')
        $('.goods_help').css('opacity','1')
})
$('.goods_over-mark').on('click','.goods_overY',function(){
    $('.goods_over-mark').css('display','none');
    $('.wrap').css('opacity','1')
    $('.goods_service').css('opacity','1')
    $('.goods_help').css('opacity','1')
})


function alltodoR_num(arr){
    var count1 = 0;      
    arr.forEach(function(item){
        count1+=item*1;
    })
    $('.goods_numselect').html(count1)
}
function alltodoR_account(arr){
     var count2 = 0;
     arr.forEach(function(item){
        count2+=item*1;
    })
    $('.goods_account1').html('￥'+count2+'.00')
    $('.goods_account2').html('￥'+count2+'.00')
}

$('.goods_likeList ').on('mouseenter','*',function(){
    $(this).animate({
        top:-3,
        
    },{
        queue:true,
        duration:700,
        easing:'linear',
    })
    $(this).css('boxShadow',"1.5px 1px 5px #d4d4d4")
})
$('.goods_likeList').on('mouseout','*',function(){
    $(this).animate({
        top:3,
    },{
        queue:true,
        duration:500,
        easing:'linear',
    })
    $(this).css('boxShadow',"0 0 0 #fff")

})
$('.goods_pay').on('click',function(){
    location.href = 'www.baidu.com'
})

$('.goods_help').on('click','.goods_up',function(){
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




if(localStorage.getItem('username')){
    if(localStorage.getItem('username') == '阿斯蒂芬'){
    // 判断本地是否有存储'goods'
    if(localStorage.getItem('goods') && localStorage.getItem('goods1')){
        var codeArr = JSON.parse(localStorage.getItem('goods')).code
        var numArr = JSON.parse(localStorage.getItem('goods1')).num
        if(codeArr.length >0 && numArr.length >0){

                // 展示商品数据
            $.ajax({
                url:'../data/data.json',
                type:'get',
                cache:false,
                dataType:'json',
                success:function(data){
                    var wrap = '';
                    $.each(codeArr,function(index,code){
                        $.each(data,function(index1,key){
                            if(data[code] == key){
                                wrap +='<li style="height: 247px;background-color: #fff;margin-bottom: 2px;" code="'+data[code].id+'"><div class="goods_check2"><input type="checkbox" name="" class="goods_box"></div><div class="goods_img"><img src="../images/IQOO/'+data[code].images[0]+'" alt=""></div><div class="goods_megs"><h4>'+data[code].name+' '+data[code].versions[1]+' </h4><h4>'+data[code].color1[0]+'</h4></div><p class="goods_singleP">'+data[code].money+'</p><div class="goods_numaccount"><div class="goods_del">-</div><div class="goods_numinp">'+numArr[index]+'</div><div class="goods_add">+</div></div><p class="goods_onsale">0.00</p><span class="goods_send">'+parseInt(data[code].money*numArr[index]*1.1)+'</span><span class="goods_allP">'+data[code].money*numArr[index]+'.00'+'</span><div class="goods_todo"><span class="goods_collect">加入到收藏夹</span><span class="goods_remove">删除</span></div><div class="goods_present">【赠品】：<a href="https://shop.vivo.com.cn/product/9934?skuId=4100">vivo XE680原装耳机</a></div></li>'
                        }
                    })
                })
                $(".goods_list").append(wrap)     
                }
            })
    //单个删除
    $('.goods_list').on('click','li .goods_remove',function(){
        var self = this;
        $('.goods_mask').css('display','block');
        $('.wrap').css('opacity','0.5')
        $('.goods_service').css('opacity','0.5')
        $('.goods_help').css('opacity','0.5')
        $('.goods_mask').on('click','.goods_cancel',function(){
            $('.goods_mask').css('display','none');
            $('.wrap').css('opacity','1')
            $('.goods_service').css('opacity','1')
            $('.goods_help').css('opacity','1')
        })
        $('.goods_mask').on('click','.goods_removeN',function(){
            $('.goods_mask').css('display','none');
            $('.wrap').css('opacity','1')
            $('.goods_service').css('opacity','1')
            $('.goods_help').css('opacity','1')
        })
        $('.goods_mask').on('click','.goods_removeY',function(){
            $('.goods_mask').css('display','none');
            $('.wrap').css('opacity','1')
            $('.goods_service').css('opacity','1')
            $('.goods_help').css('opacity','1')
            $(self).parent().parent().remove()
            var code = $(self).parent().parent().attr('code');
            // var num = $(this).parent().attr('num')
            $.each(codeArr,function(index,val){
                if( code == val){
                    codeArr.splice(index,1) ;//codeArr为数组
                    numArr.splice(index,1);
                }
            })
            var jsonStr = JSON.stringify({"code":codeArr})//更新本地存储
            var jsonNum = JSON.stringify({"num":numArr})
            localStorage.setItem('goods',jsonStr)
            localStorage.setItem('goods1',jsonNum)
        })
        if(!($('.goods_list li').html())){
            $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
        }
    })
    //选择删除
    $('.goods_alltodoL').on('click','.goods_allremove',function(){
        $('.goods_list li .goods_box').each(function(index,item){
            if($(item).prop('checked')){
                $(this).parent().parent().remove()
            //    $(this).parent().parent()   
            var code = $(this).parent().parent().attr('code');
            $.each(codeArr,function(index,val){
                if( code == val){
                    codeArr.splice(index,1) ;//codeArr为数组
                    numArr.splice(index,1);
                }
            })
            var jsonStr = JSON.stringify({"code":codeArr})//更新本地存储
            var jsonNum = JSON.stringify({"num":numArr})
            localStorage.setItem('goods',jsonStr)
            localStorage.setItem('goods1',jsonNum)
            
            }
            $('#goods_allcheckbox1').prop('checked',false)
            $('#goods_allcheckbox2').prop('checked',false)
            $('.goods_numselect').html('0')
            $('.goods_account1').html('0.00')
            $('.goods_account2').html('0.00')

            if(!($('.goods_list li').html())){
                $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
            }
        })
    })
    }else{
        $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
        }
    }else{
        $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
        }
    }else if(localStorage.getItem('username') == '森岛帆高'){
        if(localStorage.getItem('goods') && localStorage.getItem('goods1')){
            var codeArr = JSON.parse(localStorage.getItem('goods')).code
            var numArr = JSON.parse(localStorage.getItem('goods1')).num
            if(codeArr.length >0 && numArr.length >0){
    
                    // 展示商品数据
                $.ajax({
                    url:'../data/data.json',
                    type:'get',
                    cache:false,
                    dataType:'json',
                    success:function(data){
                        var wrap = '';
                        $.each(codeArr,function(index,code){
                            $.each(data,function(index1,key){
                                if(data[code] == key){
                                    wrap +='<li style="height: 247px;background-color: #fff;margin-bottom: 2px;" code="'+data[code].id+'"><div class="goods_check2"><input type="checkbox" name="" class="goods_box"></div><div class="goods_img"><img src="../images/IQOO/'+data[code].images[0]+'" alt=""></div><div class="goods_megs"><h4>'+data[code].name+' '+data[code].versions[1]+' </h4><h4>'+data[code].color1[0]+'</h4></div><p class="goods_singleP">'+data[code].money+'</p><div class="goods_numaccount"><div class="goods_del">-</div><div class="goods_numinp">'+numArr[index]+'</div><div class="goods_add">+</div></div><p class="goods_onsale">0.00</p><span class="goods_send">'+parseInt(data[code].money*numArr[index]*1.1)+'</span><span class="goods_allP">'+data[code].money*numArr[index]+'.00'+'</span><div class="goods_todo"><span class="goods_collect">加入到收藏夹</span><span class="goods_remove">删除</span></div><div class="goods_present">【赠品】：<a href="https://shop.vivo.com.cn/product/9934?skuId=4100">vivo XE680原装耳机</a></div></li>'
                            }
                        })
                    })
                    $(".goods_list").append(wrap)     
                    }
                })
        //单个删除
        $('.goods_list').on('click','li .goods_remove',function(){
            var self = this;
            $('.goods_mask').css('display','block');
            $('.wrap').css('opacity','0.5')
            $('.goods_service').css('opacity','0.5')
            $('.goods_help').css('opacity','0.5')
            $('.goods_mask').on('click','.goods_cancel',function(){
                $('.goods_mask').css('display','none');
                $('.wrap').css('opacity','1')
                $('.goods_service').css('opacity','1')
                $('.goods_help').css('opacity','1')
            })
            $('.goods_mask').on('click','.goods_removeN',function(){
                $('.goods_mask').css('display','none');
                $('.wrap').css('opacity','1')
                $('.goods_service').css('opacity','1')
                $('.goods_help').css('opacity','1')
            })
            $('.goods_mask').on('click','.goods_removeY',function(){
                $('.goods_mask').css('display','none');
                $('.wrap').css('opacity','1')
                $('.goods_service').css('opacity','1')
                $('.goods_help').css('opacity','1')
                $(self).parent().parent().remove()
                var code = $(self).parent().parent().attr('code');
                // var num = $(this).parent().attr('num')
                $.each(codeArr,function(index,val){
                    if( code == val){
                        codeArr.splice(index,1) ;//codeArr为数组
                        numArr.splice(index,1);
                    }
                })
                var jsonStr = JSON.stringify({"code":codeArr})//更新本地存储
                var jsonNum = JSON.stringify({"num":numArr})
                localStorage.setItem('goods',jsonStr)
                localStorage.setItem('goods1',jsonNum)
            })
            if(!($('.goods_list li').html())){
                $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
            }
        })
        //选择删除
        $('.goods_alltodoL').on('click','.goods_allremove',function(){
            $('.goods_list li .goods_box').each(function(index,item){
                if($(item).prop('checked')){
                    $(this).parent().parent().remove()
                //    $(this).parent().parent()   
                var code = $(this).parent().parent().attr('code');
                $.each(codeArr,function(index,val){
                    if( code == val){
                        codeArr.splice(index,1) ;//codeArr为数组
                        numArr.splice(index,1);
                    }
                })
                var jsonStr = JSON.stringify({"code":codeArr})//更新本地存储
                var jsonNum = JSON.stringify({"num":numArr})
                localStorage.setItem('goods',jsonStr)
                localStorage.setItem('goods1',jsonNum)
                
                }
                $('#goods_allcheckbox1').prop('checked',false)
                $('#goods_allcheckbox2').prop('checked',false)
                $('.goods_numselect').html('0')
                $('.goods_account1').html('0.00')
                $('.goods_account2').html('0.00')
    
                if(!($('.goods_list li').html())){
                    $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
                }
            })
        })
        }else{
            $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
            }
        }else{
            $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
            }    }else{
        $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
      }
}else{
    $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
}
// // 判断本地是否有存储'goods'
// if(localStorage.getItem('goods') && localStorage.getItem('goods1')){
//     var codeArr = JSON.parse(localStorage.getItem('goods')).code
//     var numArr = JSON.parse(localStorage.getItem('goods1')).num
//     if(codeArr.length >0 && numArr.length >0){

//             // 展示商品数据
//         $.ajax({
//             url:'../data/data.json',
//             type:'get',
//             cache:false,
//             dataType:'json',
//             success:function(data){
//                 var wrap = '';
//                 $.each(codeArr,function(index,code){
//                     $.each(data,function(index1,key){
//                         if(data[code] == key){
//                             wrap +='<li style="height: 247px;background-color: #fff;margin-bottom: 2px;" code="'+data[code].id+'"><div class="goods_check2"><input type="checkbox" name="" class="goods_box"></div><div class="goods_img"><img src="../images/IQOO/'+data[code].images[0]+'" alt=""></div><div class="goods_megs"><h4>'+data[code].name+' '+data[code].versions[1]+' </h4><h4>'+data[code].color1[0]+'</h4></div><p class="goods_singleP">'+data[code].money+'</p><div class="goods_numaccount"><div class="goods_del">-</div><div class="goods_numinp">'+numArr[index]+'</div><div class="goods_add">+</div></div><p class="goods_onsale">0.00</p><span class="goods_send">'+parseInt(data[code].money*numArr[index]*1.1)+'</span><span class="goods_allP">'+data[code].money*numArr[index]+'.00'+'</span><div class="goods_todo"><span class="goods_collect">加入到收藏夹</span><span class="goods_remove">删除</span></div><div class="goods_present">【赠品】：<a href="https://shop.vivo.com.cn/product/9934?skuId=4100">vivo XE680原装耳机</a></div></li>'
//                     }
//                 })
//             })
//             $(".goods_list").append(wrap)     
//             }
//         })
// //单个删除
// $('.goods_list').on('click','li .goods_remove',function(){
//     var self = this;
//     $('.goods_mask').css('display','block');
//     $('.wrap').css('opacity','0.5')
//     $('.goods_service').css('opacity','0.5')
//     $('.goods_help').css('opacity','0.5')
//     $('.goods_mask').on('click','.goods_cancel',function(){
//         $('.goods_mask').css('display','none');
//         $('.wrap').css('opacity','1')
//         $('.goods_service').css('opacity','1')
//         $('.goods_help').css('opacity','1')
//     })
//     $('.goods_mask').on('click','.goods_removeN',function(){
//         $('.goods_mask').css('display','none');
//         $('.wrap').css('opacity','1')
//         $('.goods_service').css('opacity','1')
//         $('.goods_help').css('opacity','1')
//     })
//     $('.goods_mask').on('click','.goods_removeY',function(){
//         $('.goods_mask').css('display','none');
//         $('.wrap').css('opacity','1')
//         $('.goods_service').css('opacity','1')
//         $('.goods_help').css('opacity','1')
//         $(self).parent().parent().remove()
//         var code = $(self).parent().parent().attr('code');
//         // var num = $(this).parent().attr('num')
//         $.each(codeArr,function(index,val){
//             if( code == val){
//                 codeArr.splice(index,1) ;//codeArr为数组
//                 numArr.splice(index,1);
//             }
//         })
//         var jsonStr = JSON.stringify({"code":codeArr})//更新本地存储
//         var jsonNum = JSON.stringify({"num":numArr})
//         localStorage.setItem('goods',jsonStr)
//         localStorage.setItem('goods1',jsonNum)
//     })
//     if(!($('.goods_list li').html())){
//         $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
//     }
// })
// //选择删除
// $('.goods_alltodoL').on('click','.goods_allremove',function(){
//     $('.goods_list li .goods_box').each(function(index,item){
//         if($(item).prop('checked')){
//             $(this).parent().parent().remove()
//         //    $(this).parent().parent()   
//            var code = $(this).parent().parent().attr('code');
//            $.each(codeArr,function(index,val){
//                if( code == val){
//                    codeArr.splice(index,1) ;//codeArr为数组
//                    numArr.splice(index,1);
//                }
//            })
//            var jsonStr = JSON.stringify({"code":codeArr})//更新本地存储
//            var jsonNum = JSON.stringify({"num":numArr})
//            localStorage.setItem('goods',jsonStr)
//            localStorage.setItem('goods1',jsonNum)
           
//         }
//         $('#goods_allcheckbox1').prop('checked',false)
//         $('#goods_allcheckbox2').prop('checked',false)
//         $('.goods_numselect').html('0')
//         $('.goods_account1').html('0.00')
//         $('.goods_account2').html('0.00')

//         if(!($('.goods_list li').html())){
//             $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
//         }
//     })
// })
// }else{
//     $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
//     }
// }else{
//     $('.goods_list').html('<li class="goods_tips">您的购物车空空如也！</li>')
//     }


    $('.goods_likeList').on('click','.list',function(){
        location.href = "https://shop.vivo.com.cn/product/9934?skuId=4100"
    })

})
