<?php
require_once("../config.php");
require_once("../classes/user.php");

$jsonInput = json_decode(file_get_contents("php://input"));
$json = array();
if (!$jsonInput){
    $json = array(
        "response"=>"ERROR"
    );
}else{
    $user = new User();
    $user->id = $jsonInput->id;
    $user->remark = $jsonInput->remark;
    $user->fee = $jsonInput->fee;
    $user->status = $jsonInput->status;
    $user->outTime =date("Y-m-d h:i:s");
    $user->updateUser();
}



