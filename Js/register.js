//CADASTRAR USUARIO

const registerForm = document.getElementById("registerForm");
let arrayUsuario = JSON.parse(localStorage.getItem("arrayUsuario")) || [];

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  function register() {
    const nicknameInput = document.getElementById("nickname");
    let textoname = nicknameInput.value;
    const senhaInput = document.getElementById("senha");
    let textosenha = senhaInput.value;
    const repeatInput = document.getElementById("repeatsenha");
    let repeatSenhaInput = repeatInput.value;

    const findNome = arrayUsuario.some((pessoa) => pessoa.nome === textoname);
    if (findNome) {
      return alert(`Usuario ${textoname} já cadastrado! `);
    }

    if(textosenha !== repeatSenhaInput){
      return alert('Senhas digitadas diferentes!')
    }

    let registerUsuario = { nome: textoname, senha: textosenha, recados: [], logged: false };

    arrayUsuario.push(registerUsuario);

    if (localStorage.getItem("items") === null) {
      array_json = JSON.stringify(arrayUsuario);
      //----------------------------//chave, valor
      localStorage.setItem("arrayUsuario", array_json);
    } else {
      // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
      localStorage.setItem(
        "items",
        // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        JSON.stringify([JSON.parse(localStorage.getItem("items")), array_json])
      );
    }

    alert("Cadastro realizado com sucesso");
    window.location.href="login.html"
  }

  register();
  
});
 