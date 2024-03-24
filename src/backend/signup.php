<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (
        !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password'])
    ) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $bio = isset($_POST['bio']) ? $_POST['bio'] : '';
        $experience = isset($_POST['experience']) ? $_POST['experience'] : '';
        $education = isset($_POST['education']) ? $_POST['education'] : '';
  
        $check_email = $mysqli->prepare('SELECT email FROM users WHERE email=?');
        $check_email->bind_param('s', $email);
        $check_email->execute();
        $check_email->store_result();
        $email_exists = $check_email->num_rows();

        if ($email_exists == 0) {
            $hashed_password = password_hash($password, PASSWORD_BCRYPT);
            $query = $mysqli->prepare('INSERT INTO users (name, email, password,bio,experience,education) VALUES (?,?,?,?,?,?)');
            $query->bind_param('ssssss', $name, $email, $hashed_password,$bio,$experience,$education);
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
