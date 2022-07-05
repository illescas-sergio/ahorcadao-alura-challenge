let botonNuevoJuego = document.getElementById('boton-juego-nuevo');

botonNuevoJuego.addEventListener('click', function(){    
    
    hacerInvisible(botonVolver);
    hacerVisible(botonDesistir);
    resetJuego();
    console.log(permitirJugar);
    if(permitirJugar === false){
        permitirJuego();
    }

    ahorcado();
});

let botonVolver = document.getElementById('boton-juego-volver');

botonVolver.addEventListener('click', function(){

    head.classList.add('header');
    head.classList.remove('header-playing');
    hacerInvisible(area);
    hacerInvisible(this.parentNode);

    hacerVisible(botonIniciar.parentNode);
    hacerVisible(agregarPalabra);
    
})

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

    
    hacerVisible(botonVolver);
    hacerInvisible(botonDesistir);

})


