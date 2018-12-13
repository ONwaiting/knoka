<?php
    include './conn.php';
    $id=$_GET['gid'];
    $sql="select * from goods where gid='$id'";
    $result=mysql_query($sql);
    $dataarr=array();
    $result=mysql_query($sql);
    for($i=0;$i<mysql_num_rows($result);$i++){
        $dataarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
    }  
    echo json_encode($dataarr);
?>