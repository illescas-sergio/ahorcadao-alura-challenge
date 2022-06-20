let botonIniciar = document.getElementById('iniciar-juego');

botonIniciar.addEventListener('click', function(){
    
    let head = document.querySelector('.header');
    head.classList.add('header-playing');

    hacerInvisible(this.parentNode);

    let area = document.querySelector('.area-dibujo');    
    hacerVisible(area);    
    
    let agregarPalabra = document.querySelector('.agregar-palabra-inicio');
    hacerInvisible(agregarPalabra);
    hacerVisible(document.querySelector('.botones-juego-desarrollo'));

    permitirJuego();

    ahorcado()
    
});



