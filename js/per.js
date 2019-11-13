// 账号中心
$(function () {
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
    $('.change-pass-done').click(function () {
        if (Text.val == null) {
            $('.phone-verify').show();
        }
    });
  
})();

// 我的收藏
$(function () {
    $('.delete').click(function () {
        $('.collect-remove').show();
    })
    $('.off').click(function () {
        $('.collect-remove').hide();
    })
    $('.confirm').click(function () {

    })
});





// 修改用户密码
$(function () {
    
});


// 获取用户信息插入用户名
$(function(){
    if (location.search) {
        var searchArr = location.search.substr(1).split("&");
        for (var i = 0; i < searchArr.length; i++) {
            if (searchArr[i].split("=")[0] == "uname") {
                var name = decodeURIComponent(searchArr[i].split("=")[1]);
               
                console.log(name)
                $('.phone-name').html(name);
            };
        }
    }
});











// 获取收藏夹数据
$(function () {

    if (localStorage.getItem('m-con')) {
        // 本地存储中的商品编码数组
        var codeArr = JSON.parse(localStorage.getItem('m-con')).code;
        if (codeArr.length > 0) {//有数据
            // 展示购物车商品
            $.ajax({
                url: 'data/data.json',
                type: 'get',
                cache: false,
                dataType: 'json',
                success: function (json) {
                    var results = '';
                    $.each(codeArr, function (index, code) {
                        $.each(json, function (index, item) {
                            if (code == item.code) {
                                results += `
                                    <tbody>
                                        <tr>
                                            <td height="100px" class="name">vivo XE710原装耳机</td>
                                            <td class="price">¥199.00</td>
                                            <td class="time">2019-11-08 19:43:25</td>
                                            <td>有货</td>
                                            <td class="option">
                                                <a href="javascript" class="goby">去购买</a>
                                                <span class="delete">删除</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    </thead>
                                </table>`;
                            }
                        })
                    });
                    $('.list').html(results);
                }
            });

            // 删除收藏夹里商品
            $('.list').on('click', 'li span', function () {
                var code = $(this).parent().attr('code');//点击元素对应的商品编号

                $.each(codeArr, function (index, val) {
                    if (code == val) {
                        codeArr.splice(index, 1);//删除本地数据
                    }
                })

                // 同步本地存储中的数据
                var jsonStr = JSON.stringify({ "code": codeArr });

                // 存到本地
                localStorage.setItem('goods', jsonStr);

                // splice(index,1);

                $(this).parent().remove();//删除页面对应的节点
                alert('成功移除商品!');

                if (codeArr.length <= 0) {
                    $('.list').html('<div class="no-roder"><div class="noder-img"><img src="../images/per/no-rder_07.jpg" alt=""></div><span>您还没有订单</span></div>');
                }
            })

        } else {
            $('.list').html('<div class="no-roder"><div class="noder-img"><img src="../images/per/no-rder_07.jpg" alt=""></div><span>您还没有订单</span></div>');
        }
    } else {
        console.log('没有数据');
        $('.list').html(`  <div class="no-roder">
        <div class="noder-img"><img src="../images/per/no-rder_07.jpg" alt=""></div>
        <span>您还没有订单</span>
        </div>`);
    }

})





