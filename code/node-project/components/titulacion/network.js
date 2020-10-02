const express = require ('express')
//cosnt multer = require ('muller')

//instalar algo

const config = require ('../../config')
const response = require('../../network/response')
const controller = require('./controller')
const response = require('./controller')

const router = express.Router()
const storage = multer.diskStorage({
    destination:function(req, file,cb){
        cb(null, 'public', config.filesRoute + '/')
    },
    filename:function(req, file,cb){
        const [name, extension] = file.originalname.split('.')
        cb(null, `${name}-${Date.now()}-${extension}`)
    },
})

const upload = multer ({storage: storage })
router.post('/', upload.single('file'), function(reg, res){
    controller.addTitulacion(req.body.carrera, req.body.tutor, req.body.revisor, req.body.estudiantes, req.body.tipo_titulacion, req.body.archivo, req.body.estado)
    .then((data) =>{
        response.success( req, res, data, 201)
        })
    .catch((error) =>{
        response.error( req, res, error, 500)
    })
})
