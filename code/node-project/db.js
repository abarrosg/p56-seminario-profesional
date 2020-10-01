const db = require('mongoose')

db.Promise = global.Promise

async function connect( uri ){
    await db.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'utups',   
    })
        .then( (data) =>{console.log('[db] - Conectada con exito.')})
        .catch( (error) =>{console.log.error('[erro log] - ' + error )} )

}

module.exports = connect