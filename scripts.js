document.getElementById("preguntar").disabled=true;

//FUNCION COMBOBOX PELO
function ComboBox1Selec(){
	if(document.getElementById("Pelo2")||document.getElementById("Pelo3")||
	document.getElementById("Pelo4").selected==true){
		document.getElementById("preguntar").disabled=false;
	}if(document.getElementById("Pelo1").selected==true){
		document.getElementById("preguntar").disabled=true;
	}
}

//FUNCION COMBOBOX GAFAS
function ComboBox2Selec(){
	if(document.getElementById("Gafas2")||document.getElementById("Gafas3").selected==true){
		document.getElementById("preguntar").disabled=false;
	}if(document.getElementById("Gafas1").selected==true){
		document.getElementById("preguntar").disabled=true;
	}
}

//FUNCION COMBOBOX SEXO
function ComboBox3Selec(){
	if(document.getElementById("Sexo2")||document.getElementById("Sexo3").selected==true){
		document.getElementById("preguntar").disabled=false;
	}if(document.getElementById("Sexo1").selected==true){
		document.getElementById("preguntar").disabled=true;
	}
}

//FUNCION PREGUNTA COMBOBOX
function preguntaComboBox(){
	if(document.getElementByClassName("Pelo") && document.getElementByClassName("Gafas").selected==true){
		document.getElementById("mensaje").innerHTML = "Error";
	}
	if(document.getElementByClassName("Gafas") && document.getElementByClassName("Sexo").selected==true){
		document.getElementById("mensaje").innerHTML = "Error";
	}
	if(document.getElementByClassName("Sexo") && document.getElementByClassName("Pelo").selected==true){
		document.getElementById("mensaje").innerHTML = "Error";
	}
}

function girarCarta(card){
	if(card.className == 'flip-card'){
		card.classList.toggle('is-flipped');
	}
}