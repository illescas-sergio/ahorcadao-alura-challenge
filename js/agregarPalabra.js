
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


