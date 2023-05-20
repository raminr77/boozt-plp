<?php
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: GET');


include_once '../../config/Database.php';
include_once '../../models/Product.php';

$database = new Database();
$db = $database->connect();
$product = new Product($db);

$apiParams = array(
    'q' => $_GET['q'] ?? '',
    'sort' => intval($_GET['sort'] ?? 1),
    'page' => intval($_GET['page'] ?? 1),
    'limit' => intval($_GET['limit'] ?? 24)
);

$data = $product->read($apiParams);

$result = $data['data'];
$count = $result->rowCount();

if ($count > 0) {
    $response = array();
    $response['data'] = array();

    $totalCount = $data['total_count'];
    $response['total_count'] = $totalCount;
    $response['message'] = 'Your Request Has Been Successfully Done.';

    $pagination_pages = ceil($totalCount / $apiParams['limit']);
    $response['pagination'] = array(
        'count' => $totalCount,
        'page' => $apiParams['page'],
        'pages' => $pagination_pages,
        'limit' => $apiParams['limit'],
        'prev_page' => $apiParams['page'] - 1 < 1 ? null : $apiParams['page'] - 1,
        'next_page' => $apiParams['page'] + 1 > $pagination_pages ? null : $apiParams['page'] + 1,
    );

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $discountValue = round(floatval($base_price) - floatval($actual_price), 3);
        $product_item = array(
            'id' => $id,
            'gender' => $gender,
            'image_url' => $filename,
            'brand_name' => $brand_name,
            'size_detail' => $size_detail,
            'product_name' => $product_name,
            'color_detail' => $color_detail,
            'is_active' => boolval($sale_active),
            'available_sizes' => $available_sizes,
            'prices' => array(
                'base_price' => floatval($base_price),
                'actual_price' => floatval($actual_price),
                'discount_price' => $discountValue,
                'discount_percent' => round((floatval($discountValue) * 100) / floatval($base_price), 0)
            ),
        );
        array_push($response['data'], $product_item);
    }

    echo json_encode($response);
} else {
    echo json_encode(
        array('message' => 'No Products Found.', 'data' => array())
    );
}
