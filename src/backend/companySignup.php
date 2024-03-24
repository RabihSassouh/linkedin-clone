<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['description'])) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $description = $_POST['description'];

        $query = $mysqli->prepare('SELECT email FROM companies WHERE email=?');
        $query->bind_param('s', $email);
        $query->execute();
        $query->store_result();
        $numRows = $query->num_rows();

        if ($numRows == 0) {
            $hashed_password = password_hash($password, PASSWORD_BCRYPT);
            $query = $mysqli->prepare('INSERT INTO companies (name, email, password, description) VALUES (?, ?, ?, ?)');
            $query->bind_param('ssss', $name, $email, $hashed_password, $description);
            $query->execute();

            $response['status'] = "success";
            $response['message'] = "Company $name was created successfully";
            // $response['company_id'] = $mysqli->insert_id;
        } else {
            $response["status"] = "error";
            $response["message"] = "Company with email $email already exists";
        }
    } else {
        $response['status'] = "error";
        $response['message'] = "Incomplete data received";
    }
} else {
    $response['status'] = "error";
    $response['message'] = "Invalid request method";
}

echo json_encode($response);
?>
