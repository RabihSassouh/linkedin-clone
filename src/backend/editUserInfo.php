<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!empty($_POST['user_id']) && !empty($_POST['bio']) && !empty($_POST['experience']) && !empty($_POST['education'])) {
        $user_id = $_POST['user_id'];
        $bio = $_POST['bio'];
        $experience = $_POST['experience'];
        $education = $_POST['education'];

        $query = $mysqli->prepare("UPDATE users SET bio = ?, experience = ?, education = ? WHERE id = ?");
        $query->bind_param("sssi", $bio, $experience, $education, $user_id);
        
        if ($query->execute()) {
            echo json_encode(array("status" => "success", "message" => "User profile updated successfully"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Failed to update user profile"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "User ID, bio, experience, and education are required"));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method"));
}
?>
