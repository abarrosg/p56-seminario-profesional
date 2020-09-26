async function hola( nombre ) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log( `Hola soy ${nombre}.` )
            resolve( nombre )
        }, 1000)
    } )
}

function hablar( nombre ) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log ('Blab bla bla bla...')
            resolve( nombre )
        }, 1000)
    } )
}

function adios( nombre ) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log( `Chao soy ${nombre}.` )
            resolve( )
        }, 1000)
    } )
}

async function dialogar(){
    let nombre = await hola( 'Williams' )
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios ( nombre )
}

console.log( 'Inicializando conversacion...')
dialogar()