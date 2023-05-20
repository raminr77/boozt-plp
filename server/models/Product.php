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

        $total_count = 0;
        $sort_query = '';
        $search_query = '';

        // Low Price
        if ($sort == 2) {
            $sort_query = ' ORDER BY actual_price ASC';
        }
        // High Price
        if ($sort == 3) {
            $sort_query = ' ORDER BY actual_price DESC';
        }
        // Most Discount
        if ($sort == 4) {
            $sort_query = ' ORDER BY (base_price - actual_price) DESC';
        }

        // Search
        if($q != ''){
            // `:search` for SQL injection :D
            $search_query = 'SELECT * FROM ' . $this->table .' WHERE product_name LIKE :search' . $sort_query . ' LIMIT ' . (($page - 1) * $acceptable_limit) . ',' . $acceptable_limit;
            $searched_data = $this->connection->prepare($search_query);
            $searched_data->bindValue(':search', '%' . $q . '%');
            $searched_data->execute();
            
            // Count
            $total_count_query = 'SELECT COUNT(*) FROM ' . $this->table . ' WHERE product_name LIKE :search';
            $total_count_data = $this->connection->prepare($total_count_query);
            $total_count_data->bindValue(':search', '%' . $q . '%');
            $total_count_data->execute();

            return array(
                'data' => $searched_data,
                'total_count' => intval($total_count_data->fetchColumn())
            );
        } else {
            $total_count_query = 'SELECT COUNT(*) FROM ' . $this->table;
            $total_count_data = $this->connection->prepare($total_count_query);
            $total_count_data->execute();
            $total_count = intval($total_count_data->fetchColumn());
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
