<?php
include "./conn.php";
if (isset($_POST['username'])) {
    $username = $_POST['username'];
    $query = "select * from user where usm='$username'";
    $result = mysql_query($query);
    if (mysql_fetch_array($result)) {//如果有值代表用户名存在。
        echo 'false';//有重复
    } else {
        echo 'true';//没有重复
    }
}
    	//2.如果单击注册按钮,按钮的值为注册,将表单的值添加的数据库.
if (isset($_POST['submit']) && $_POST['submit'] == "提交") {
    $user = $_POST['username'];//username：表单的名称
    $pass = md5($_POST['password']);
        //添加语句
        
    $query = "insert user values(null,'$user','$pass')";
    echo $query;
    $result=mysql_query($query);
    
    header('location:http://10.31.155.56/project/project/konka/dist/login.html');//页面的跳转
}
?>