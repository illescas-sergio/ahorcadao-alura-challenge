let botonCancelar = document.getElementById('boton-juego-cancelar');

botonCancelar.addEventListener('click', function(){

    let divAgregar = document.querySelector('#div-ingreso-palabra-secreta');
    hacerInvisible(divAgregar);

    let divBotonInicio = document.querySelector('.botones-inicio');
    hacerVisible(divBotonInicio);

    let botonAgregarPalabra = document.querySelector(".agregar-palabra-inicio");
    hacerVisible(botonAgregarPalabra);
    
    hacerInvisible(document.querySelector('.botones-juego'));

    inputPalabraSecreta.value = "";
});

