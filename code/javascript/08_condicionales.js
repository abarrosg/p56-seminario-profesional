var persona = {
    nombre: 'Williams',
    apellido: 'Choez',
    edad: '24',
    universidad: 'Universidad Politecnica Salesiana',
    correoElectronico: 'wchoezr@est.ups.edu.ec',
    ingeniero: true,
    master: false,
    doctor: false,
}

function imprimirPersona( objeto ){
    console.log(`${objeto.nombre} ${objeto.apellido}.` )
    console.log(`Edad: ${objeto.edad} años.` )
    console.log(`Universidad: ${objeto.universidad}.` )
    console.log(`Correo Electronico: ${objeto.correoElectronico}.` )

    if (objeto.ingeniero){
        console.log( `Es Ingeniero.` )
    }
    if (objeto.master){
        console.log( `Es Magister.` )
    }
    if (objeto.doctor){
        console.log( `Es Doctor.` )
    }
}

imprimirPersona (persona )

opcion = 2

switch(opcion){
    case 1: 
        console.log('Caso 1')
        break
    case 2:
        console.log('Pendejo')
        break
}