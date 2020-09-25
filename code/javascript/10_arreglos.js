// especificacion de objetos
var objeto1 = {
    nombre: 'Luis',
    apellido: 'Armijos',
    altura: 180,
    cantidadLibros: 20,
}

var objeto2 = {
    nombre: 'Shirley',
    apellido: 'Coque',
    altura: 160,
    cantidadLibros: 200,
}

var objeto3 = {
    nombre: 'Javier',
    apellido: 'Ortiz',
    altura: 170,
    cantidadLibros: 50,
}

var objeto4 = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
    altura: 170,
    cantidadLibros: 50,
}

var objeto5 = {
    nombre: 'Galo',
    apellido: 'Valverde',
    altura: 160,
    cantidadLibros: 60,
}

var personas = [objeto1, objeto2, objeto3, objeto4, objeto5]
// recorrer un arreglo de objetos
for (persona of personas){
    console.log (`${persona.nombre} ${persona.apellido}`)
}

console.log('\n')
for (var i=0; i<personas.length; i++){
    console.log (`${personas[i].nombre} ${personas[i].apellido}`)
}

// filtro con arreglos (filtrar personas altas)
const esAlta = (objeto) => objeto.altura >= 1.70
var personasAltas = personas.filter( esAlta )

//solo nombres en el arreglo
console.log( personasAltas )
for (persona of personasAltas){
    console.log (`${persona.nombre} ${persona.apellido}`)
}

// uso funcion map con arreglos
const pasarAlturasMetros = (objeto) => {
    objeto.altura = objeto.altura / 100
    return objeto
}
//var personasMetros = personas.map( pasarAlturasMetros )
//console.log( personasMetros )



var otrasPersonas = []

for (persona of personas) {
    otrasPersonas.push( { ... persona } )
}

otrasPersonas.map( pasarAlturasMetros )
console.log( personas )
console.log( otrasPersonas )


//map modifica cada elemento de un arreglo
// segunda manera de ejecutarlo pero con cm (funcion expresiva)

//var personasCm = personas.map( function (objeto) {
//    objeto.altura = objeto.altura * 100
//    return objeto
//} )
//console.log( personasCm )



//USO DE LA FUNCION REDUCE EN ARREGLOS

const contabilizarLibros = (acum, { cantidadLibros }) => acum + cantidadLibros

var totalLibros = personas.reduce( contabilizarLibros, 0 )
console.log(`La cantidad de Libros en total es ${totalLibros}`)


// otra forma de ejecutar  reduce en arreglos
var sum = 0
for (persona of personas){
    sum += persona.cantidadLibros
}
console.log(`La cantidad de Libros en total es ${sum}`)

