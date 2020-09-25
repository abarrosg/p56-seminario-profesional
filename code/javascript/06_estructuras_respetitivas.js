let persona = {
    nombre: 'Williams Eduardo',
    apellido: 'Choez Rodriguez',
    peso: 180,
}

const INCREMENTAR_PESO = 3
const DECREMENTAR_PESO = 2


const aumentraPeso = ( objeto ) => objeto.peso += INCREMENTAR_PESO
const disminuirPeso = ( objeto ) => objeto.peso -= DECREMENTAR_PESO

const comeMucho = () => Math.random() < 0.1
const realizaDeporte = () => Math.random < 0.8

const META = persona.peso - 10

console.log(`Al inicial del año ${persona.nombre} pesa ${persona.peso}.`)

while(persona.peso > META){
    if (comeMucho()){
        console.log('Aumenta el peso.')
        aumentraPeso( persona )
    }

    if (realizaDeporte()){
        console.log('Disminuye el peso.')
        disminuyePeso( persona )
    }
}

console.log(`Al final del año ${persona.nombre} pesa ${persona.peso}.`)