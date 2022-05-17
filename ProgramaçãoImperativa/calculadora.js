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
function quadradoDoNumero(a){
    return multiplicar(a,a);
}
function mediaDeTresNumeros(a,b,c){
    return dividir(somar(a,b,c),3);
}
function calculaPorcentagem(a,b){
    return dividir(multiplicar(a,b),100);
}
function geradorDePorcentagem (a,b){
    return dividir(multiplicar(b,100),a);
}
let a=10;b=2;c=0;

console.log ("-------------- Teste de Operações / Calculadora --------------");
console.log("soma:", somar(a,b));
console.log("subtração:", subtrair(a,b));
console.log("multiplicação:", multiplicar(a,b));
console.log("divisão:", dividir(a,b));
console.log("divisão por 0:", dividir(a,c));
console.log("numero ao quadrado:", quadradoDoNumero(a));
console.log("Media dos 3 numero:", mediaDeTresNumeros(a,b,c));
console.log("Calculo de porcentagem:", calculaPorcentagem (a,b));
console.log("Gerador de porcentagem:", geradorDePorcentagem (a,b));

