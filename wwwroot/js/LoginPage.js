
 document.addEventListener('DOMContentLoaded', function() {
     var criarContaBtn = document.getElementById("criarContaBtn");
     var campos = document.querySelectorAll("#nameuser, #email, #webpassword, #password");
     function validarCampos() {
         var usuario = document.getElementById("nameuser").value;
         var email = document.getElementById("email").value;
         var senha = document.getElementById("webpassword").value;
         var confirmarSenha = document.getElementById("password").value;
         var mensagemErro = document.getElementById("mensagemErro");
         if (!usuario || !email || !senha || !confirmarSenha) {
             mensagemErro.innerHTML = 'Por favor, preencha todos os campos.';
             criarContaBtn.disabled = true;
             return false;
         }
         if (senha !== confirmarSenha) {
             mensagemErro.innerHTML = 'As senhas não coincidem.';
             criarContaBtn.disabled = true;
             return false;
         }
         mensagemErro.innerHTML = "";
         criarContaBtn.disabled = false;
         return true;
     }
     campos.forEach(function(campo) {
         campo.addEventListener('input', validarCampos);
     });
 });
 // Função para criar a conta
 function criarConta() {
     var camposValidos = validarCampos();
     if (camposValidos) {
         var usuario = document.getElementById("nameuser").value;
         var email = document.getElementById("email").value;
         var senha = document.getElementById("webpassword").value;
         var currentDate = new Date();
         var currentDay = currentDate.getDate();
         var randomDate = Math.floor(Math.random() * 1000) + currentDay;
         var codusuario = randomDate.toString();
         var dados = {
             userid: codusuario,
             nameuser: usuario,
             email: email,
             webpassword: senha
         };
         fetchUserCreation(dados);
     }
 }
 // Função para enviar a requisição de criação de usuário
 function fetchUserCreation(dados) {
     fetch('https://localhost:7299/api/Login/CreateUser', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(dados)
     })
     .then(response => response.json())
     .then(data => {
         console.log('Resposta do servidor:', data); // Adicione esta linha
         console.log('Usuário criado com sucesso:', data);
         exibirMensagem('success', 'Usuário criado com sucesso!');
     })
     .catch(error => {
         console.error('Erro ao criar usuário:', error);
         exibirMensagem('error', 'Houve um erro ao criar o usuário'); // Mensagem genérica
     });
}
 // Função para exibir mensagem na tela
 function exibirMensagem(type, message) {
     var mensagemElement = document.getElementById('mensagem');
     mensagemElement.innerText = message;
     mensagemElement.style.display = 'block';
     if (type === 'success') {
         mensagemElement.style.color = 'green';
     } else if (type === 'error') {
         mensagemElement.style.color = 'red';
     }
     setTimeout(function() {
         mensagemElement.style.display = 'none';
     }, 6000); // A mensagem será ocultada após 3 segundos
 }
