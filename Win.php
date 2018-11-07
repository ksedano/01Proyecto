<!DOCTYPE html>
<html>
<head>
	<link rel="icon" type="image/png" href="Images/Win.png">
	<title>GANADOR!</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body id="bodyWin">
	<script type="text/javascript">
		var sonidoGanador = new Audio("Winner.wav");
    	sonidoGanador.play();
	</script>
	<!--<canvas id="canvas" class="Fireworks"></canvas>-->
	<!-- DIV PREGUNTA -->
	<divWinInputAsk id="Div1" style="display: inline;">
		<label>¿Quieres guardar tu partida en el Ranking?</label>
		<br><br>
		<button id="Yes" onclick="Siguiente1()">Sí, por supuesto</button>
		<button id="No" onclick="Salir()">No, gracias</button>
		<!-- Script -->
			<script type="text/javascript">
				function Siguiente1() {
					document.getElementById("Div1").setAttribute("style","display: none;");
					document.getElementById("Div2").setAttribute("style","display: inline;");
				}
				function Salir() {
					alert("Gracias por participar!");
					document.getElementById("Div1").setAttribute("style","display: none;");
				}
			</script>
		<!------------>
    </divWinInputAsk>
	<!------------------>

	<!-- DIV RECORD -->
	<divWinInputRecord id="Div2" style="display: none;">
		<label>Introduce tu nombre:</label>
		<br><br>
        <form method="POST" action="HallOfFame.php">
		<input type="text" id="InputRecordText" name="RecordName">
		<br><br>
		<img id="Previous" src="Images/Cruz.png">
		<input type="image" id="Next" src="Images/Tick.png" onclick="Siguiente2()">
		<!-- Script -->
			<script type="text/javascript">
				function Siguiente2() {
					Player = document.getElementByName("RecordName").value;
					alert(Player);
                    document.getElementById("Div2").setAttribute("style","display: none;");
                    document.getElementById("Div3").setAttribute("style","display: inline;");
				}
                function Return() {
                    document.getElementById("Div2").setAttribute("style","display: none;");
                    document.getElementById("Div1").setAttribute("style","display: inline;");
                }
			</script>
        <!------------>
        </form>
	</divWinInputRecord>
</body>
</html>