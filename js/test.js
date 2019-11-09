	$.ajax({
		url:'../data/data.json',
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		success:function(data){
			console.log(1);
		}
	});
// console.log(111)