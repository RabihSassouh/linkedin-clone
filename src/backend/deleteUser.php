<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!empty($_POST['user_id'])) {
        $user_id = $_POST['user_id'];

        $query = $mysqli->prepare("DELETE FROM users WHERE id = ?");
        $query->bind_param("i", $user_id);
        
        if ($query->execute()) {
            echo json_encode(array("status" => "success", "message" => "User profile deleted successfully"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Failed to delete user profile"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "User ID is required"));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method"));
}
?>
