
let botonAgregarPalabra = document.getElementById('boton-agregar-palabra');

botonAgregarPalabra.addEventListener('click', function(){
    console.log('agregar palabra');
    let divAgregar = document.querySelector('#div-ingreso-palabra-secreta');
    hacerVisible(divAgregar);
    let divBotonInicio = document.querySelector('.botones-inicio');
    hacerInvisible(divBotonInicio);
    let inputPalabraSecreta = document.getElementById('input-palabra-secreta');
    inputPalabraSecreta.focus();
    let divBotonAgregarPalabraInicio = this.parentNode;
    hacerInvisible(divBotonAgregarPalabraInicio);
    hacerVisible(document.querySelector('.botones-juego'));
});

function hacerVisible(elemento){
    elemento.classList.remove('invisible');
};

function hacerInvisible(elemento){
    elemento.classList.add('invisible');
}