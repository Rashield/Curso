

// 1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?


function ehMaior(a,b,c){
    if(a>b && a>c){
        if(b>c){
            console.log(a +" é o maior número e "+ c +" é o menor número.");
        }else{
            console.log(a +" é o maior número e "+ b +" é o menor número.");
        }
    }else if(b>a && b>c){
        if(a>c){
            console.log(b +" é o maior número e "+ c +" é o menor número.");
        }else{
            console.log(a +" é o maior número e "+ a +" é o menor número.");
        }
    }else{
        if(b>a){
            console.log(c +" é o maior número e "+ a +" é o menor número.");
        }else{
            console.log(c +" é o maior número e "+ b +" é o menor número.");
        }
    }
}

ehMaior(1,5,8);

// 2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
// idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

function doarSangue(idade){
    if (idade>=18 && idade<=67){
        console.log("Pode doar sangue!");
    } else{
        console.log("Não pode doar sangue!");
    }
}



// 3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

function posiNega(x){
    if(x>0){
        console.log("Número é positivo!");
    }else if(x<0){
        console.log("Número é negativo!");
    }else{
        console.log("Número igual a 0!");
    }
}

posiNega(-5);

// 4. Faça um programa para a leitura de duas notas de um aluno.  
//     A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
//     A mensagem “Aprovado com Distinção”, se a média for igual a 10;
//     A mensagem “Reprovado” se a média for menor de do que 7;

function mediaNota(n1,n2){
    let media=(n1+n2)/2;
    if(n1>=0 && n1<=10 && n2>=0 && n2<=10){  
        if(media<7){
            console.log("Reprovado");
        }else if(media==10){
            console.log("Aprovado com distinção");
        }else if(media>=7 && media<=9.9){
            console.log("Aprovado");
        }
    }else{
        console.log("Favor informar nota entre 0 e 10.");
    }
}

mediaNota(5,7);