<?php
	header("Content-Type:text/html;charset=utf-8");
	
	function connectDB($sql){
		$db = mysqli_connect("localhost","root","","studentysy");
		//mysqli_select_db($db,"studentysy");
		mysqli_query($db,"set names utf8");
		$s = $sql;
		//echo $sql;
		$result = mysqli_query($db,$sql);
		return $result;
	}
	
?>