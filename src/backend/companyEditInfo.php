<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!empty($_POST['company_id']) && !empty($name = $_POST['name']) && !empty($description = $_POST['description'])) {
        $company_id = $_POST['company_id'];
        $name = $_POST['name'];
        $description = $_POST['description'];

        $query = $mysqli->prepare("UPDATE companies SET name = ?, description = ? WHERE id = ?");
        $query->bind_param("ssi", $name, $description, $company_id);

        if ($query->execute()) {
            echo json_encode(array("status" => "success", "message" => "Company profile updated successfully"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Failed to update company profile"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Company ID, name, and description are required"));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method"));
}
?>
