function trocaImg(){
    let imgs = document.querySelectorAll("img");
    let novoImgs = Array.from(imgs);
    let escolha = prompt("Informe a posição da imagem que deseja alterar:  Iniciando em 0");
    if(escolha==null){}
    else if(escolha<novoImgs.length){
        let escolhaUser = prompt("Informe a nova URL:");
        if(escolhaUser!="" && escolhaUser !=null){
            novoImgs[escolha].setAttribute("src",escolhaUser);
        }else{
            alert("Imagem não alterada!");}}
        else{
        alert("Posição Inválida");}
}


function darkMode(){
    let body = document.querySelector('body');
    body.classList.toggle("fundo-dark");

    let h1 = document.querySelector("h1");
    h1.classList.toggle("titulo-dark");

    let itens = document.querySelectorAll(".item");
    itens.forEach(x => {x.classList.toggle("itens-dark");});

    let itensTopo = document.querySelectorAll("h2");
    let itensTexto = document.querySelectorAll("p");

    itensTopo.forEach(y => {y.classList.toggle("itens-dark2");});
    itensTexto.forEach(z => {z.classList.toggle("itens-dark2");});
};

