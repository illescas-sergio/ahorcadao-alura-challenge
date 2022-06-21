let botonIniciar = document.getElementById('iniciar-juego');

botonIniciar.addEventListener('click', function(){
    
    let head = document.getElementById('header');
    head.classList.add('header-playing');
    head.classList.remove('.header')

    hacerInvisible(this.parentNode);

    let area = document.querySelector('.area-dibujo');    
    hacerVisible(area);    
    
    let agregarPalabra = document.querySelector('.agregar-palabra-inicio');
    hacerInvisible(agregarPalabra);
    hacerVisible(document.querySelector('.botones-juego-desarrollo'));

    permitirJuego();

    ahorcado()    
});


let botonAgregarPalabra = document.getElementById('boton-agregar-palabra');

let inputPalabraSecreta = document.getElementById('input-palabra-secreta');

botonAgregarPalabra.addEventListener('click', function(){
    
    let divAgregar = document.querySelector('#div-ingreso-palabra-secreta');
    hacerVisible(divAgregar);

    let divBotonInicio = document.querySelector('.botones-inicio');
    hacerInvisible(divBotonInicio);
    
    
    inputPalabraSecreta.focus();

    let divBotonAgregarPalabraInicio = this.parentNode;
    hacerInvisible(divBotonAgregarPalabraInicio);
    
    hacerVisible(document.querySelector('.botones-juego'));
});




