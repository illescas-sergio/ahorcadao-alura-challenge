let head = document.getElementById('header');
let area = document.querySelector('.area-dibujo'); 
let agregarPalabra = document.querySelector('.agregar-palabra-inicio');  
let botonesJuegoDesarrollo = document.querySelector('.botones-juego-desarrollo');
let botonIniciar = document.getElementById('iniciar-juego');

botonIniciar.addEventListener('click', function(){
    
    head.classList.add('header-playing');
    head.classList.remove('.header')

    hacerInvisible(this.parentNode);
    hacerVisible(area);    
    
    hacerInvisible(agregarPalabra);
    hacerVisible(botonesJuegoDesarrollo);

    permitirJuego();

    ahorcado()    
});


let divBotonInicio = document.querySelector('.botones-inicio');

let inputPalabraSecreta = document.getElementById('input-palabra-secreta');

let divAgregar = document.querySelector('#div-ingreso-palabra-secreta');

let botonesJuego = document.querySelector('.botones-juego')

let botonAgregarPalabra = document.getElementById('boton-agregar-palabra');

botonAgregarPalabra.addEventListener('click', function(){
    
    hacerVisible(divAgregar);
    hacerInvisible(divBotonInicio);
    
    inputPalabraSecreta.focus();

    let divBotonAgregarPalabraInicio = this.parentNode;
    hacerInvisible(divBotonAgregarPalabraInicio);
    
    hacerVisible(botonesJuego);
});




