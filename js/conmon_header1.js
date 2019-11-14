window.onload = function() {
    var username = localStorage.getItem("username")
    console.log(username)
  if (username) {
    $(".home_top_r").html(`                
        <li class="home_goods"><a href="./goods.html">购物车</a></li>              
        <li class="home_per"><a href = "" >个人中心</a>
        <div class='gerenzhongxin'>
        <div class="geren-1">
            <div><i class="iconfont icon-erji"></i> : ${username}</div>
            <p>积分：6</p>
            <span style="margin-top:20px">用户组：正式v粉</span>
        </div>
        <ul class="geren-2">
          <li>
              <div><i class="iconfont icon-zhifubao"></i></div>
              <p>签到</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>好友</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>收藏</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>动态</p>
          </li>
                    <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>好友</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>收藏</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>动态</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>好友</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>收藏</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>动态</p>
          </li>

          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>任务</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>勋章</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>帖子</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>消息</p>
          </li>
          <li>
                  <div><i class="iconfont icon-zhifubao"></i></div>
              <p>退出</p>
          </li>
      </ul>
        </div>
            
</li>`);
    $(".home_per").hover(
      function() {
        console.log(666);
        $(".gerenzhongxin").css({ display: "block" });
      },
      function() {
        $(".gerenzhongxin").css({ display: "none" });
      }
    );
  } else {
    return;
  }
};

$(".home_phones").hover(
  function() {
    $(".phone").stop(true, true);
    console.log(666);
  },
  function() {
    $(".mask_phone").slideUp(500, "swing");
  }
);

var col = $(".home_guide").css("background");

$(".phone").hover(
  function() {
    console.log(col);
    $(".mask_phone").stop(true, true);
    $(".phone").stop(true, true);
    $(this)
      .children(".phone_to")
      .children("img")
      .stop(true, true);
    $(".phone_to").stop(true, true);
    $(".home_guide .icon-VIVO").css("color", "#000");
    // $('.home_guide').css('background-color','none')
    $(".home_guide .home_phones li>a").css("color", "#000");
    $(this)
      .children("a")
      .css("color", "blue");
    $(".mask_phone").slideDown(500, "swing");
    $(this)
      .children(".phone_to")
      .slideDown(500, "swing");
  },
  function() {
    $(".mask_phone").stop(true, true);
    $(".phone").stop(true, true);
    $(this)
      .children(".phone_to")
      .children("img")
      .stop(true, true);
    $(".phone_to").stop(true, true);
    $(this)
      .children(".phone_to")
      .slideUp(500, "swing");
    $(".home_guide").css("background", col);
    $(".home_guide .icon-VIVO").css("color", "#000");
    $(".home_guide .home_phones li>a").css("color", "#000");
  }
);

$("._list li").hover(
  function() {
    $(".mask_phone").stop(true, true);
    $(".phone").stop(true);
    $(this)
      .children("img")
      .stop(true, true);
    $(".phone")
      .children(".phone_to")
      .stop(true);
    if ($(this).children("img").length == 5) {
      $(this)
        .children(".phone_img1")
        .animate({ left: "50px" }, 500);
      $(this)
        .children(".phone_img2")
        .animate({ left: "65px" }, 500);
      $(this)
        .children(".phone_img3")
        .animate({ left: "80px" }, 500);
      $(this)
        .children(".phone_img4")
        .animate({ left: "95px" }, 500);
      $(this)
        .children(".phone_img5")
        .animate({ left: "115px" }, 500);
    } else if ($(this).children("img").length == 4) {
      $(this)
        .children(".phone_img1")
        .animate({ left: "50px" }, 500);
      $(this)
        .children(".phone_img2")
        .animate({ left: "65px" }, 500);
      $(this)
        .children(".phone_img3")
        .animate({ left: "80px" }, 500);
      $(this)
        .children(".phone_img4")
        .animate({ left: "95px" }, 500);
    } else if ($(this).children("img").length == 3) {
      $(this)
        .children(".phone_img1")
        .animate({ left: "55px" }, 500);
      $(this)
        .children(".phone_img2")
        .animate({ left: "80px" }, 500);
      $(this)
        .children(".phone_img3")
        .animate({ left: "105px" }, 500);
    } else if ($(this).children("img").length == 2) {
      $(this)
        .children(".phone_img1")
        .animate({ left: "55px" }, 500);
      $(this)
        .children(".phone_img2")
        .animate({ left: "90px" }, 500);
    }
  },
  function() {
    $(".mask_phone").stop(true, true);
    $(".phone").stop(true, true);
    $(".phone")
      .children(".phone_to")
      .stop(true, true);
    $(this)
      .children("img")
      .stop(true, true);
    $(this)
      .children("img:not(.phone_img1)")
      .animate({ left: "80px" }, 500);
    $(this)
      .children(".phone_img1")
      .animate({ left: "60px" }, 500);
  }
);
$("._list li a").hover(
  function() {
    $(".mask_phone").stop(true, true);
    $(".phone").stop(true);
    $(".phone")
      .children(".phone_to")
      .stop(true);
    $(this)
      .children("img")
      .stop(true, true);
    if ($(this).children("img").length == 5) {
      $(this)
        .children(".phone_img1")
        .animate({ left: "50px" }, 500);
      $(this)
        .children(".phone_img2")
        .animate({ left: "65px" }, 500);
      $(this)
        .children(".phone_img3")
        .animate({ left: "80px" }, 500);
      $(this)
        .children(".phone_img4")
        .animate({ left: "95px" }, 500);
      $(this)
        .children(".phone_img5")
        .animate({ left: "115px" }, 500);
    } else if ($(this).children("img").length == 4) {
      $(this)
        .children(".phone_img1")
        .animate({ left: "50px" }, 500);
      $(this)
        .children(".phone_img2")
        .animate({ left: "65px" }, 500);
      $(this)
        .children(".phone_img3")
        .animate({ left: "80px" }, 500);
      $(this)
        .children(".phone_img4")
        .animate({ left: "95px" }, 500);
    } else if ($(this).children("img").length == 3) {
      $(this)
        .children(".phone_img1")
        .animate({ left: "55px" }, 500);
      $(this)
        .children(".phone_img2")
        .animate({ left: "80px" }, 500);
      $(this)
        .children(".phone_img3")
        .animate({ left: "105px" }, 500);
    } else if ($(this).children("img").length == 2) {
      $(this)
        .children(".phone_img1")
        .animate({ left: "55px" }, 500);
      $(this)
        .children(".phone_img2")
        .animate({ left: "90px" }, 500);
    }
  },
  function() {
    $(".mask_phone").stop(true, true);
    $(".phone").stop(true, true);
    $(".phone")
      .children(".phone_to")
      .stop(true, true);
    $(this)
      .children("img")
      .stop(true, true);
    $(this)
      .children("img:not(.phone_img1)")
      .animate({ left: "80px" }, 500);
    $(this)
      .children(".phone_img1")
      .animate({ left: "60px" }, 500);
  }
);

$(".home_search").click(function() {
  $(".h_search").show(500, "easeInBack");
  $(".h_search").css("z-index", 2);
  $(".home_guide").hide(500, "easeInBack");
});
$(".cha").click(function() {
  $(".h_search").hide(500, "easeInBack");
  $(".home_guide").show(500, "easeInBack");
});
// var arr = [iQOO,nex,x,s,z,y]
// for(var i = 0;i<7;i++){
//     $('._list').eq(i).children('li').eq(0).click(function(){
//         $(window).location.href = `${arr[i]}.html`
//     })
// }
