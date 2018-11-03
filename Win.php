<!DOCTYPE html>
<html>
<head>
	<title>GANADOR!</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="scripts.js"></script>
</head>
<body id="bodyWin">
	<canvas id="canvas" class="Fireworks"></canvas>
	<script>
		setTimeout(Winner,3000);
		var variableJS = "hola";
	</script>
	<?php
		$PHPvariable = "<script> document.write(variableJS) </script>";
		$file = fopen("ranking.txt", "a+");
		fwrite($file, $PHPvariable . PHP_EOL);
		fclose($file);
	?>
</body>
</html>