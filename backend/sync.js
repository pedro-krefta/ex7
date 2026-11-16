const {Funcionaro,Movimentacao,Condominio,Materiais} = require('./models/rel')
const conn = require('./db/conn')

async function syncDB(){
    try{
        await conn.sync({force: true})
        console.log('sincronizando')
    }catch(err){
        console.error('erro',err)
    }finally{
        await conn.close()
        console.log('finalizando')
    }
}

syncDB()