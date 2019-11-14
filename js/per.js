window.onload = function(){
    var name = localStorage.getItem("username")
    if(name){    
        $('.home_top_r').html(`                
        <li class="home_goods"><a href="./goods.html">购物车</a></li>              
        <li class="home_per"><a href = "" >个人中心</a>
                <div class="home_per_list">
                    <p><a href="./per_total_store.html"> 
                    <i class="iconfont icon-kuaidi"></i> 积分商城
                    </a></p>
                    <p><a href="./per_my_collect.html">
                    <i class="iconfont icon-ziyuan"></i> 我的收藏
                    </a></p>
                    <p><a href="./per_accountCenter.html">
                    <i class="iconfont icon-erji"></i> 账号中心
                    </a></p>
                </div>                    
        </li>`)
        $('.home_per').hover(function(){
            $('.home_per_list').css({display:"block"})
        },function(){
            $('.home_per_list').css({display:"none"})
        })
    }else{
        return
    }
}

    // 获取用户信息插入用户名

    $(function () {
        var str6 = localStorage.getItem("username")
        if (str6) {
            $('.phone-name').html(str6);
        }
    })



// 商城积分
$(function () {
    //拿数据
    $.ajax({
        url: '../data/per_total_store.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var result = '';
            $.each(json, function (index, item) {
                result += '<li ' + item.id + '><img src="' + item.url + '" alt=""><h2>' + item.title + '</h2><div class="list-hide"><p>' + item.stroe + '</p><span>查看详情</span><span>立即兑换</span></div></li>';
            });
            $('.per-stroe-list').html(result); //插入到页面
        }
    });

});




// 请求收藏夹数据
$(function () {
    if (localStorage.getItem('collect')) {
        // 本地存储中的商品编码数组
        var colArr = JSON.parse(localStorage.getItem('collect')).col;
        if (colArr.length > 0) {//有数据
            // 展示购物车商品
            $.ajax({
                url: '../data/data.json',
                type: 'get',
                cache: false,
                dataType: 'json',
                success: function (json) {
                    var results = '';
                    $.each(colArr, function (index, val) {
                        $.each(json, function (index, item) {
                            if (val == item.id) {
                                var d = new Date();
                                var now = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分';
                                results += '<tr class="ctr"><td height="100px" class="name">' + item.id + '</td><td class="price">' + item.money + '</td><td class="time">' + now + '</td><td>有货</td><td class="option" valid='+val+'><a href="javascript" class="goby">去购买</a><span class="delete">删除</span></td><tr><br/>';
                            }
                        })
                    });
                    $('.m-con .collect tbody').html(results);

                    

            // 删除收藏夹里商品
            $('.m-con .collect tbody').on('click', '.ctr .option .delete', function () {
                var code = $(this).parent().attr('valid');//点击元素对应的商品编号
                $.each(colArr, function (index, val) {
                    if (code == val) {
                        colArr.splice(index, 1);//删除本地数据
                    }
                })

                // 同步本地存储中的数据
                var jsonStr = JSON.stringify({ "col": colArr });

                // 存到本地
                localStorage.setItem('collect', jsonStr);

                // splice(index,1);

                $(this).parent().parent().remove();//删除页面对应的节点
                alert('成功移除商品!');

                if (colArr.length < 0) {
                    $('.m-con').html('<div class="no-roder"><div class="noder-img"><img src="../images/per/no-rder_07.jpg" alt=""></div><span>您还没有订单</span></div>');
                }
            })

                }
            });
        } else {
            $('.m-con').html('<div class="no-roder"><div class="noder-img"><img src="../images/per/no-rder_07.jpg" alt=""></div><span>您还没有订单</span></div>');
        }
    } else {
        console.log('没有数据');
        $('.m-con').html(`  <div class="no-roder">
        <div class="noder-img"><img src="../images/per/no-rder_07.jpg" alt=""></div>
        <span>您还没有订单</span>
        </div>`);
    }
})

$('.loginout').on('click','a',function(){
    localStorage.setItem('username','');
    localStorage.setItem('token','');
    $(this).attr('href',"../index.html")
})

// 账号中心
jQuery(function () {
    $('.change-pass-done').click(function () {
        if (Text.val == null) {
            $('.phone-verify').show();
        } else {
            $('.phone-verify').hide()
        }
    });
    // $('.per-center .acc-set .loginout').click(function(){

    // })
    
    $('.bound').click(function () {
        $('.per-id-wrap').show();
    });
    $('.clone').click(function () {
        $('.per-id-wrap').hide();
        $('.per-accent-wrap').hide();
        $('.phone-verify').hide();
    });
    $('.skip').click(function () {
        $('.phone-verify').hide();
        $('.per-accent-wrap').show();
        $('.per-id-wrap').hide();
    });
    $('.verify').click(function () {
        if (Text.val == null) {
            $('.phone-verify').show();
            $('.per-accent-wrap').hide();
        }
    });

});



