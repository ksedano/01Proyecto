<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>¿Quién es quién?</title>
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<script type="text/javascript" defer src="scripts.js"></script>
</head>
<body>
	<?php
		$file = fopen("config.txt", "r");
		//echo fgets($file);
		fclose($file);

		$ArrayImagenes = [
			"User_1.jpg" => "User1",
			"User_2.jpg" => "User2",
			"User_3.jpg" => "User3",
			"User_4.jpg" => "User4",
			"User_5.jpg" => "User5",
			"User_6.jpg" => "User6",
			"User_7.jpg" => "User7",
			"User_8.jpg" => "User8",
			"User_9.jpg" => "User9",
			"User_10.jpg" => "User10",
			"User_11.jpg" => "User11",
			"User_12.jpg" => "User12"
		];

		$RandomImgServer = array_rand($ArrayImagenes);

		echo "<div id='tableroCartas'>";
		echo "<div id='imagenServer'><img width='150' hieght='150' src='Images/$RandomImgServer'></img></div>";

    	echo "<table class='table' id='Cartas'>";

    	$ImagenesUtilizadas = [];
      	for ($i=0; $i < 3; $i++) {
        	echo "<tr>";
        	for ($x=0; $x < 4; $x++) {
         		$RandomTablero = array_rand($ArrayImagenes);
            	if(in_array($RandomTablero, $ImagenesUtilizadas)){
            		continue;
   				}else{
    				array_push($ImagenesUtilizadas, $RandomTablero);
    				echo "<td><img width='150' hieght='150' src='Images/$RandomTablero'></td>";
    			}
        	}
        	echo "</tr>";
      	}
      	echo "</table></div>";
	?>
</body>
</html>