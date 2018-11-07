<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
    <link rel="icon" type="image/png" href="Images/Favicon.png">
	<title>¿Quién es quién?</title>
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<script type="text/javascript" defer src="scripts.js"></script>
</head>
<body>
	
    <!-- CORRECIÓN ERRORES -->
    <?php
        session_start();
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
        
    ?>
    <!---------------------------------------->
    
    <!-- DIV DIFICULTAD -->
    <divDificultad>
        <?php
            echo "Dificultad:<br>";
            echo "<select id='comboNivel' name='ComboNivel' onChange='ComboLevelSelec();'>";
            echo "<option id='niveDefault' value=0>DEFAULT</option>";
            echo "<option id='easy' value='easy'>EASY</option>";
            echo "<option id='veryEasy' value='veryEasy'>VERY EASY</option>";
            echo "</select>";
        ?>
    </divDificultad>
    <!---------------------------------------->
    
    <!-- CARTA DEL SERVIDOR -->
    <divCartaServidor>
        <?php
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
            echo "<div class='flip-card' id='cartaServer'>";
                echo "<div class='front-face image'>";
                    echo "<img src='ParteTrasera.png'>";
                echo "</div>";
                echo "<div class='back-face'>";
                    echo '<img id="ImagenServer" src="Images/'.$Array[$RandomServer][0].'" ulleres="'.$Array[$RandomServer][3].'" cabell="'.$Array[$RandomServer][5].'" sexe="'.$Array[$RandomServer][7].'">';
                echo "</div>";
            echo "</div>";
        ?>
    </divCartaServidor>
    <!---------------------------------------->
    
    <!-- TABLERO -->
    <divTablero>
    <?php
        echo "<table class='table' id='Cartas' name='Cartas'>";
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
                                echo '<img class="cartasTablero" src="Images/'.$Array[$Random][0].'" ulleres="'.$Array[$Random][3].'" cabell="'.$Array[$Random][5].'" sexe="'.$Array[$Random][7].'">';
                            echo "</div>";
                            echo "<div class='back-face'id='back-faceMF'>";
                                echo "<img src='ParteTrasera.png'>";
                            echo "</div>";
                        echo "</div>";
                    echo "</td>";
                    }
                }
            echo "</tr>";
        }
        echo "</table>";
    ?>
    </divTablero>
    <?php 
        $_SESSION["tablero"] = "";
        echo $_SESSION["tablero"];
     ?>
    <!---------------------------------------->
    
    <!-- COMBOBOXES -->
    <divCombos> 
        <?php
            echo "<p id='contador'>Contador de preguntas: 0</p>";
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
            echo "<select id='combo' name='Combo' size=1 onChange='ComboBoxSelec();'>";
            echo "<option id='default' value=0>PREGUNTAS</option>";
            $iValue=1;
            for($c=0; $c < 3; $c++){
                if($c<2){
                echo '<option id="'.$ArrayCombo[$c][0].'" class="'.$ArrayCombo[$c][0].'" value="'.$ArrayCombo[$c][3].'">'.$ArrayCombo[$c][2].' '.$ArrayCombo[$c][3].'</option>';
                }
                if($c==1){
                    $pelos=5;
                    $idCabell=2;
                    $iValue+=1;
                    for($z=0; $z < 2; $z++){
                    echo '<option id="'.$ArrayCombo[$c][0].''.$idCabell.'" class="'.$ArrayCombo[$c][0].'" value="'.$ArrayCombo[$c][$pelos+1].'">'.$ArrayCombo[$c][$pelos].' '.$ArrayCombo[$c][$pelos+1].'</option>';
                    $pelos+=3;
                    $iValue+=1;
                    $idCabell+=1;
                    }
                }
                if($c==2){
                    $iValue+=1;
                    $sexos=2;
                    $idSexo=1;
                    for($y=0; $y < 2; $y++){
                    echo '<option id="'.$ArrayCombo[$c][0].''.$idSexo.'" class="'.$ArrayCombo[$c][0].'" value="'.$ArrayCombo[$c][$sexos+1].'">'.$ArrayCombo[$c][$sexos].' '.$ArrayCombo[$c][$sexos+1].'</option>';
                    $sexos+=3;
                    $iValue+=1;
                    $idSexo+=1;
                    }
                }
            }
            echo "</select>";
            echo "<button type='button' id='preguntar' onclick='preguntaComboBox(mensaje);'>Preguntar</button>";
            echo "<p id='mensaje' class='respuesta'></p>";
        ?>
    </divCombos>
</body>
</html>