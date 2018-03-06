<?php
/**向客户端输出产品列表**/
header('Content-Type: application/json;charset=UTF-8');
$xname=$_REQUEST['xname'];
//接收客户端提交的数据
if(empty($xname)){
    return;
};
//连接数据库
include('0.php'); //包含指定文件的内容在当前位置
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);
//提交SQL
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);
$sql = "SELECT * FROM acf_xiamu where xname like '%$xname%'";
$result = mysqli_query($conn, $sql);
//读取所有的记录
$xlist = mysqli_fetch_all($result, MYSQLI_ASSOC);
//把商品数组编码为JSON字符串并输出
if($xlist){
    echo json_encode($xlist);
}else{
    echo 'err';
}
