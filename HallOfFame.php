<html>
<head>
    <link rel="icon" type="image/png" href="Images/Hof.png">
    <title>Tabla de Récords</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body id="BodyHallOfFame">
    <divHallOfFame>
        <?php
            $myfile = fopen("ranking.txt", "a+");
            $txt = $_POST['RecordName']."\n";
            fwrite($myfile, $txt);
            fclose($myfile);
        ?>
        <?php
            $file = file("ranking.txt");
            $Array = array();
            foreach($file as $Linea) {
                array_push($Array, $Linea);   
            }
            for ($i = 0; $i < count($Array); $i++) {
                echo "<h3>".$Array[$i]."</h3>";
            }
        ?>
    </divHallOfFame>
</body>
</html>