//FUNCION SELEC COMBOBOX

var valuePelo = document.getElementById("Pelo");
var valueGafas = document.getElementById("Gafas");
var valueSexo = document.getElementById("Sexo");


//FUNCION PREGUNTA COMBOBOX
function preguntaComboBox(){
	if(valuePelo.value==0 && valueGafas.value==0 && valueSexo.value==0){
		document.getElementById("mensaje").innerText = "Selecciona una pregunta.";
	}if(valuePelo.value!=0 && valueGafas.value!=0 || valueGafas.value!=0 && valueSexo.value!=0 ||
		valueSexo.value!=0 && valuePelo.value!=0){
		document.getElementById("mensaje").innerText = "No puedes seleccionar mas de una pregunta a la vez.";
		valuePelo.value=0;
		valueGafas.value=0;
		valueSexo.value=0;
	}
}

//GIRAR CARTAS
contador=0;

function girarCarta(card, cardserver){
	contador++;
	if(card.className == 'flip-card'){
		card.classList.toggle('is-flipped');
		if(contador==11){
			if(cardserver.className == 'flip-card'){
				cardserver.classList.toggle('is-flipped');
			}
		}
	}
}