
let botonAgregarYEmpezar = document.getElementById("boton-juego-aceptar");

botonAgregarYEmpezar.addEventListener('click', () => {

    let input = document.getElementById("input-palabra-secreta");
    let palabra = input.value;
    if(!palabra){
        return
    } else {
        let palabraNueva = palabra.toUpperCase();
        console.log(palabraNueva)
        let regExpre = /[a-z]+/ig
        let evitar = /[0-9]+/g
        let pruebaPalabra = regExpre.test(palabraNueva)
        let pruebaNumeros = evitar.test(palabraNueva);
        console.log(pruebaPalabra)
        console.log(pruebaNumeros)
        if(pruebaNumeros === false && pruebaPalabra === true){
            palabras.push(palabraNueva);
            console.log(palabras)
        } else {
            console.log('Está mal')
            console.log(palabras)
            return
        }

        
    }
    
    

})