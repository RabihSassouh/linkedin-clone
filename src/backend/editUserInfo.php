<?php
include('connection.php');

$json= file_get_contents('php://input');
$data= json_decode($json,true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!empty($data['user_id']) && !empty($data['bio']) && !empty($data['experience']) && !empty($data['education'])) {
        $user_id = $data['user_id'];
        $bio = $data['bio'];
        $experience = $data['experience'];
        $education = $data['education'];

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
