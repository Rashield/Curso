
//necessario buscar o elemento html que queremos trabalhar, e tornar Root para o React identificar
const divRoot = ReactDOM.createRoot(document.getElementById("div"));

//criando elemento modo padrão
const element = React.createElement("h1",{},"Testeee")

//criando elemento com JSX
function ElementJSX(){
    return(
        <h1>Olá Mundoo!!!</h1>
    );
}
//no final sempre precisamos renderizar com .render
divRoot.render(<ElementJSX />) ;