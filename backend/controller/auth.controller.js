const Funcionario = require('../models/funcionario')
const cryptoJs = require('crypto-js')
const chave = '123'

const login = async(req,res)=>{
    const valores = req.body

    if(!valores.email || !valores.senha){
        return res.status(404).json({message: 'erro ao logar'})
    }

    try{
        const funcionario = await Funcionario.findOne({where: {email: valores.email}})

        const senhaDB = cryptoJs.AES.decrypt(funcionario.senha, chave).toString(cryptoJs.enc.Utf8)

        if(valores.senha !== senhaDB){
            return res.status(400).json({message: 'senha incorreta'})
        }

        const payload ={
            idFuncionario: funcionario.codFuncionario,
            nome: funcionario.nome,
            expiraEm: Date.now() + (240 * 60 * 1000)
        }

        const token = cryptoJs.AES.encrypt(JSON.stringify(payload), chave).toString()

        res.status(200).json({message: 'login realizado com sucesso',
            nome: funcionario.nome,
            token: token
        })
    }catch(err){
        res.status(400).json({message: 'erro ao logar'})
        console.error('erro ao logar')
    }
}

module.exports = {login}