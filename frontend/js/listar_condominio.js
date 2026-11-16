const token = localStorage.getItem('token')

const btn_listar = document.getElementById('btn_listar')
const resposta = document.getElementById('resposta')

btn_listar.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch(`http://localhost:3000/condominios`,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'authorization': token
        }
    })

  .then(res =>res.json())
  .then(dados =>{
    resposta.innerHTML = ``
    resposta.innerHTML += `
    <table>
    ${criarThead()}
    ${criarTbody(dados)}
    </table>`
  })

  .catch((err)=>{
    console.error('erro ao cadastrar')
  })
})


function criarThead(){
    let cabecalho = `
    <thead>
        <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>CNPJ</th>
        </tr>
    </thead>`
    return cabecalho
}

function criarTbody(dados){
    let cabecalho = `<tbody>`
    dados.forEach(element => {
        cabecalho += `
        <tr>
            <td>${element.codCondominio}</td>
            <td>${element.nome}</td>
            <td>${element.cnpj}</td>
        </tr>`
    })
    cabecalho += `</tbody>`
    return cabecalho
}