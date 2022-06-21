let botonNuevoJuego = document.getElementById('boton-juego-nuevo');

botonNuevoJuego.addEventListener('click', function(){    
    
    resetJuego();
    console.log(permitirJugar);
    if(permitirJugar === false){
        permitirJuego();
    }

    ahorcado();
})


