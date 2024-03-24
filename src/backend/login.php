<?php
session_start();
include('connection.php');

if (isset($_POST['email'], $_POST['password'])) {
    $loginEmail = $_POST['email'];
    $password = $_POST['password'];

    $query = $mysqli->prepare('SELECT * FROM users WHERE email=?');
    $query->bind_param('s', $loginEmail);
    $query->execute();
    $query->store_result();
    $numRows = $query->num_rows();

    if ($numRows >0) { 
        $query->bind_result($id, $name, $email, $hashed_password, $bio, $experience, $education);
        $query->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION['user_id'] = $id;
            // $_SESSION['user_name'] = $name;
            // $_SESSION['user_email'] = $email;
            // $_SESSION['user_bio'] = $bio;
            // $_SESSION['user_experience'] = $experience;
            // $_SESSION['user_education'] = $education;
            
            $response['status'] = "logged in";
            $response['user_id'] = $id;
            $response['name'] = $name;
            $response['email'] = $email;
            $response['bio'] = $bio;
            $response['experience'] = $experience;
            $response['education'] = $education;
            $response['isLogged'] = true;
        } else {
            $response['status'] = "incorrect credentials";
            $response['isLogged'] = false;
        }
    } else {
        $response['status'] = "user not found";
        $response['isLogged'] = false;
    }
} else {
    $response['status'] = "error";
    $response['isLogged'] = false;
}

echo json_encode($response);
?>
