	document.onscroll=function(){
		var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollT<=100){
			$('.main-title').css({"position":"static",'background':'transparent',"width":"1200px"});
		}else{
			$('.main-title').css({"position":"fixed","width":"100%","top":"0",'background':'rgba(255,255,255,0.7)'});
			$('.tit-left').css('padding-left','10px');
			$('.tit-right').css('padding-right','20px');
			// console.log(scrollT);
		}
		
		if(scrollT>=600){
			$('.imgbox1').animate({'top':'270px'},1000);
		}
		
		if(scrollT>=2900){
			$('.imgbox3').animate({'top':'350px'},1000);
		}
		
		if(scrollT>=3450){
			$('.imgbox4').animate({'left':'420px'},1000);
		}
		
		if(scrollT>=7850){
			$('.imgbox9').animate({'left':'756px'},1000);
		}
		
		if(scrollT>=9100){
			$('.p2img').animate({'left':'588px','top':'373px'},1000);
		}
		
		if(scrollT >= 11100){
			$('.box13inner').fadeTo(2000,1);
		}
		
		if(scrollT>=11800){
			$('.p14-1').animate({'left':'65px'},1000);
			$('.p14-3').animate({'left':'860px'},1000);
		}
		
	}

