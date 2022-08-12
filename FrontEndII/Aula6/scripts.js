
let titulos = ["O tigre","O leão","O leopardo","A pantera negra","O jaguar","O guepardo"];
let textos = ["O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.","O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.","O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).","A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.","O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).","O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros."];
let imgs = ["./imagens/tiger.jpg","./imagens/leon.jpg","./imagens/leopardo.jpg","./imagens/pantera-negra.jpg","./imagens/jaguar.jpg","./imagens/chita.jpg"];

recebeDados(imgs, titulos,textos);

function recebeDados(img, titulo, texto){
    let papai= document.querySelector(".container")
    for(let x=0;x<img.length;x++){
    let div = document.createElement("div");
    div.innerHTML = 
    `<img src="${img[x]}">
    <h2>${titulo[x]}</h2>
    <p>${texto[x]}</p>
    `
    div.classList.add("item");
    papai.appendChild(div)}
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

