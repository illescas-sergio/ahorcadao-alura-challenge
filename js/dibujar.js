let color = "#0A3871";
let linecap = "round";
let lineJoin = "round";
let lineWidth = 2;


function dibujarHorca(){
    tablero.lineWidth = lineWidth;
    tablero.linecap = linecap
    tablero.lineJoin = lineJoin;
    tablero.strokeStyle = color;
    tablero.beginPath();
    tablero.moveTo(450, 500);
    tablero.lineTo(750, 500);
    tablero.stroke();
    tablero.moveTo(525, 500);
    tablero.lineTo(525, 200);
    tablero.stroke();
    
    tablero.lineTo(650, 200);
    tablero.stroke();
    
    tablero.lineTo(650, 250);
    tablero.stroke();
    tablero.closePath();
}

function dibujarCabeza(){
    tablero.lineWidth = lineWidth;
    tablero.linecap = linecap;
    tablero.lineJoin = lineJoin;
    tablero.strokeStyle = color;
       
    tablero.moveTo(650, 250);
   
    tablero.beginPath();
    tablero.arc(650,275,25,0,2*Math.PI);
    tablero.stroke();
    tablero.closePath();    
}

function dibujarCuerpo(){
    tablero.lineWidth = lineWidth;
    tablero.linecap = linecap;
    tablero.lineJoin = lineJoin;
    tablero.strokeStyle = color;
    tablero.beginPath();
    tablero.moveTo(650,300);
    tablero.lineTo(650, 360);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoIzq(){
    tablero.lineWidth = lineWidth;
    tablero.linecap = linecap;
    tablero.lineJoin = lineJoin;
    tablero.strokeStyle = color;
    tablero.beginPath();
    tablero.moveTo(650,310);
    tablero.lineTo(610, 325);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoDer(){
    tablero.lineWidth = lineWidth;
    tablero.linecap = linecap;
    tablero.lineJoin = lineJoin;
    tablero.strokeStyle = color;
    tablero.beginPath();
    tablero.moveTo(650,310);
    tablero.lineTo(690, 325);
    tablero.stroke();
    tablero.closePath();
}

function dibujarPiernaIzq(){
    tablero.lineWidth = lineWidth;
    tablero.linecap = linecap;
    tablero.lineJoin = lineJoin;
    tablero.strokeStyle = color;
    tablero.beginPath();
    tablero.moveTo(650, 360);
    tablero.lineTo(635, 425);
    tablero.stroke();
    tablero.closePath();
}

function dibujarPiernaDer(){
    tablero.lineWidth = lineWidth;
    tablero.linecap = linecap;
    tablero.lineJoin = lineJoin;
    tablero.strokeStyle = color;
    tablero.beginPath();
    tablero.moveTo(650, 360);
    tablero.lineTo(665, 425);
    tablero.stroke();
    tablero.closePath();
}

function dibujoFinal(){
    tablero.lineWidth = lineWidth;
    tablero.linecap = linecap;
    tablero.lineJoin = lineJoin;
    tablero.strokeStyle = color;
    tablero.clearRect(600,250, 200, 200);

    //cabeza       
    tablero.moveTo(650, 250);
    tablero.beginPath();
    tablero.arc(650,275,25,0,2*Math.PI);
    tablero.stroke();
    tablero.closePath(); 
    //cuerpo 
    tablero.beginPath();
    tablero.moveTo(650,300);
    tablero.lineTo(650, 360);
    tablero.stroke();
    tablero.closePath();
    //brazoIzq
    tablero.beginPath();
    tablero.moveTo(650,310);
    tablero.lineTo(640, 350);
    tablero.stroke();
    tablero.closePath();
    //brazoDer
    tablero.beginPath();
    tablero.moveTo(650,310);
    tablero.lineTo(660, 350);
    tablero.stroke();
    tablero.closePath();
    //piernaIzq
    tablero.beginPath();
    tablero.moveTo(650, 360);
    tablero.lineTo(640, 440);
    tablero.stroke();
    tablero.closePath();
    //piernaDer
    tablero.beginPath();
    tablero.moveTo(650, 360);
    tablero.lineTo(660, 440);
    tablero.stroke();
    tablero.closePath();
    //ojoI
    tablero.beginPath();
    tablero.moveTo(638, 265);
    tablero.lineTo(646, 273);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(646, 265);
    tablero.lineTo(638, 273);
    tablero.stroke();
    tablero.closePath();
    //ojoD
    tablero.beginPath();
    tablero.moveTo(662, 265);
    tablero.lineTo(654, 273);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(654, 265);
    tablero.lineTo(662, 273);
    tablero.stroke();
    tablero.closePath();
    
}

function isAlive(){

    tablero.lineWidth = lineWidth;
    tablero.linecap = linecap;
    tablero.lineJoin = lineJoin;
    tablero.strokeStyle = color;
    tablero.clearRect(600,245, 200, 200);


    if(errores === 8){
        tablero.beginPath();
        tablero.moveTo(450, 500);
        tablero.lineTo(750, 500);
        tablero.stroke();
        tablero.closePath(); 
    }
    
    //cabeza       
    tablero.moveTo(650, 310);
    tablero.beginPath();
    tablero.arc(650,335,25,0,2*Math.PI);
    tablero.stroke();
    tablero.closePath(); 
    //cuerpo 
    tablero.beginPath();
    tablero.moveTo(650,360);
    tablero.lineTo(650, 420);
    tablero.stroke();
    tablero.closePath();
    //brazoIzq
    tablero.beginPath();
    tablero.moveTo(650,370);
    tablero.lineTo(600,340);
    tablero.stroke();
    tablero.closePath();
    //brazoDer
    tablero.beginPath();
    tablero.moveTo(650,370);
    tablero.lineTo(700, 340);
    tablero.stroke();
    tablero.closePath();
    //piernaIzq
    tablero.beginPath();
    tablero.moveTo(650, 420);
    tablero.lineTo(640, 500);
    tablero.stroke();
    tablero.closePath();
    //piernaDer
    tablero.beginPath();
    tablero.moveTo(650, 420);
    tablero.lineTo(660, 500);
    tablero.stroke();
    tablero.closePath();
    
}



function dibuja(num){

    if(num === 7){
        dibujarHorca();
    } else if(num === 6){
        dibujarCabeza();
    } else if(num === 5){
        console.log('te quedan 5')
        dibujarCuerpo();
    } else if(num === 4){
        console.log('te quedan 4')
        dibujarPiernaIzq();
    } else if(num === 3){
        console.log('te quedan 3')
        dibujarPiernaDer();
    } else if(num === 2){
        console.log('te quedan 2')
        dibujarBrazoIzq();
    } else if(num === 1){
        console.log('te quedan 1')
        dibujarBrazoDer();
    } else if(num === 0){
        dibujoFinal();
    }
    
}

function borrarCanvas(){
    tablero.clearRect(0, 0, 1200, 800);
}