let botonNuevoJuego = document.getElementById('boton-juego-nuevo');

botonNuevoJuego.addEventListener('click', function(){    
    
    resetJuego();
    console.log(permitirJugar);
    if(permitirJugar === false){
        permitirJuego();
    }

    ahorcado();
});

let botonDesistir = document.getElementById('boton-juego-desistir');

botonDesistir.addEventListener('click', function(){
    console.log('click en desistir')
    deshabilitarTeclas();
    
    let arrSecreta = palabraSecreta.split('');
    let arrCorrecta = palabraCorrecta.split('');
    
    let dif = arrSecreta.filter(el => !arrCorrecta.includes(el));
   
    dif.forEach(function(el){
        
            if(palabraSecreta.includes(el)){
                adicionarLetraCorrecta(palabraSecreta.indexOf(el));
                for(let i = 0; i < palabraSecreta.length; i++){
                    if(palabraSecreta[i] === el){
                    escribirLetraCorrecta(i)
                    }
                }
                        
            } 
        
    })
})


