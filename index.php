<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>¿Quién es quién?</title>
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<script type="text/javascript" defer src="scripts.js"></script>
</head>
<body>

	<form>
		<p><input type="button" value="EASY " id="BotonEasy" onclick="DeshabilitarEasy()" /></p>
	</form>
	<?php
		/*COMPROBAMOS QUE NO HAYAN CARACTERISTICAS REPETIDAS*/
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
		/*COMPROBAMOS QUE NO HAYAN NOMBRES DE FICHEROS REPETIDOS*/
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
		//La Array con todos los elementos y caracteristicas.
		$Array = array();
		// Bucle / Inserción de datos Array
		foreach($file as $Linea) {
		$Clean = str_replace(":", "", $Linea);
		$Clean2 = str_replace(",", "", $Clean);
		$Clean3 = explode(" ", $Clean2);
		array_push($Array, $Clean3);
		}
		$RandomServer = random_int(0, 11);
		echo "<div id='tableroCartas'>";
		echo "<div class='flip-card' id='cartaServer'>";
			echo "<div class='front-face image'>";
				echo "<img src='ParteTrasera.png' width='150' height='150'>";
			echo "</div>";
			echo "<div class='back-face'>";
				echo '<img id="ImagenServer" src="Images/'.$Array[$RandomServer][0].'" ulleres="'.$Array[$RandomServer][3].'" cabell="'.$Array[$RandomServer][5].'" sexe="'.$Array[$RandomServer][7].'" width="150" height="150">';
			echo "</div>";
		echo "</div>";
    	echo "<table class='table' id='Cartas' background='tapete.jpg'>";
    	$ImagenesUtilizadas = [];
      	for ($i=0; $i < 4; $i++) {
        	echo "<tr>";
        	for ($x=0; $x < 3; $x++) {
         		$Random = random_int(0, 11);
       			if(in_array($Random, $ImagenesUtilizadas)){
            		$x-=1;
   				}else{
    				array_push($ImagenesUtilizadas, $Random);
					echo "<td>";
						echo "<div class='flip-card' onclick='girarCarta(this, cartaServer);'>";
							echo "<div class='front-face image'>";
								echo '<img src="Images/'.$Array[$Random][0].'" ulleres="'.$Array[$Random][3].'" cabell="'.$Array[$Random][5].'" sexe="'.$Array[$Random][7].'" width="150" height="150">';
							echo "</div>";
							echo "<div class='back-face'>";
								echo "<img src='ParteTrasera.png' width='150' height='150'>";
							echo "</div>";
						echo "</div>";
					echo "</td>";
    				}
				}
        	echo "</tr>";
      	}
      	echo "</table></div>";
      	echo "<select id='Pelo' name='Combo1' size=1 onChange='ComboBoxSelec();'>";
		echo "<option id='Pelo1' value=0>PELO</option>";
		echo "<option id='Pelo2' class='Pelo' value='moreno'>¿Tiene el pelo moreno?</option>";
		echo "<option id='Pelo3' class='Pelo' value='rubio'>¿Tiene el pelo rubio?</option>";
		echo "<option id='Pelo4' class='Pelo' value='castaño'>¿Tiene el pelo castaño?</option>";
		echo "</select>";
		echo "<select id='Gafas' name='Combo2' size=1 onChange='ComboBoxSelec();'>";
		echo "<option id='Gafas1' value=0>GAFAS</option>";
		echo "<option id='Gafas2' class='Gafas' value='gafas'>¿Lleva gafas?</option>";
		echo "<option id='Gafas3' class='Gafas' value='nogafas'>¿No lleva gafas?</option>";
		echo "</select>";
		echo "<select id='Sexo' name='Combo3' size=1 onChange='ComboBoxSelec();'>";
		echo "<option id='Sexo1' value=0>SEXO</option>";
		echo "<option id='Sexo2' class='Sexo' value='hombre'>¿Es hombre?</option>";
		echo "<option id='Sexo3' class='Sexo' value='mujer'>¿Es mujer?</option>";
		echo "</select>";
		echo "<button type='button' id='preguntar' onclick='preguntaComboBox(); PreguntaSeguro();'>Preguntar</button>";
		echo "<p id='mensaje'></p><p id='contador'>Contador de preguntas:</p>";

		//Array con los datos del config
		$ArrayCombo = array();
		// Bucle / Inserción de datos ArrayCombo
		$config = file("config.txt");
		foreach($config as $Linea) {
		$Clean = str_replace(":", "", $Linea);
		$Clean2 = str_replace(",", "", $Clean);
		$Clean3 = explode(" ", $Clean2);
		array_push($ArrayCombo, $Clean3);
		}
		
	?>
</body>
</html>