<?php
class Product
{
    private $connection;
    private $table = 'products_list';

    // Product Properties
    public $id;
    public $gender;
    public $filename;
    public $brand_name;
    public $base_price;
    public $size_detail;
    public $sale_active;
    public $product_name;
    public $actual_price;
    public $color_detail;

    public function __construct($db)
    {
        $this->connection = $db;
    }

    public function read($apiParams)
    {
        extract($apiParams); // q, sort, page, limit (api query string)

        $sort_query = '';
        // Low Price
        if ($sort == 2) {
            $sort_query = ' ORDER BY actual_price ASC';
        }
        // High Price
        if ($sort == 3) {
            $sort_query = ' ORDER BY actual_price DESC';
        }
        // More Discount
        if ($sort == 4) {
            $sort_query = ' ORDER BY (base_price - actual_price) DESC';
        }

        $query = 'SELECT * FROM ' . $this->table . $sort_query . ' LIMIT ' . (($page - 1) * $limit) . ',' . $limit;
        $data = $this->connection->prepare($query);
        $data->execute();
        return $data;
    }
}
