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
		//COMPROBAMOS QUE NO HAYAN CARACTERISTICAS REPETIDAS
		$Caracteristicas = [];
		$file = file("imatges.txt");
		foreach ($file as $key => $value) {
			$texto = strrchr($value, ":");
			if(in_array($texto, $Caracteristicas)){
				echo "<h1>Error</h1>";
				exit;
			}else{
				array_push($Caracteristicas, $texto);
			}
		}
		//COMPROBAMOS QUE NO HAYAN NOMBRES DE FICHEROS REPETIDOS
		$Ficheros = [];
		$x=10;
		$count=1;
		foreach ($file as $key => $value) {
			$texto = substr($value, 0, $x);
			if(in_array($texto, $Ficheros)){
				echo "<h1>Error</h1>";
				exit;
			}else{
				array_push($Ficheros, $texto);
			}$count+=1;
			if($count==10){
				$x+=1;
			}
		}
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
		echo "<div class='carta-box'>";
			echo "<div class='carta'>";
				echo "<div class='cara'>";
					echo "<img src='ParteTrasera.png' width='150' height='150'>";
				echo "</div>";
				echo "<div class='cara detras'>";
					echo "<img src='Images/$RandomImgServer' width='150' height='150'>";
				echo "</div>";
			echo "</div>";
		echo "</div>";
    	echo "<table class='table' id='Cartas'>";
    	$ImagenesUtilizadas = [];
      	for ($i=0; $i < 3; $i++) {
        	echo "<tr>";
        	for ($x=0; $x < 4; $x++) {
         		$RandomTablero = array_rand($ArrayImagenes);
				if(in_array($RandomTablero, $ImagenesUtilizadas)){
            		$x-=1;
   				}else{
    				array_push($ImagenesUtilizadas, $RandomTablero);
    				echo "<td>";
					echo "<div class='carta-box'>";
						echo "<div class='carta'>";
							echo "<div class='cara'>";
								echo "<img src='Images/$RandomTablero' width='150' height='150'>";
							echo "</div>";
							echo "<div class='cara detras'>";
								echo "<img src='ParteTrasera.png' width='150' height='150'>";
							echo "</div>";
						echo "</div>";
					echo "</td>";
    				}
				}
        	echo "</tr>";
      	}
      	echo "</table></div>";
      	echo "<select name='Combo1' size=1 onChange='ComboBox1Selec();'>";
		echo "<option id='Pelo1' selected='true'>¿De que color tiene el pelo?</option>";
		echo "<option id='Pelo2' class='Pelo'>¿Tiene el pelo moreno?</option>";
		echo "<option id='Pelo3' class='Pelo'>¿Tiene el pelo rubio?</option>";
		echo "<option id='Pelo4' class='Pelo'>¿Tiene el pelo castaño?</option>";
		echo "</select>";
		echo "<select name='Combo2' size=1 onChange='ComboBox2Selec();'>";
		echo "<option id='Gafas1' selected='true'>¿Lleva gafas o no?</option>";
		echo "<option id='Gafas2' class='Gafas'>¿Lleva gafas?</option>";
		echo "<option id='Gafas3' class='Gafas'>¿No lleva gafas?</option>";
		echo "</select>";
		echo "<select name='Combo3' size=1 onChange='ComboBox3Selec();'>";
		echo "<option id='Sexo1' selected='true'>¿De que sexo es?</option>";
		echo "<option id='Sexo2' class='Sexo'>¿Es hombre?</option>";
		echo "<option id='Sexo3' class='Sexo'>¿Es mujer?</option>";
		echo "</select>";
		echo "<button type='button' id='preguntar' onclick='preguntaComboBox()'>Preguntar</button>";
		echo "<p id='mensaje'></p>"
	?>
</body>
</html>


