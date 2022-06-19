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
        if(errores === 8){
            let span = document.querySelector('#span');
            span.classList.remove('invisible');
            setTimeout(function(){
                span.classList.add('invisible')
            }, 1000)
        }
        if(errores <= 7){
            let span = document.querySelector('#span');
            span.classList.add('desplazado');
            span.classList.remove('invisible');
            setTimeout(function(){
                span.classList.add('invisible');
                span.classList.remove('desplazado');
            }, 1000)
        }

       
    }    
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
    console.log(palabraCorrecta)
}

function adicionarLetraIncorrecta(letter){
   if(palabraSecreta.indexOf(letter) <= 0 ){
    errores -= 1;
    if(errores > 0){
        dibuja(errores);
    } else if(errores === 0){
        dibuja(errores);
        hasPerdido(); 
    }

   }
}

function hasPerdido(){
    let cartel = document.querySelector('#derrota');
    cartel.classList.remove('invisible');
    deshabilitarTeclas();
    permitirJuego()
}

function verificarGanador(){
    let secreta = palabraSecreta.split('');
    let correcta = palabraCorrecta.split('');
    
    let setSecreta = new Set(secreta);
    let arraySecreta = [...setSecreta];

    if(correcta.length === arraySecreta.length){
        let banner = document.getElementById('victoria');
        banner.classList.remove('invisible');
        isAlive();
        deshabilitarTeclas()
        permitirJuego();
    }
}

function permitirJuego(){
    if(permitirJugar === false){
        permitirJugar = true;
        
    } else {
        permitirJugar = false;
    }
}

function deshabilitarTeclas(){
    document.onkeydown = false;
}

function ahorcado(){
    if(permitirJugar === false){
        document.onkeydown = null;
    } else {        
    
        dibujarLineas(seleccionarPalabraSecreta());
                
            document.onkeydown = (e) => {
                
                let letra = e.key.toUpperCase();
            
                if(!verificarLetraIngresada(e.key)){
                    if(palabraSecreta.includes(letra)){
                        adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
                        for(let i = 0; i < palabraSecreta.length; i++){
                            if(palabraSecreta[i] === letra){
                                escribirLetraCorrecta(i)
                            }
                        }
                            
                    } else {
                        if(!verificarLetraIngresada(e.key)) return
                            adicionarLetraIncorrecta(letra);
                            escribirLetraIncorrecta(letra, errores)
                        }
            
                        verificarGanador();
                    }
                };
    }
}