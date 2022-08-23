let formularios = document.querySelectorAll(".campo");
let botaoEnviar = document.getElementById("enviar");

let titulo = document.getElementById("titulo");
let url = document.getElementById("url");
let descricao = document.getElementById("descricao");

function addCard(){
    let container = document.querySelector(".container");
    let novoCard =  document.createElement("div");
    novoCard.className = "card";
    novoCard.innerHTML = 
`     <div>
      <img class="imgCard" src="${url.value}">
      </div>
      <div>
      <h2>${titulo.value}</h2>
      <p>
        ${descricao.value}
      </p></div>
`
container.appendChild(novoCard);
}

botaoEnviar.addEventListener("click",function(evento){
    //alert("Enviado!!!");
    addCard();
    formularios.forEach(x=>x.value="");
    evento.preventDefault();
});
