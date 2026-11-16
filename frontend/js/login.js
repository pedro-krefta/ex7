const btn_logar = document.getElementById('btn_logar')
const resposta = document.getElementById('resposta')

btn_logar.addEventListener('click', (e)=>{
    e.preventDefault()


    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const valores ={
        email: email,
        senha: senha
    }

    fetch('http://localhost:3000/login',{
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
    localStorage.setItem('token', dados.token)
    localStorage.setItem('nome', dados.nome)

  })
  .catch((err)=>{
    console.error('erro ao cadastrar')
  })
})