function hola( nombre ) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log( `Hola soy ${nombre}.` )
            resolve( nombre )
        }, 1000)
    } )
}

function adios( nombre ) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log( `Hola soy ${nombre}.` )
            resolve( )
        }, 1000)
    } )
}

function hablar(){
console.log ('Blab bla bla bla...')
}

function adios ( nombre ){
    console.log (`Adios ${nombre}`)
    
    }

console.log('Inicializando Conversacion..')
hola('Williams')
    .then ((nombre) => hablar( nombre ))
    .then ((nombre) => hablar( nombre ))
    .then ((nombre) => hablar( nombre ))
    .then ((nombre) => hablar( nombre ))
    .then ((nombre) => adios(nombre))
    .catch ((error) => console.error( error ))