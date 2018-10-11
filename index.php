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
		echo fgets($file);
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

		$RandomImg = array_rand($ArrayImagenes);

		echo "<div id='imagenServer'><img src='Images/.$ArrayImagenes.'></img></div>";
	?>
</body>
</html>