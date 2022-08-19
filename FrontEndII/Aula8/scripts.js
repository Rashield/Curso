var palavra = "", count =0;

window.onload = function(){alert("Página carregada")};

let formulario = document.querySelector(".form");
formulario.innerHTML = 
`<form class="formulario" method="post"> 
    <p id="titulo"> Deixe sua sugestão:</p>

<div class="field">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" placeholder="Digite seu nome*" required>
</div>

<div class="field">
    <label for="telefone">Telefone:</label>
    <input type="text" id="telefone" name="telefone" placeholder="Digite seu Telefone">
</div>

<div class="field">
    <label for="email">E-Mail:</label>
    <input type="email" id="email" name="email" placeholder="Digite seu E-Mail*" required>
</div>        
<div class="field">
    <label for="mensagem">Comentário:</label>
    <textarea name="mensagem" id="mensagem" placeholder="Mensagem*" required></textarea>
</div>
<div class="botoes">
    <input type="submit" id="enviar" class="botao-input" name="acao" value="Enviar">
    <input type="reset" class="botao-input" name="acao" value="Limpar">
</div>
<div class="teste">

</div>
</form>
`

let botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener("click",function(evento){
    alert("Enviado!!!");
    evento.preventDefault();
});

let titulo = document.getElementById("titulo");
titulo.onmouseover = function(){
    titulo.style.color= "red";
}
titulo.onmouseout = function(){
    titulo.style.color= "rgb(25,25,112)";
}

let texto = document.getElementById("mensagem");
texto.onkeyup = function(evento){
    palavra = (palavra+evento.key);
    count++;
    pegaTecla();
};
function pegaTecla(){
let teste = document.querySelector(".teste");
teste.innerHTML = 
`
<p>${palavra} - ${count}</p>
`}