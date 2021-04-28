<!-- <?php
    // if(isset($_POST["username"]) && $_POST["username"] != "")
    // {
    //     echo "your username is :".$_POST["username"];
    // }else{
    //     echo "you have to must fill username";
    // }
   
    
?> -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo "how it"; ?></title>
</head>
<body>
    <ul>
        <?php
            $m = 35;
            for($i = 1;$i <= 10;$i++)
            {
                echo "<li>$m x $i = ".($m*$i)."</li>";
            }
        ?>
    </ul>
</body>
</html>