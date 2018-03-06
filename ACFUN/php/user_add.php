<?php
/**
*接收客户端提交的新用户信息，保存入数据库，返回 {"msg": "succ", "uid": 3} 或 {"msg":"err", "sql":"INSERT...."}
*/
header('Content-Type: application/json;charset=UTF-8');
//接收并处理客户端提交的请求数据
$uname = $_REQUEST['uname'];
$upwd = $_REQUEST['upwd'];
include('0.php');
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

$sql = " SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "SELECT uid FROM acf_user WHERE uname='$uname'";
$result = mysqli_query($conn, $sql);
$row=mysqli_fetch_assoc($result);
//var_dump($row);
if($row){
	 $output['msg'] = '用户名已存在';
}else{
//提交SQL
	$sql = "INSERT INTO acf_user VALUES(NULL,'$uname','$upwd')";
	$result = mysqli_query($conn,$sql);

	//创建要输出给客户端的数据
	$output = [];
	if($result){    //执行成功
			$output['msg'] = 'succ';
			$output['uid'] = mysqli_insert_id($conn);
	}else{         //执行失败
			$output['msg'] = 'err';
	}
//把数据编码为JSON字符串
}
echo json_encode($output);





