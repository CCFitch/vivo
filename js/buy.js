window.onload = function() {
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
            console.log(666)
            $('.home_per_list').css({display:"block"})
        },function(){
            $('.home_per_list').css({display:"none"})
        })
    }else{
        return
    }

	var str1 = window.location;
	var id = str1.search.split('=')[1];
	$.ajax({
		url: '../data/data.json',
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {

			for (var key in data) {
				if (id == key) {
					var str2 =
						`<div id="b-type">
				<a href="../index.html">商品首页</a><span>&gt;</span>
				<a href="">智能手机</a><span>&gt;</span>
				<a href="">${key}</a>
			</div>
			<div id="b-main">
				<div class="leftbox">
					<div class="imgsbox">
						<ul class="bigImg" code=${key} num=${data[key].num}>
							<li id="mainImg"><img src="../images/iQOO/${data[key].images[0]}" alt=""></li>
						</ul>
						<ul class="smallImg">
							<li><img src="../images/iQOO/${data[key].images[0]}" alt="" /></li>
							<li><img src="../images/iQOO/${data[key].images[1]}" alt="" /></li>
							<li><img src="../images/iQOO/${data[key].images[2]}" alt="" /></li>
							<li><img src="../images/iQOO/${data[key].images[3]}" alt="" /></li>
						</ul>
						<p class="store"><i class="iconfont">&#xe629;</i>收藏商品 （2316人收藏）<i class="iconfont">&#xe60d;</i>分享</p>
					</div>
				</div>
				<div class="rigthbox">
					<h1>${data[key].name }${data[key].versions[0]}</h1>
					<p><span class="promotion">【返5折vivo原装配件券】</span>5000mAh大电池，双引擎闪充，支持反向充电，前置1600万像素</p>
					<div class="summary">
						<p><span class="priceP">￥</span><span class="price">${data[key].money}</span></p>
					</div>
					<div class="support">
						<span>商品支持：</span>
						<ul>
							<li><i class="iconfont">&#xea84;</i>花呗分期</li>
							<li><i class="iconfont">&#xea84;</i>以旧换新</li>
							<li><i class="iconfont">&#xea84;</i>积分抵现</li>
							<div class="supportbox" style="display:none">
								<div class="supportbox1"></div>
								<div class="supportbox2">
									<h5><i class="iconfont">&#xea84;</i>花呗分期</h5>
									<p>商品支持花呗分期</p>
								</div>
							</div>
						</ul>
					</div>
					<div class="message">
						<dl class="version">
							<dt>版本</dt>
						</dl>
						<dl class="yanse">
							<dt>颜色</dt>
						</dl>
						<dl class="amount">
							<dt>数量</dt>
							<dd>
								<input type="text" class="jian" value="-" readonly="">
								<input type="text" class="txt" value="1">
								<input type="text" class="add" value="+" readonly="">
								<span class="remind">不能为负或零~(•̅灬•̅ )!!</span>
							</dd>
							
						</dl>
						<dl class="instalment">
							<dt><i class="iconfont icon-ziyuan1"></i>支持分期付款</dt>
							<dd>
								<h4>￥<span class="instalment1">1356.53</span>x3期</h4><span>手续费30.23元一期</span>
							</dd>
							<dd>
								<h4>￥<span class="instalment2">1356.53</span>x6期</h4><span>手续费30.23元一期</span>
							</dd>
							<dd>
								<h4>￥<span class="instalment3">1356.53</span>x12期</h4><span>手续费30.23元一期</span>
							</dd>
							<dd>
								<h4>￥<span class="instalment4">1356.53</span>x24期</h4><span>手续费30.23元一期</span>
							</dd>
						</dl>
					</div>
					<div class="bottombox">
						<p class="smallPriceP">￥<span class="smallPrice">${data[key].money}</span></p>
						<p class="btm-p">
						</p>
						<button type="button" class="btn1" id="tocart">加入购物车</button>
						<button type="button" class="btn2" id="buynow">立即购买</button>
					</div>

				</div>
			</div>

			<div id="b-banner">
				<div class="b-title">同类推荐</div>
				<ul class="b-imgboxs">
					<li>
						<img src="../images/buy/others1.png" alt="">
						<p class="xs-msg">Z5 6GB+12GB 全息幻彩</p>
						<p class="xs-price">￥159</p>
					</li>
					<li>
						<img src="../images/buy/others2.png" alt="">
						<p class="xs-msg">Z5 6GB+12GB 全息幻彩</p>
						<p class="xs-price">￥19</p>
					</li>
					<li>
						<img src="../images/buy/others3.png" alt="">
						<p class="xs-msg">Z5 6GB+12GB 全息幻彩</p>
						<p class="xs-price">￥39</p>
					</li>
					<li>
						<img src="../images/buy/others4.png" alt="">
						<p class="xs-msg">Z5 6GB+12GB 全息幻彩</p>
						<p class="xs-price">￥69</p>
					</li>
				</ul>
			</div>
			<ul id="b-bar">
				<li><a href="">详细信息</a></li>
				<li><a href="">包装规格及参数</a></li>
				<li><a href="">评价(0)</a></li>
				<li><a href="">售后服务</a></li>
			</ul>`;

					$('#b-wrap').append(str2);
					for(var val of data[key].versions){
						$('.message .version').append($('<dd>'+val+'</dd>'))
					}
					for(var index in data[key].color){
					$('.message .yanse').append($('<dd><p style="background:'+data[key].color[index]+'"></p>'+data[key].color1[index]+'</dd>'))
						}
						
			$('#b-wrap').on('click', '.version dd', function() {
				// console.log(id)			
				$(this).parent().find('dd').css('border', 'solid 1px #ccc');
				$(this).parent().find('dd').css('color', '#000');
				$(this).css('border', "solid 1px red");
				$(this).css('color', 'red');
				var word = $(this).html()
				$('.rigthbox h1').html(data[id].name+''+word)
				$('.smallPriceP .smallPrice').html(data[id].price[key1])
				for(var key1 of Object.keys(data[id].price)){
						if( word == key1){
							$('.summary .price').html(data[id].price[key1])	
						}
					}
			})
				}
			}
			
		}
	});
	
	$('#b-wrap').on('mouseover','.support li:first',function(){
		$('.supportbox').css({'display':'block','left':'-148px'});
		$('.supportbox2 h5').html("<i class='iconfont'>&#xea84;</i>花呗分期");
		$('.supportbox2 p').text('商品支持花呗分期');
	})
	
	$('#b-wrap').on('mouseout','.support li:first',function(){
		$('.supportbox').css('display','none');
	})
	
	$('#b-wrap').on('mouseover','.support li:eq(1)',function(){
		$('.supportbox').css({'display':'block','left':'-37px'});
		$('.supportbox2 h5').html("<i class='iconfont'>&#xea84;</i>支持以旧换旧,嘿嘿~");
		$('.supportbox2 p').text('回收鼓励金通过参加以旧换新活动获得');
	})
	
	$('#b-wrap').on('mouseout','.support li:eq(1)',function(){
		$('.supportbox').css('display','none');
	})
	
	$('#b-wrap').on('mouseover','.support li:last',function(){
		$('.supportbox').css({'display':'block','left':'69px'});
		$('.supportbox2 h5').html("<i class='iconfont'>&#xea84;</i>支持积分兑换");
		$('.supportbox2 p').text('1000积分可兑换1元');
	})
	
	$('#b-wrap').on('mouseout','.support li:last',function(){
		$('.supportbox').css('display','none');
	})
	
	$('#b-wrap').on('mouseover','.b-imgboxs li',function(){
		$(this).css({'box-shadow':'2px 1px 7px 2px rgba(0,0,0,0.2)'});
	})
	
	$('#b-wrap').on('mouseout','.b-imgboxs li',function(){
		$(this).css({'box-shadow':'none'});
	})
	
	$('#b-wrap').on('click', '.yanse dd', function() {
		$(this).parent().find('dd').css('border', 'solid 1px #ccc');
		$(this).parent().find('dd').css('color', '#000');
		$(this).css('border', "solid 1px red");
		$(this).css('color', 'red');
	})

	$('#b-wrap').on('click', '.instalment dd', function() {
		$(this).parent().find('dd').css('border', 'solid 1px #ccc');
		$(this).parent().find('dd').css('color', '#000');
		$(this).css('border', "solid 1px red");
		$(this).css('color', 'red');
	})

	$('#b-wrap').on('click','.add', function() {
		$('.jian').removeAttr('disabled');
		$('.remind').css('display','none');
		var num = parseInt($('.txt').val());
		num += 1;
		$('.txt').val(num);
	
		var price = parseInt($('.price').text()) * parseInt($('.txt').val());
		$('.smallPrice').text(price);
		
		$('.smallPrice').text(price);
		var inst1=parseInt(price/3);
		$('.instalment1').text(inst1);
		var inst2=parseInt(price/6);
		$('.instalment2').text(inst2);
		var inst3=parseInt(price/12);
		$('.instalment3').text(inst3);
		var inst4=parseInt(price/24);
		$('.instalment4').text(inst4);
	})

	$('#b-wrap').on('click', '.jian',function() {
		var num = parseInt($('.txt').val());
		if (num <= 1) {
			num = 1;
			$('.remind').css('display','block');
			$(this).attr('disabled', '');
		} else {
			num -= 1;
		}
		$('.txt').val(num);


		var price = parseInt($('.price').text()) * parseInt($('.txt').val());
		$('.smallPrice').text(price);
		
		var inst1=parseInt(price/3); 
		$('.instalment1').text(inst1);
		var inst2=parseInt(price/6);
		$('.instalment2').text(inst2);
		var inst3=parseInt(price/12);
		$('.instalment3').text(inst3);
		var inst4=parseInt(price/24);
		$('.instalment4').text(inst4);
	})

	$('#b-wrap').on('mousemove', '.smallImg li', function() {
		var str = $(this).find('img').get(0).src;
		$('#mainImg>img').get(0).src = str;
	})

	$('#b-wrap').on('click', '#tocart',function() {
		if(localStorage.getItem('username') == '阿斯蒂芬'){
		var code = $('.bigImg').attr('code');
		var num = parseInt($('.amount dd .txt').val());
		if (localStorage.getItem('goods') && localStorage.getItem('goods1')) {
			var codeArr = JSON.parse(localStorage.getItem('goods')).code;
			var numArr = JSON.parse(localStorage.getItem('goods1')).num;
		} else {
			var codeArr = [];
			var numArr = []
		}
		if(codeArr.indexOf(code)==-1){
			codeArr.push(code);
			numArr.push(num)
			var codeJson = JSON.stringify({"code": codeArr});
			var numJson = JSON.stringify({"num":numArr});
			localStorage.setItem("goods", codeJson);
			localStorage.setItem('goods1',numJson);
			alert("成功加入购物车！");
		}else{
			alert('请不要重复操作')
		}
	}else if(localStorage.getItem('username') == '森岛帆高'){
		var code = $('.bigImg').attr('code');
		var num = parseInt($('.amount dd .txt').val());
		if (localStorage.getItem('goods2') && localStorage.getItem('goods3')) {
			var codeArr = JSON.parse(localStorage.getItem('goods2')).code;
			var numArr = JSON.parse(localStorage.getItem('goods3')).num;
		} else {
			var codeArr = [];
			var numArr = []
		}
		if(codeArr.indexOf(code)==-1){
			codeArr.push(code);
			numArr.push(num)
			var codeJson = JSON.stringify({"code": codeArr});
			var numJson = JSON.stringify({"num":numArr});
			localStorage.setItem("goods2", codeJson);
			localStorage.setItem('goods3',numJson);
			alert("成功加入购物车！");
		}else{
			alert('请不要重复操作')
			}
	}else{
		alert('请先登录注册')
	}	
})

	$(window).on('scroll',function(){
		var sTop = document.documentElement || document.body;
		if(sTop.scrollTop >= 200  || sTop.scrollTop<=900){
			$('.leftbox').css('position','fixed')
			$('.leftbox').css('top',15)
		}
		if(sTop.scrollTop <= 200  ){
			$('.leftbox').css('position','absolute')
			$('.leftbox').css('top',10)
		}
		if(sTop.scrollTop>=900){
			$('.leftbox').css('position','absolute')
			$('.leftbox').css('top',675)
		}
	})
	$('#b-wrap').on('change','.txt',function(){
		var num = parseInt($('.txt').val());
		if (num < 1) {
			num = 1;
			$('.remind').css('display','block');
			$('.txt').val(num);
		} else {
			$('.remind').css('display','none');
			var price = parseInt($('.price').text()) * parseInt($('.txt').val());
		}
		var price = parseInt($('.price').text()) * parseInt($('.txt').val());
		$('.smallPrice').text(price);
		
		var inst1=(price/3).toFixed(2);
		$('.instalment1').text(inst1);
		var inst2=(price/6).toFixed(2);
		$('.instalment2').text(inst2);
		var inst3=(price/12).toFixed(2);
		$('.instalment3').text(inst3);
		var inst4=(price/24).toFixed(2);
		$('.instalment4').text(inst4);
	})
	
	$('#b-wrap').on('click','#buynow',function(){
		location.href="../global/goods.html";
	})
	
}
