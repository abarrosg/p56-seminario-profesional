const db = require('mongoose')
const model = require('./model')

const uri = "mongodb+srv://ups:ups2020@cluster0.edjk7.gcp.mongodb.net/utups?retryWrites=true&w=majority";

db.Promise = global.Promise
db.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'utups',   
})
    .then( (data) =>{console.log('[db] - Conectada con exito.')})
    .catch( (error) =>{console.log.error('[erro log] - ' + error )} )


const list = []

function addCarrera( objeto ){
    const carrera = new model( objeto )
    carrera.save()
}

async function getCarreras(){
    const carreraList = await model.find()
    return carreraList
}

async function updateCarrera( idCarrera, objeto ) {
    const foundCarrera = await model.findOne({ _id: idCarrera})
    foundCarrera.nombre = objeto.nombre
    foundCarrera.abreviatura = objeto.abreviatura
    foundCarrera.descripcion = objeto.descripcion

    const result = await foundCarrera.save()
    return result 
  }

function deleteCarrera(idCarrera) {
   return model.deleteOne({ _id: idCarrera })
}

module.exports = {
    add: addCarrera,
    get: getCarreras,
    update: updateCarrera,
    delete: deleteCarrera,
}