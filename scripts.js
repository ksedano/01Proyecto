document.getElementById("preguntar").disabled=true;

//FUNCION SELEC COMBOBOX

var valuePelo = document.getElementById('Pelo1').value;
var valueGafas = document.getElementById('Gafas1').value;
var valueSexo = document.getElementById('Sexo1').value;

function ComboBoxSelec(){
	if(valuePelo!="null" || valueGafas!="null" || valueSexo!="null"){
		document.getElementById("preguntar").disabled=false;
	}
}

//FUNCION PREGUNTA COMBOBOX
function preguntaComboBox(){
	if(valuePelo && valueGafas!="null" || valueGafas && valueSexo!="null" || valueSexo && valuePelo!="null"){
		document.getElementById("mensaje").innerHTML = "Error, has seleccionado dos preguntas o mas a la vez.";
	}
}

//GIRAR CARTA
function girarCarta(card){
	if(card.className == 'flip-card'){
		card.classList.toggle('is-flipped');
	}
}