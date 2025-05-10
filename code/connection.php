<?php
define('DB_HOST', 'localhost\SQLEXPRESS');
define('DB_NAME', 'HEATMAP');
// define('DB_USERNAME', 'itpark');
// define('DB_PASSWORD', 'IT@park@2025#');

// $connection = array("Database" => DB_NAME, "UID" => DB_USERNAME, "PWD" => DB_PASSWORD, "CharacterSet" => "UTF-8");
// $conn = sqlsrv_connect(DB_HOST, $connection);
$connection = array("Database" => DB_NAME, "CharacterSet" => "UTF-8");
$conn = sqlsrv_connect(DB_HOST, $connection);

// if ($conn) {
// 	echo "Connection established... <br />";
// } else {
// 	echo "Connection could not be established! <br />";
// 	die(print_r(sqlsrv_errors(), true));
// }

function rowCount($sql) {
	global  $conn;
	$sql = $sql;
	$prm = array();
	$options =  array( "Scrollable" => SQLSRV_CURSOR_KEYSET );
	$stmt = sqlsrv_query( $conn, $sql, $prm, $options );
      if ($stmt === false) {
            die(print_r(sqlsrv_errors(), true));
      }        
	$row_count = sqlsrv_num_rows( $stmt );
	return $row_count;
}
?>