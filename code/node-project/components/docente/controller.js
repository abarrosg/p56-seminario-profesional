const storage = require('./storage')

function addCarrera(nombre, apellido, correo_electronico) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            apellido: apellido, 
            correo_electronico: correo_electronico,
        }
        storage.add(carrera)
        resolve(carrera)
    })
}

function getCarreras() {
    return new Promise((resolve, reject) => {
        resolve(storage.get())
    })

}

function updateCarrera(idDocente,nombre, apellido, correo_electronico) {
    return new Promise( async (resolve, reject) => {
        let carrera = {
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
        }
        const result = await storage.update(idCarrera, carrera)
        resolve( result )
    })
}

function deleteCarrera(idCarrera) {
    return new Promise((resolve, reject) => {
        storage.delete( idCarrera )
            .them(() => { resolve() })
            .catch((error) => { reject( error ) })
     })
}

module.exports = {
    addCarrera,
    getCarreras,
    updateCarrera,
    deleteCarrera,
}