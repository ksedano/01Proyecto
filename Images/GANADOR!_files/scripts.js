//FUNCION SELEC COMBOBOX
var valueCombo = document.getElementById("combo");

//BOTON PREGUNTAR DESACTIVADO

var botonPreguntar = document.getElementById("preguntar");
botonPreguntar.disabled = true;

//HABILITAR BOTON PREGUNTAR

function ComboBoxSelec() {
    botonPreguntar.disabled = false;
    if (valueCombo.value == 0) {
        botonPreguntar.disabled = true;
    }
}

//PREGUNTA Y VUELVE A PREGUNTAR
var pregunta = 0;
var cartanogirada = 0;

function PreguntaSeguro() {
    if (pregunta == 1 && cartanogirada == count) {
        document.getElementById("mensaje").innerHTML = "¿Estas Seguro que no quieres girar una carta?";
    } else if (pregunta >= 1 && cartanogirada == count) {
        //esto me permite que no se repita
    } else {
        pregunta = 0;
    }
    cartanogirada = count;
    pregunta += 1;
}

//FUNCION PREGUNTA COMBOBOX
var countPreguntas = 0;
var contador = document.getElementById("contador");
var imagenServer = document.getElementById("ImagenServer");

function colorVerde(respuesta) {
    if (respuesta.className == 'respuesta' || respuesta.className == 'respuesta rojo') {
        respuesta.classList.remove('rojo');
        respuesta.classList.toggle('verde');
    }
}

function colorRojo(respuesta) {
    if (respuesta.className == 'respuesta' || respuesta.className == 'respuesta verde') {
        respuesta.classList.remove('verde');
        respuesta.classList.toggle('rojo');
    }
}

function preguntaComboBox(respuesta) {
    if (valueCombo.value != 0) {
        PreguntaSeguro();
        document.getElementById("comboNivel").disabled = true;
        contador.innerText = "Contador de preguntas: " + (countPreguntas += 1);
        if (valueCombo.value == "moreno?") {
            if (imagenServer.getAttribute("cabell") == "moreno") {
                colorVerde(respuesta);
                document.getElementById("mensaje").innerText = "Si, es moreno.";
            } else if (imagenServer.getAttribute("cabell") != "moreno") {
                colorRojo(respuesta);
                document.getElementById("mensaje").innerText = "No, no es moreno.";
            }
        } else if (valueCombo.value == "rubio?") {
            if (imagenServer.getAttribute("cabell") == "ros") {
                colorVerde(respuesta);
                document.getElementById("mensaje").innerText = "Si, es rubio";
            } else if (imagenServer.getAttribute("cabell") != "ros") {
                colorRojo(respuesta);
                document.getElementById("mensaje").innerText = "No, no es rubio.";
            }
        } else if (valueCombo.value == "castaño?") {
            if (imagenServer.getAttribute("cabell") == "castany") {
                colorVerde(respuesta);
                document.getElementById("mensaje").innerText = "Si, es castaño.";
            } else if (imagenServer.getAttribute("cabell") != "castany") {
                colorRojo(respuesta);
                document.getElementById("mensaje").innerText = "No, no es castaño.";
            }
        }
        if (valueCombo.value == "gafas?") {
            if (imagenServer.getAttribute("ulleres") == "si") {
                document.getElementById("mensaje").innerText = "Si, lleva gafas.";
            } else if (imagenServer.getAttribute("ulleres") != "si") {
                colorRojo(respuesta);
                document.getElementById("mensaje").innerText = "No, no lleva gafas.";
            }
        }
        if (valueCombo.value == "hombre?") {
            if (imagenServer.getAttribute("sexe") == "home\n") {
                colorVerde(respuesta);
                document.getElementById("mensaje").innerText = "Si, es un hombre";
            } else if (imagenServer.getAttribute("sexe") != "home\n") {
                colorRojo(respuesta);
                document.getElementById("mensaje").innerText = "No, no es un hombre.";
            }
        } else if (valueCombo.value == "mujer?") {
            if (imagenServer.getAttribute("sexe") == "dona\n") {
                colorVerde(respuesta);
                document.getElementById("mensaje").innerText = "Si, es una mujer.";
            } else if (imagenServer.getAttribute("sexe") != "dona\n") {
                colorRojo(respuesta);
                document.getElementById("mensaje").innerText = "No, no es una mujer.";
            }
        }
        valueCombo.value = 0;
        botonPreguntar.disabled = true;
    }
}

//ALERTA HAS PERDIDO

function winner() {

    window.open("Win.php", "_self");
}

function loser() {

    window.open("Lose.php", "_self");
}

//GIRAR CARTAS

var count = 0;
var cartaServidor = imagenServer.getAttribute("src");
var arrayElegidas = [];

function girarCarta(card, cardserver) {
    count += 1;
    if (card.className == 'flip-card') {
        card.classList.toggle('is-flipped');
        var sonido = new Audio("sonido.mp3");
        sonido.play();
        var cartasrc = card.childNodes[0].firstChild.getAttribute("src");
        arrayElegidas.push(cartasrc);
        if (count == 11) {
            if (cardserver.className == 'flip-card') {
                cardserver.classList.toggle('is-flipped');
                if (arrayElegidas.includes(cartaServidor)) {
                    alert("Lástima! Perdiste!");
                    setTimeout("loser()", 1000);
                } else {
                    alert("Enhorabuena campeón! Lo has hecho genial!");
                    setTimeout("winner()", 1000);
                }
            }
        }
    }
}

//JS WINNER

//FUEGOS ARTIFICIALES

let canvas, width, height, ctx;
let fireworks = [];
let particles = [];

function setup() {
    canvas = document.getElementById("canvas");
    setSize(canvas);
    ctx = canvas.getContext("2d");
    //ctx.fillStyle = "#000000";
    //ctx.fillRect(0, 0, width, height);
    fireworks.push(new Firework(Math.random() * (width - 200) + 100));
    //window.addEventListener("resize",windowResized);
    document.addEventListener("click", onClick);
}

setTimeout(setup, 1);

function loop() {
        ctx.font = "bold 50px Antiqua";
        ctx.fillText("¡¡¡HAS GANADO!!!", 700, 400);
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = "#000001";
        //ctx.fillRect(0, 0, width, height);   <----- DESCOMENTAR PARA QUE LOS PETARDOS SEAN COMO ANTES
        ctx.globalAlpha = 1;

        for (let i = 0; i < fireworks.length; i++) {
            let done = fireworks[i].update();
            fireworks[i].draw();
            if (done) fireworks.splice(i, 1);

        }

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].lifetime > 80) particles.splice(i, 1);
        }

        if (Math.random() < 1 / 60) fireworks.push(new Firework(Math.random() * (width - 200) + 100));
    }
    //setInterval(loop, 1/60);
setInterval(loop, 100 / 60);
class Particle {
    constructor(x, y, col) {
        this.x = x;
        this.y = y;
        this.col = col;
        this.vel = randomVec(6);
        this.lifetime = 0;
    }

    update() {
        this.x += this.vel.x;
        this.y += this.vel.y;
        this.vel.y += 0.02;
        this.vel.x *= 0.99;
        this.vel.y *= 0.99;
        this.lifetime++;
    }

    draw() {
        ctx.globalAlpha = Math.max(1 - this.lifetime / 80, 0);
        ctx.fillStyle = this.col;
        ctx.fillRect(this.x, this.y, 3, 3);
    }
}

class Firework {
    constructor(x) {
        this.x = x;
        this.y = height;
        this.isBlown = false;
        this.col = randomCol();
    }

    update() {
        this.y -= 2;
        if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
            this.isBlown = true;
            for (let i = 0; i < 60; i++) {
                particles.push(new Particle(this.x, this.y, this.col))
            }
        }
        return this.isBlown;
    }

    draw() {
        ctx.globalAlpha = 1;
        ctx.fillStyle = this.col;
        ctx.fillRect(this.x, this.y, 2, 2);
    }
}

function randomCol() {
    var letter = '0123456789ABCDEF';
    var nums = [];

    for (var i = 0; i < 3; i++) {
        nums[i] = Math.floor(Math.random() * 256);
    }

    let brightest = 0;
    for (var i = 0; i < 3; i++) {
        if (brightest < nums[i]) brightest = nums[i];
    }

    brightest /= 255;
    for (var i = 0; i < 3; i++) {
        nums[i] /= brightest;
    }

    let color = "#";
    for (var i = 0; i < 3; i++) {
        color += letter[Math.floor(nums[i] / 16)];
        color += letter[Math.floor(nums[i] % 16)];
    }
    return color;
}

function randomVec(max) {
    let dir = Math.random() * Math.PI * 2;
    let spd = Math.random() * max;
    return {
        x: Math.cos(dir) * spd,
        y: Math.sin(dir) * spd
    };
}

function setSize(canv) {
    canv.style.width = (innerWidth) + "px";
    canv.style.height = (innerHeight) + "px";
    width = innerWidth;
    height = innerHeight;

    canv.width = innerWidth * window.devicePixelRatio;
    canv.height = innerHeight * window.devicePixelRatio;
    canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
}

function onClick(e) {
    fireworks.push(new Firework(e.clientX));
}

function windowResized() {
    setSize(canvas);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
}

// GANADOR

function LlamarWinner() {

    setTimeout(Winner, 1000);

}

function Winner() {
    
    alert("Enhorabuena campeón! Lo has hecho genial!");
}

//JS LOSER

function LlamarLoser() {

    setTimeout(Loser, 1000);
}

function Loser() {

    alert("Buena suerte la próxima vez :P");
}