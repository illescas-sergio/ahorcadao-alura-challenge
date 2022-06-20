let botonAgregarYEmpezar = document.getElementById("boton-juego-aceptar");

botonAgregarYEmpezar.addEventListener('click', () => {

    let input = document.getElementById("input-palabra-secreta");
    let palabra = input.value;
    if(!palabra){

        let aviso = document.getElementById('cantidad-max'); 
            aviso.innerText = "Debes agregar una palabra o cancelar";
            aviso.style.color = "red"  
                     
            setTimeout(function(){
                aviso.innerText = "Recuerda: Solo letras";
                aviso.style.color = "";
            }, 1000)
        return
    } else {

        let palabraNueva = palabra.toUpperCase();
        
        let regExpre = /[a-z]+/ig
        let evitar = /[0-9]+/g
        let pruebaPalabra = regExpre.test(palabraNueva)
        let pruebaNumeros = evitar.test(palabraNueva);
       
        if(pruebaNumeros === false && pruebaPalabra === true){
            palabras.push(palabraNueva);

            let divAgregar = document.querySelector('#div-ingreso-palabra-secreta');
            hacerInvisible(divAgregar);

            hacerInvisible(document.querySelector('.botones-juego'))

            let area = document.querySelector('.area-dibujo');    
            hacerVisible(area);
            hacerVisible(document.querySelector('.botones-juego-desarrollo'));

            permitirJuego();
            ahorcado();

            console.log(palabras)
            
        } else {
            
            let aviso = document.getElementById('cantidad-max'); 
            aviso.innerText = "¡Solo letras!";
            aviso.style.color = "red"           
            setTimeout(function(){
                aviso.innerText = "Recuerda: Solo letras";
                aviso.style.color = "";
            }, 1000)
            
            return
        }   
    }
});


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

