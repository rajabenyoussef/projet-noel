<?php
require_once('Database.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $db = new Database('config.ini');

    
   

   $pseudo = $_POST['pseudo'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];



    $conn = $db->connect();

    $sql = "INSERT INTO messagerie (pseudo, email, msg) VALUES ('$pseudo', '$email', '$msg')";

    if ($conn->query($sql) === TRUE) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Erreur lors de l'inscription : " . $conn->error;
    }

    $conn->close();
}
?>
