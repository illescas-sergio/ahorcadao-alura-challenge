let areaDibujo = document.getElementById('areaDibujo');

let canvas = document.getElementById('canvas');

let tablero = canvas.getContext("2d");

let palabras = ['ALURA', 'ORACLE', 'JAVASCRIPT', 'HTML', 'CSS', 'AHORCADO'];

let palabraSecreta = "";

let letras = [];

let palabraCorrecta = ""

let errores = 8;


function seleccionarPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log('la palabra secreta escogida es: ' + palabra);
    return palabraSecreta
}

function dibujarLineas(){
  
    tablero.lineWidth = 6;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    let ancho = (canvas.width/2)/palabraSecreta.length;

    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(345+(ancho*i), 640);
        tablero.lineTo(395+(ancho*i), 640);
    }
    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){

    tablero.font = "bold 52px Inter"
    tablero.lineWidth = 6;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";

    let ancho = 600/palabraSecreta.length;

    tablero.fillText(palabraSecreta[index], 350+(ancho*index), 620)
}

function escribirLetraIncorrecta(letra, errores){

    tablero.font = "bold 40px Inter"
    tablero.lineWidth = 6;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";

    tablero.fillText(letra, 380+(40*(10-errores)), 710, 40)
}

function verificarLetraIngresada(key){

    if(key.charCodeAt() >= 97 && key.charCodeAt() <= 122 || key.charCodeAt() === 209 || key.charCodeAt() === 241){
        if(letras.length < 1 || letras.indexOf(key) < 0){
            letras.push(key);
            return false
        } else {
            letras.push(key);
            return true
        }
    } else {
       let span = document.querySelector('#span');
       span.classList.remove('invisible');
       setTimeout(function(){
        span.classList.add('invisible')
       }, 1000)
    }    
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
    console.log(palabraCorrecta)
}

function adicionarLetraIncorrecta(letter){
   if(palabraSecreta.indexOf(letter) <= 0 ){
    errores -= 1;
    dibuja(errores);

   }
}




