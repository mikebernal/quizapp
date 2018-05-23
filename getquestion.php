<?php
    $result = array();
    $data = file_get_contents('php//input'); // Getting request data and converting it into string
    $result = json_decode($data, true); // Converts data into an array or object
    echo json_encode($result." haha"); // Converts data into JSON 
