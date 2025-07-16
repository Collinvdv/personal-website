<?php
// vote.php
$vote = isset($_POST['vote']) ? $_POST['vote'] : '';

if ($vote === 'yes' || $vote === 'no') {
    // Save the vote to a file or database
    file_put_contents('votes.txt', $vote . "\n", FILE_APPEND);
    echo "Thank you for voting!";
} else {
    echo "Invalid vote. Please select 'yes' or 'no'.";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Mustache Vote</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }

        h1 {
            color: #333;
        }

        form {
            margin-top: 20px;
        }

        input[type="radio"] {
            margin: 10px;
        }

        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Do you like my mustache?</h1>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <input type="radio" name="vote" value="yes"> Yes<br>
        <input type="radio" name="vote" value="no"> No<br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>