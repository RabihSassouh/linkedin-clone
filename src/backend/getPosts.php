<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $query = $mysqli->query("SELECT * FROM posts");
    if ($query) {
        $posts = array();
        while ($row = $query->fetch_assoc()) {
            $posts[] = $row;
        }
        echo json_encode(array("status" => "success", "posts" => $posts));
    } else {
        echo json_encode(array("status" => "error", "message" => "Failed to fetch posts"));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method"));
}
echo json_encode($response);
?>
