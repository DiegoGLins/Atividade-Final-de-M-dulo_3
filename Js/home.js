let arrayUsuario = JSON.parse(localStorage.getItem("arrayUsuario")) || [];
let userLogged = JSON.parse(sessionStorage.getItem("usuarioLogado")) || [];
const table = document.getElementById("table-body");

//Checa usuario logado
function validaLogin() {
  if (!userLogged.logged) {
    window.location.href = "login.html";
  }
}
validaLogin();
saveUser();
tableHtml()


const formRecados = document.getElementById("listarecados");

formRecados.addEventListener("submit", (evento) => {
  evento.preventDefault();

  //AdicionarRecados

  const descricao = document.getElementById("descricao").value;
  const detalhamento = document.getElementById("detalhamento").value;

  let salvaRecado = {
    descricao: descricao,
    detalhamento: detalhamento,
  };

  userLogged.recados.push(salvaRecado);
  console.log(userLogged);
  saveUser();
  tableHtml()
});

//Busca usuario logado e salva usuario no localStorage
function saveUser() {
  sessionStorage.setItem("usuarioLogado", JSON.stringify(userLogged));

  const loginIndex = arrayUsuario.findIndex((pessoa) => pessoa.nome === userLogged.nome);
  arrayUsuario[loginIndex] = userLogged;

  localStorage.setItem("arrayUsuario", JSON.stringify(arrayUsuario));
}

//Monta a tabela html de recados
function tableHtml() {

  table.innerHTML = "";
          userLogged.recados.map((value, index) => {
          const tr = document.createElement("tr");
          const td1 = document.createElement("td");
          const td2 = document.createElement("td");
          const td3 = document.createElement("td");
          const td4 = document.createElement("td");
          const botaoDeletar = document.createElement("button");
          const botaoEditar = document.createElement("button");
         

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          td4.appendChild(botaoDeletar);
          td4.appendChild(botaoEditar);

          botaoDeletar.setAttribute("onClick", `deletarRecado(${index})`);
          botaoEditar.setAttribute("onClick", `editarRecado(${index})`);

          td1.innerHTML = index + 1;
          td2.innerHTML = value.descricao;
          td3.innerHTML = value.detalhamento;
          botaoDeletar.innerHTML = "Deletar";
          botaoEditar.innerHTML = "Editar";

          table.appendChild(tr);
        });
}

//Edita os recados
function editarRecado(index){

  const novaDescricao = document.getElementById("descricao").value;
  const novoDetalhamento = document.getElementById("detalhamento").value;
  userLogged.recados[index].descricao = novaDescricao
  userLogged.recados[index].detalhamento = novoDetalhamento
  saveUser()
  tableHtml()
  alert("Dados alterados com sucesso !")
}

//Deleta os recados
function deletarRecado(index) {
  userLogged.recados.splice(index,1)
  saveUser();
  tableHtml();
}

//Desloga o ususario da aplicação
function logout () {
  sessionStorage.removeItem("usuarioLogado")
  window.location.href="login.html";
}

document.getElementById("logout").addEventListener('click', (evento) =>{
logout()
})

