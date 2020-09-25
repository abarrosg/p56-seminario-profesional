var docente = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
}

var docente2 = {
    nombre: 'Dario',
    apellido: 'Huilcapi',
}

var otrodocente = {
    ... docente
}

console.log( docente == docente2)

console.log( docente == otrodocente)

console.log( otrodocente.nombre)
// esta asignacion es por referencia
docente2 = otrodocente
otrodocente.nombre = 'Luis'
console.log( docente2 == otrodocente )  