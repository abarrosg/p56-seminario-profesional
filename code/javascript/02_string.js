var nombre = 'Williams'
var apellido = 'Choez'

var nombre_ = 'williams', apellido_ = 'pizarro'

// todo con mayuscula touppercase
var nombreMayuscula = nombre.toUpperCase()
var apellidoMayuscula = apellido.toUpperCase()
// javascript puro
console.log( nombreMayuscula + '' + apellidoMayuscula )
//especificacion de javascript  . ecmaScript +6 41:10
console.log( `${nombre} ${nombreMayuscula} ` )

var primeraLetraNombre = nombre.charAt(0)
var longuitudNombre = nombre.length
var subcadenaNombre = nombre.substr(1, 3)

console.log(primeraLetraNombre )
console.log(longuitudNombre )
console.log(subcadenaNombre )