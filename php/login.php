<?php
    include "./conn.php";
    if(isset($_POST['usm'])&&isset($_POST['psd'])){
        $usm=$_POST['usm'];
        $psd=md5($_POST['psd']);
        
        $sql="select * from user where usm='$usm' and psd='$psd'";
        $result=mysql_query($sql);
        if(mysql_fetch_array($result,MYSQL_ASSOC)){
            echo 'true';
        }else{
            echo 'false';
        }
        
    }
?>