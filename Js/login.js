// lOGAR USUÁRIO

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("entrou")
  let arrayUsuario = JSON.parse(localStorage.getItem("arrayUsuario")) || [];

function checkuser () {

    const nicknameInput = document.getElementById("nickname");
    let textoname = nicknameInput.value;
    const senhaInput = document.getElementById("senha");
    let textosenha = senhaInput.value;
    let login = arrayUsuario.find((pessoa) => pessoa.nome === textoname && pessoa.senha === textosenha)
    const loginIndex = arrayUsuario.findIndex((pessoa) => pessoa.nome === textoname && pessoa.senha === textosenha)
    console.log(login)
    if(login) {
        //herda todas as propiedades do usuário resgatado na variável login e altera a propriedade logged para "true"

        login = {...login,logged: true} 

        //pega o número do índice do usuario logado dentro do array armazenado na variável loginIndex

        arrayUsuario[loginIndex] = login; 

        //traz todo o array de usuários e armazena do localStorage

        localStorage.setItem("arrayUsuario",JSON.stringify(arrayUsuario)) 

         // traz o objeto apenas do usuário logado e armazena no local Storage
        sessionStorage.setItem("usuarioLogado",JSON.stringify(login))
        
        alert(`Bem vindo ${textoname}`)

        //redireciona para página caso o exista usuário
        window.location.href="home.html"
    }
    else{
        alert("Verifique seu usuário e senha!")
    }
    
}
checkuser()

});

