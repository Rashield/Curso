function somar(a,b){
    return a+b;
}
function subtrair(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
function dividir(a,b){
    return a/b;
}
let resultado =0;
let n1 = parseFloat(prompt("Informe o primeiro número:"));
let operacao = prompt("Informe a operação desejada: + - * /");
let n2 = parseFloat(prompt("Informe o segundo número:"));

if(operacao=="+"){
    resultado = somar(n1,n2);
}else if(operacao=="-"){
    resultado = subtrair(n1,n2);
}else if(operacao=="*"){
    resultado = multiplicar(n1,n2);
}else if(operacao=="/"){
    resultado = dividir(n1,n2);
}else{
    alert("Operação inválida!");    
};

alert(`${n1} ${operacao} ${n2} = ${resultado}`);