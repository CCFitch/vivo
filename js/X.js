var but2=document.querySelector('#x');
var butt2=document.querySelector('.butt2 img');
var b=document.querySelectorAll('.but2' )
but2.onclick=function(e){
	var ev = event || e;
	var target = ev.target || ev.srcElement;
if(target==b[0]){
	butt2.src="../images/img/12.png";	
}else{
	butt2.src="../images/img/11.png";	
}	 
}

var head3=document.querySelector('.head3');
var head3a=document.querySelector('.head3-a');
var head3a1=document.querySelector('.head3-a-1');
var head3aul=document.querySelector('.head3-a ul');
window.onscroll=function(){
var Top=document.documentElement.scrollTop;
if(Top>=100){
	head3.style.position='fixed';
	head3.style.top="0";
}else{
			head3.style.position="absolute";
			head3.style.top="100px";
			head3a.style.width="100%";
			head3a1.style.paddingLeft="6%"
			head3aul.style.paddingRight="6%"
	}
}

