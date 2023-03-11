<?php

include "dbclass.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("content-type: application/json");

$db = new Database();
$db->connect();


$query = "SELECT * FROM user";
$res = $db->query($query);

$respond = [];
// [[id=>  , name=>  ]]
// [[sasdasd], {id: , name: }]
while ($row = $res->fetch_assoc())
{
    array_push($respond,$row);
}

echo json_encode($respond);
return json_encode($respond);
