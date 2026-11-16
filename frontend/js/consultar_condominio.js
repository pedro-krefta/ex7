const token = localStorage.getItem('token')

const btn_consultar = document.getElementById('btn_consultar')
const resposta = document.getElementById('resposta')

btn_consultar.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value

    fetch(`http://localhost:3000/condominio/buscar/${nome}`,{
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
    cabecalho += `
    <tr>
        <td>${dados.codCondominio}</td>
        <td>${dados.nome}</td>
        <td>${dados.cnpj}</td>
    </tr>`
    cabecalho += `</tbody>`
    return cabecalho
}