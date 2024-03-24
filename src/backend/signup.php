<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (
        !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password'])
    ) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
  
        $check_email = $mysqli->prepare('SELECT email FROM users WHERE email=?');
        $check_email->bind_param('s', $email);
        $check_email->execute();
        $check_email->store_result();
        $email_exists = $check_email->num_rows();

        if ($email_exists == 0) {
            $hashed_password = password_hash($password, PASSWORD_BCRYPT);
            $query = $mysqli->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
            $query->bind_param('sss', $name, $email, $hashed_password);
            $query->execute();

            $response['status'] = "success";
            $response['message'] = "User $name was created successfully";
            $response['user_id'] = $mysqli->insert_id;
        } else {
            $response["status"] = "error";
            $response["message"] = "User with email $email already exists";
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
