//设置cookie
function setCookie(cName,cVal,date,path){
	//如果date没有传递，只传递了path，这时date就是path
	if(!(date instanceof Date)){
		//如果没有传递第四个参数，而第三个参数又是一个路径，这里的path是一个undefined.
		path = date;
	}
	//date没有传参的情况
	date = date || new Date();
	if(path){
		document.cookie = cName + "=" + cVal + ";expires=" + date + ";path="+path;
	}else{
		document.cookie = cName + "=" + cVal + ";expires=" + date;
	}
}

//通过对应的名称获取对应的cookie值
function getCookieByName(cName){
	//获取所有的cookie信息
	var cStr = document.cookie;
	if(cStr){
		var cArr = cStr.split("; ");
		for (var i = 0; i < cArr.length; i++) {
			//获取所有的name与cName比较
			if(cArr[i].split("=")[0] === cName){
				return cArr[i].split("=")[1];
			}
		}
	}
	return "";
}
			
//删除cookie
function deletCookie(cName){
	document.cookie = cName + "=;expires=" + new Date(0);
}







