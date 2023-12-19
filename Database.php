<?php

class Database {
    private $config;

    public function __construct($configFile) {
        $this->config = parse_ini_file($configFile);
    }

    public function connect() {
        
        $conn = new mysqli(
            $this->config['host'],
            $this->config['username'],
            $this->config['password'],
            $this->config['database']
        );

        if ($conn->connect_error) {
            die("Erreur de connexion à la base de données : " . $conn->connect_error);
        }
        
        return $conn;
    }
}

?>
