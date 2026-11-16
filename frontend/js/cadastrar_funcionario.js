const btn_cadastrar = document.getElementById('btn_cadastrar')
const resposta = document.getElementById('resposta')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const valores ={
        email: email,
        senha: senha
    }

    fetch('http://localhost:3000/funcionario',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(valores)
    })

  .then(res =>res.json())
  .then(dados =>{
    resposta.innerHTML = ``
    resposta.innerHTML += `<p>${dados.message}</p>`
  })
  .catch((err)=>{
    console.error('erro ao cadastrar')
  })
})