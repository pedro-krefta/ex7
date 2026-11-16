const Materiais = require('../models/materiais')
const cryptoJs = require('crypto-js')
const chave = '123'

const cadastrar = async(req,res)=>{
    const valores = req.body

    try{
        const codLoteHash = cryptoJs.AES.encrypt(valores.codLote, chave).toString()

        await Materiais.create({
            idCondominio: valores.idCondominio,
            desc: valores.desc,
            categoria: valores.categoria,
            qtdeEstoque: valores.qtdeEstoque,
            codLote: codLoteHash
        })
    }catch(err){
        console.error('erro ao cadastrar',err)
        res.status(400).json({message: 'erro ao cadastrar',err})
    }
}

module.exports = {cadastrar}