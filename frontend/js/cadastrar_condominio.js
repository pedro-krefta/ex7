const token = localStorage.getItem('token')

const btn_cadastrar = document.getElementById('btn_cadastrar')
const resposta = document.getElementById('resposta')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const cnpj = document.getElementById('cnpj').value

    const valores ={
        nome: nome,
        cnpj: cnpj
    }

    fetch('http://localhost:3000/condominio',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'authorization': token
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