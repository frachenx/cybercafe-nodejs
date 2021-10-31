<?php
require_once("../classes/user.php");
require_once("../config.php");
$jsonInput =  json_decode(file_get_contents("php://input"));
$user = new User();
$user->name = $jsonInput->name;
$user->address = $jsonInput->address;
$user->number = $jsonInput->mobile;
$user->email = $jsonInput->email;
$user->computer = $jsonInput->computer;
$user->idProof = $jsonInput->idProof;
$user->inTime = date("Y-m-d h:i:s");
$user->outTime = $jsonInput->outTime;
$user->status = $jsonInput->status;
$user->fee = $jsonInput->fee;
$user->remark = $jsonInput->remark;
$user->addUser();

