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
        extract($apiParams); // VALUES: q, sort, page, limit (api query string)
        $acceptable_limit = $limit > 100 ? 100 : $limit;

        $sort_query = '';
        $search_query = '';
        $total_count = 2000; // STATIC: because it needs an extra query.

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
        // Search
        if($q != ''){
            $search_query = ' WHERE product_name LIKE "%' . $q . '%"';

            $newProductCountQuery = $this->connection->prepare('SELECT * FROM ' . $this->table . $search_query);
            $newProductCountQuery->execute();
            $total_count = $newProductCountQuery->rowCount();
        }

        $query = 'SELECT * FROM ' . $this->table . $search_query . $sort_query . ' LIMIT ' . (($page - 1) * $acceptable_limit) . ',' . $acceptable_limit;

        $data = $this->connection->prepare($query);
        $data->execute();

        return array(
            'data' => $data,
            'total_count' => $total_count
        );
    }
}
