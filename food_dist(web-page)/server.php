<?php
//если работаю с json то добавляю

$_POST = json_decode(file_get_contents("php://input"), true);

echo var_dump($_POST);