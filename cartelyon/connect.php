
<?php
try {
    $dns = "mysql:host=localhost:3307;dbname=animation";
    $utilisateur = 'root';
    $motdepasse = '';
    $connection = new PDO($dns, $utilisateur, $motdepasse);
    $connection->query("SET NAMES utf8");
}catch (Exception $e){
    echo "Connection à MySQL impossible : ", $e -> getMessage();
    die;
}
