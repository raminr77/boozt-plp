<?php
class Database
{
    private $connection;
    private $password = '';
    private $username = 'root';
    private $host = 'localhost';
    private $db_name = 'boozt_db';

    public function connect()
    {
        $this->connection = null;

        try {
            $this->connection = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'DB Connection Error' . $e->getMessage();
        }
        return $this->connection;
    }
}
