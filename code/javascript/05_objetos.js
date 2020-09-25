var docente1 = {
    nombre: 'Anthony',
    apellido: 'Barros',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'abarrosg@est.ups.edu.ec',
}

var docente2 = {
    nombre: 'Williams',
    apellido: 'Choez',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'wchoezr@est.ups.edu.ec',
}

function imprimirNombreMayuscula(objeto) {
    var { nombre } = objeto
    console.log(`${nombre.toUpperCase()} ${objeto.apellido}`)
}

function imprimirNombreMinuscula(objeto) {
        console.log(`${objeto.nombre.toLowerCase()} ${objeto.apellido}`)
}

function imprimirApellidoMayuscula( {apellido} ) {
    console.log( `${apellido.toUpperCase()}`)
}

imprimirNombreMayuscula( docente1 )
imprimirNombreMinuscula( docente1 )

imprimirApellidoMayuscula( docente2 )