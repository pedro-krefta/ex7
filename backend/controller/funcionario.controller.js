const Funcionario = require('../models/funcionario')
const cryptoJs = require('crypto-js')
const chave = '123'

const cadastrar = async(req,res)=>{
    const valores = req.body
    console.log(valores)

     if(!valores.nome || !valores.email || !valores.senha){
            return res.status(400).json({message: 'Preencha todos os campos!'})
        }
        
    try{
        const senhaHash = cryptoJs.AES.encrypt(valores.senha, chave).toString()

        await Funcionario.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaHash
        })
        
        res.status(200).json({message: 'funcionario cadastrado com sucesso'})
    }catch(err){
        res.status(400).json({message: 'erro ao cadastrar',err})
        console.error('erro ao cadastrar',err)
    }
}

module.exports = {cadastrar}