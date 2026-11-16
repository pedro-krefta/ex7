const cryptoJs = require('crypto-js')
const chave = '123'

function verificar(req,res,next){
    const token = req.headers['authorization']
    console.log(token)

    if(!token){
        return res.status(404).json({message: 'faça login'})
    }

    try{
        const dadosDescriptografados = cryptoJs.AES.decrypt(token, chave).toString(cryptoJs.enc.Utf8)

        if(!dadosDescriptografados){
            return res.status(400).json({message: 'acesso negado'})
        }

        const payload = JSON.parse(dadosDescriptografados)

        if(Date.now() > payload.expiraEm){
            return res.status(400).json({message: 'faça login novamente' })
        }

        next()
    }catch(err){
        console.error('erro no token',err)
    }
}

module.exports = verificar