let botonIniciar = document.getElementById('iniciar-juego');

botonIniciar.addEventListener('click', function(){
    console.log('Iniciar juego');
    
    let head = document.querySelector('.header');
    head.classList.add('header-playing');

    let area = document.querySelector('.area-dibujo');    
    hacerVisible(area);
        
    hacerInvisible(this.parentNode);
    
    let agregarPalabra = document.querySelector('.agregar-palabra-inicio');
    
    hacerInvisible(agregarPalabra);
    
    hacerVisible(document.querySelector('.botones-juego-desarrollo'));
});

