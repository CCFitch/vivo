
  // var name = localStorage.getItem("username")
  // if(name){    
  //     $('.home_top_r').html(`                
  //     <li class="home_goods"><a href="./goods.html">购物车</a></li>              
  //     <li class="home_per"><a href = "" >个人中心</a>
  //             <div class="home_per_list">
  //                 <p><a href="./global/per_total_store.html"> 
  //                 <i class="iconfont icon-kuaidi"></i> 积分商城
  //                 </a></p>
  //                 <p><a href="./global/per_my_collect.html">
  //                 <i class="iconfont icon-ziyuan"></i> 我的收藏
  //                 </a></p>
  //                 <p><a href="./global/per_accountCenter.html">
  //                 <i class="iconfont icon-erji"></i> 账号中心
  //                 </a></p>
  //             </div>                    
  //     </li>`)
  //     $('.home_per').hover(function(){
  //         console.log(666)
  //         $('.home_per_list').css({display:"block"})
  //     },function(){
  //         $('.home_per_list').css({display:"none"})
  //     })
  // }else{
  //     return
  // }

  document.onscroll = function() {
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    // if (scrollT == 0) {
    //   $(".top").css({
    //     position: "static", 
    //     background: "transparent",
    //     width: "1200px"
    //   });
    // } else {
    //   $(".top").css({
    //     position: "fixed",
    //     width: "1532",
    //     top: "0",
    //     background: "rgba(255,255,255,0.7)"
    //   });
    //   $(".top1").css("padding-left", "10px");
    //   $(".top2").css("padding-right", "20px");
    //   console.log(scrollT);
    // }
    if (scrollT >= 161) {
      $(".top").css({
        position: "fixed",
        background: "transparent",
        width: "1200px",
        marginTop: "0px"
      })
      }
      
      if(scrollT<160){
        $(".top").css({
        position: "absolute",
        background: "transparent",
        width: "1200px",
        marginTop: "100px"
        })

      }
      // if (scrollT < 161) {
      //   $(".top").css({
      //     position: "fixed",
      //     background: "transparent",
      //     width: "1200px"
      //     marginTop: "161px"
      //   });
      // }
    
    if (scrollT >= 161) {
      $(".top").css({
        position: "fixed",
        top: "0",
        width: "100%",
        background: "#fff",
        color: "#000"
      });
    }
    if (scrollT >= 933 && scrollT <= 1840) {
      $(".imgbox1").animate({ top: "450px" }, 1000);
    }
    if (scrollT < 933 || scrollT > 1840) {
      $(".imgbox1").stop();
      $(".imgbox1").css("top", "600px");
    }
    if (scrollT >= 1866 && scrollT <= 2933) {
      $(".img3").animate({ top: "600px" }, 700);
      $(".img4").animate({ top: "600px" }, 1000);
    }
    if (scrollT < 1866 || scrollT > 2933) {
      $(".img3").stop();
      $(".img4").stop();
      $(".img3").css("top", 730);
      $(".img4").css("top", 500);
    }

    if (scrollT >= 2930 && scrollT <= 3900) {
      $(".imgbox4").animate({ right: "190px" }, 1000);
    }
    if (scrollT < 2930 || scrollT > 3900) {
      $(".imgbox4").stop();
      $(".imgbox4").css("right", 80);
    }
  };

