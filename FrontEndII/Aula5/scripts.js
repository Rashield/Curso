
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