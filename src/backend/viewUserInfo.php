<?php
include('connection.php');

    if (!empty($_GET['user_id'])) {
        $user_id = $_GET['user_id'];

        $query = $mysqli->prepare("SELECT * FROM users WHERE id = ?");
        $query->bind_param("i", $user_id);
        $query->execute();
        $result = $query->get_result();

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            echo json_encode(array("status" => "success", "user" => $user));
        } else {
            echo json_encode(array("status" => "error", "message" => "User profile not found"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "User ID is required"));
    }

?>
