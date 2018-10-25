//FUNCION SELEC COMBOBOX

var valuePelo = document.getElementById("Pelo");
var valueGafas = document.getElementById("Gafas");
var valueSexo = document.getElementById("Sexo");

//OCULTAR BOTON EASY

function ComboBoxSelec(){
	document.getElementById("BotonEasy").style.display='none';
}

//DESHABILITAR BOTON EASY

function DeshabilitarEasy(){
			document.getElementById("BotonEasy").disabled=true;

}

//PREGUNTA Y VUELVE A PREGUNTAR	
	var pregunta=0;
	var cartanogirada=0;


function PreguntaSeguro(){
	if(pregunta==1 && cartanogirada==count){
		document.getElementById("mensaje").innerHTML = "¿Estas Seguro que no quieres girar una carta?";
	}else if(pregunta>=1 && cartanogirada==count){
		//esto me permite que no se repita
	}else{
		pregunta=0;
	}
	cartanogirada=count;
	pregunta+=1;
}	

//FUNCION PREGUNTA COMBOBOX
var countPreguntas=0;
var contador=document.getElementById("contador");
var imagenServer=document.getElementById("ImagenServer");

function preguntaComboBox(){
	if(valuePelo.value==0 && valueGafas.value==0 && valueSexo.value==0){
		document.getElementById("mensaje").innerText = "Selecciona una pregunta.";
	}if(valuePelo.value!=0 && valueGafas.value!=0 || valueGafas.value!=0 && valueSexo.value!=0 ||
		valueSexo.value!=0 && valuePelo.value!=0){
		document.getElementById("mensaje").innerText = "No puedes seleccionar mas de una pregunta a la vez.";
		valuePelo.value=0;
		valueGafas.value=0;
		valueSexo.value=0;
	}if(valuePelo.value!=0 && valueGafas.value==0 && valueSexo.value==0){
		contador.innerText = "Contador de preguntas: "+(countPreguntas+=1);
		if(valuePelo.value=="moreno"){
			if(imagenServer.getAttribute("cabell")=="moreno"){
				document.getElementById("mensaje").innerText = "Si, es moreno.";
			}else if(imagenServer.getAttribute("cabell")!="moreno"){
				document.getElementById("mensaje").innerText = "No, no es moreno.";
			}
		}else if(valuePelo.value=="rubio"){
			if(imagenServer.getAttribute("cabell")=="ros"){
				document.getElementById("mensaje").innerText = "Si, es rubio";
			}else if(imagenServer.getAttribute("cabell")!="ros"){
				document.getElementById("mensaje").innerText = "No, no es rubio.";
			}
		}else if(valuePelo.value=="castaño"){
			if(imagenServer.getAttribute("cabell")=="castany"){
				document.getElementById("mensaje").innerText = "Si, es castaño.";
			}else if(imagenServer.getAttribute("cabell")!="castany"){
				document.getElementById("mensaje").innerText = "No, no es castaño.";
			}
		}valuePelo.value=0;
	}if(valueGafas.value!=0 && valuePelo.value==0 && valueSexo.value==0){
		contador.innerText = "Contador de preguntas: "+(countPreguntas+=1);
		if(valueGafas.value=="gafas"){
			if(imagenServer.getAttribute("ulleres")=="si"){
				document.getElementById("mensaje").innerText = "Si, lleva gafas.";
			}else if(imagenServer.getAttribute("ulleres")!="si"){
				document.getElementById("mensaje").innerText = "No, no lleva gafas.";
			}
		}else if(valueGafas.value=="nogafas"){
			if(imagenServer.getAttribute("ulleres")=="no"){
				document.getElementById("mensaje").innerText = "No, no lleva gafas.";
			}else if(imagenServer.getAttribute("ulleres")!="no"){
				document.getElementById("mensaje").innerText = "Si, lleva gafas.";
			}
		}valueGafas.value=0;
	}if(valueSexo.value!=0 && valuePelo.value==0 && valueGafas.value==0){
		contador.innerText = "Contador de preguntas: "+(countPreguntas+=1);
		if(valueSexo.value=="hombre"){
			if(imagenServer.getAttribute("sexe")=="home\n"){
				document.getElementById("mensaje").innerText = "Si, es un hombre";
			}else if(imagenServer.getAttribute("sexe")!="home\n"){
				document.getElementById("mensaje").innerText = "No, no es un hombre.";
			}
		}else if(valueSexo.value=="mujer"){
			if(imagenServer.getAttribute("sexe")=="dona\n"){
				document.getElementById("mensaje").innerText = "Si, es una mujer.";
			}else if(imagenServer.getAttribute("sexe")!="dona\n"){
				document.getElementById("mensaje").innerText = "No, no es una mujer.";
			}
		}valueSexo.value=0;
	}
}

//ALERT REGISTRAR RECORD
function winner() {
    var registre = confirm("¡Has ganado! ¿Deseas registrar tu record?");
    if(registre == true){
        var person = prompt("Introduce tu nombre de usuario:\n(Mín. 6 caracteres)");
        if(person == null || person == "" || person.length < 6){
            alert("Por favor, introduce un nombre de usuario válido.");
            winner();
        }else{
            alert("¡Enhorabuena "+person+"! Gracias por jugar.");
		}
    }else{
        alert("Lo has hecho muy bien. ENHORABUENA!");
    }
}

//ALERTA HAS PERDIDO
function loser() {
    var perdedor = confirm("Has perdido...");
}

//GIRAR CARTAS

var count=0;
var cartaServidor = imagenServer.getAttribute("src");
var arrayElegidas = [];

function girarCarta(card, cardserver){
	count+=1;
	if(card.className == 'flip-card'){
		card.classList.toggle('is-flipped');
		var sonido = new Audio("sonido.mp3");
  		sonido.play();
  		var cartasrc = card.childNodes[0].firstChild.getAttribute("src");
  		arrayElegidas.push(cartasrc);
		if(count==11){
			if(cardserver.className == 'flip-card'){
				cardserver.classList.toggle('is-flipped');
				if(arrayElegidas.includes(cartaServidor)){
					setTimeout("loser()",2000);
				}else{
					setTimeout("winner()",2000);
				}
			}
		}
	}
}
/*
//FUEGOS ARTIFICIALES
"use strict";
let canvas, width, height, ctx;
let fireworks = [];
let particles = [];
function setup() {
	canvas = document.getElementById("canvas");
	setSize(canvas);
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, width, height);
	fireworks.push(new Firework(Math.random()*(width-200)+100));
	window.addEventListener("resize",windowResized);
	document.addEventListener("click",onClick);
}
setTimeout(setup,1);
function loop(){
	ctx.font = "bold 50px Antiqua";
	ctx.fillText("¡¡¡HAS GANADO!!!",700,400);
	ctx.globalAlpha = 0.1;
	ctx.fillStyle = "#000001";
	ctx.fillRect(0, 0, width, height);
	ctx.globalAlpha = 1;
	for(let i=0; i<fireworks.length; i++){
		let done = fireworks[i].update();
		fireworks[i].draw();
		if(done) fireworks.splice(i, 1);
	}
	for(let i=0; i<particles.length; i++){
		particles[i].update();
		particles[i].draw();
		if(particles[i].lifetime>80) particles.splice(i,1);
	}
	if(Math.random()<1/60) fireworks.push(new Firework(Math.random()*(width-200)+100));
}
//setInterval(loop, 1/60);
setInterval(loop, 100/60);
class Particle{
	constructor(x, y, col){
		this.x = x;
		this.y = y;
		this.col = col;
		this.vel = randomVec(6);
		this.lifetime = 0;
	}
	update(){
		this.x += this.vel.x;
		this.y += this.vel.y;
		this.vel.y += 0.02;
		this.vel.x *= 0.99;
		this.vel.y *= 0.99;
		this.lifetime++;
	}
	draw(){
		ctx.globalAlpha = Math.max(1-this.lifetime/80, 0);
		ctx.fillStyle = this.col;
		ctx.fillRect(this.x, this.y, 3, 3);
	}
}
class Firework{
	constructor(x){
		this.x = x;
		this.y = height;
		this.isBlown = false;
		this.col = randomCol();
	}
	update(){
		this.y -= 2;
		if(this.y < 350-Math.sqrt(Math.random()*500)*40){
			this.isBlown = true;
			for(let i=0; i<60; i++){
				particles.push(new Particle(this.x, this.y, this.col))
			}
		}
		return this.isBlown;
	}
	draw(){
		ctx.globalAlpha = 1;
		ctx.fillStyle = this.col;
		ctx.fillRect(this.x, this.y, 2, 2);
	}
}
function randomCol(){
	var letter = '0123456789ABCDEF';
	var nums = [];
	for(var i=0; i<3; i++){
		nums[i] = Math.floor(Math.random()*256);
	}
	let brightest = 0;
	for(var i=0; i<3; i++){
		if(brightest<nums[i]) brightest = nums[i];
	}
	brightest /=255;
	for(var i=0; i<3; i++){
		nums[i] /= brightest;
	}
	let color = "#";
	for(var i=0; i<3; i++){
		color += letter[Math.floor(nums[i]/16)];
		color += letter[Math.floor(nums[i]%16)];
	}
	return color;
}
function randomVec(max){
	let dir = Math.random()*Math.PI*2;
	let spd = Math.random()*max;
	return{x: Math.cos(dir)*spd, y: Math.sin(dir)*spd};
}
function setSize(canv){
	canv.style.width = (innerWidth) + "px";
	canv.style.height = (innerHeight) + "px";
	width = innerWidth;
	height = innerHeight;
	canv.width = innerWidth*window.devicePixelRatio;
	canv.height = innerHeight*window.devicePixelRatio;
	canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
}
function onClick(e){
	fireworks.push(new Firework(e.clientX));
}
function windowResized(){
	setSize(canvas);
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, width, height);
}
*/