const Condominio = require('../models/condominio')
const cryptoJs = require('crypto-js')
const chave = '123'

const cadastrar = async(req,res)=>{
    const valores = req.body 

    if(!valores.nome || !valores.cnpj){
        return res.status(404).json({message: 'insira todos os dados'})
    }

    try{
        const cnpjHash = cryptoJs.AES.encrypt(valores.cnpj, chave).toString()

        await Condominio.create({
            nome: valores.nome,
            cnpj: cnpjHash
        })

        res.status(200).json({message: 'condominio cadastrado'})
    }catch(err){
        res.status(400).json({message: 'erro ao cadastrar', err})
    }
}

const listar = async(req,res)=>{
    try{
        const dados = await Condominio.findAll()
        
        dados.forEach(element => {
            element.cnpj = cryptoJs.AES.decrypt(element.cnpj, chave).toString(cryptoJs.enc.Utf8)
        })
        res.status(200).json(dados)
    }catch(err){
        console.error("Erro ao listar", err)
        res.status(500).json({message: "Erro ao listar"})
    }
}

const consultar = async(req,res)=>{
    const nome = req.params.nome

    try{
        const dados = await Condominio.findOne({where: {nome: nome}})

        dados.cnpj = cryptoJs.AES.decrypt(dados.cnpj, chave).toString(cryptoJs.enc.Utf8)
        res.status(200).json(dados)
    }catch(err){
        console.error("Erro ao consultar", err)
        res.status(500).json({message: "Erro ao consultar"})
    }
}

const apagar = async(req,res)=>{
    const id = req.params.id

    try{
        const dados = await Condominio.findByPk(id)
        if(!dados){
           return res.status(400).json({message: 'Condominio não encontrado'})
        }
        await Condominio.destroy({where: {codCondominio: id}})
        res.status(200).json({message: 'condominio excluido com sucesso'})
    }catch(err){
        console.error('erro ao apagar',err)
        res.status(400).json({message: 'erro ao apagar',err})
    }
}

module.exports = {cadastrar,consultar,listar,apagar}