<?php
include_once "./connection.php";

if (isset($_POST["type"]) && !empty($_POST["type"])) {
    $type = $_POST["type"];
    switch ($type) {
        case "getLeetCodeData":
            getLeetCodeData($conn);
            break;
        case "saveSolution":
            saveSolution($conn);
            break;
        default:
            invalidRequest();
    }
} else {
    invalidRequest();
}

// ╔═════════════════════════╗
// ║     INVALID REQUEST     ║
// ╚═════════════════════════╝
function invalidRequest() {
    $data = array();
    $data['success'] = false;
    $data['message'] = "Invalid request!";
    echo json_encode($data);
    exit;
}
// =========================================================================================================================

// ╔═══════════════════════════╗
// ║     GET LEETCODE DATA     ║
// ╚═══════════════════════════╝
function getLeetCodeData($conn) {
    try {
        $data = array();

        $query = "SELECT * FROM LEETCODE";
        $rowCount = rowCount($query);

        if ($rowCount > 0) {
            $queryOutput = sqlsrv_query($conn, $query);
            if ($queryOutput === false)
                throw new Exception("Error in SQL query execution!");
            else {
                while ($row = sqlsrv_fetch_array($queryOutput, SQLSRV_FETCH_ASSOC)) {
                    $data["data"][] = $row;
                }
            }
            $data["success"] = true;
        } else {
            $data["success"] = false;
        }

        echo json_encode($data);
        exit();
    } catch (Exception $e) {
        $data = array();
        $data["success"] = false;
        $data["message"] = $e->getMessage();
        echo json_encode($data);
        exit();
    }
}

// ╔═══════════════════════╗
// ║     SAVE SOLUTION     ║
// ╚═══════════════════════╝
function saveSolution($conn) {
    try {
        $data = array();

        $query = "SELECT * FROM LEETCODE";
        $rowCount = rowCount($query);

        if ($rowCount > 0) {
            $queryOutput = sqlsrv_query($conn, $query);
            if ($queryOutput === false)
                throw new Exception("Error in SQL query execution!");
            else {
                while ($row = sqlsrv_fetch_array($queryOutput, SQLSRV_FETCH_ASSOC)) {
                    $data["data"][] = $row;
                }
            }
            $data["success"] = true;
        } else {
            $data["success"] = false;
        }

        echo json_encode($data);
        exit();
    } catch (Exception $e) {
        $data = array();
        $data["success"] = false;
        $data["message"] = $e->getMessage();
        echo json_encode($data);
        exit();
    }
}
?>
