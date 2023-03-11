<?php
include "dbclass.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("content-type: application/json");


// GET , POST

$db = new Database();
$db->connect();
$username = $_GET["user"];
$password = $_GET["password"];

$query = "INSERT INTO user Values (NULL,'". $username ."', '" . $password .  "') ";
$res = $db->query($query);

if ($res == true)
{
    echo "DOne";
}
else
{
    echo "failed";
}
