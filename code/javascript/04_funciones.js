var nombreApellido = 'Williams Choez'
var edad = 24

// FUNCION TIPO dECLARATIVA
function imprimirEdad(nombre, edad){
    console.log(`${nombre} tiene la edad de ${edad}.`)
}

// FUNCION TIPO FLECHA
var imprimirEdad2 = (nombre, edad) =>{ 
    console.log( `${nombre} tiene la edad de ${edad}.`)
}

// FUNCION TIPO EXPRESIVA
var imprimirEdad3 = function(nombre, edad){ 
    console.log( `${nombre} tiene la edad de ${edad}.`)
}

imprimirEdad (nombreApellido, edad)
imprimirEdad ('Anthony Barros', 1)

imprimirEdad2(nombreApellido, edad)

imprimirEdad3( 'Nicole Barros', 4)
imprimirEdad3( 'Sofía Barros', 5)