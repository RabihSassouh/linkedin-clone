<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_POST['user_id']) && isset($_POST['content'])) {
        $user_id = $_POST['user_id'];
        $content = $_POST['content'];

        $query = $mysqli->prepare('INSERT INTO posts (content, user_id) VALUES (?, ?)');
        $query->bind_param('si', $content, $user_id);

        if ($query->execute()) {
            $response['status'] = "success";
        } else {
            $response['status'] = "Can't add post";
        }
    } else {
        $response['status'] = "error";
        $response['message'] = "user_id and content are required";
    }
} else {
    $response['status'] = "error";
    $response['message'] = "Invalid request method";
}

echo json_encode($response);
?>
