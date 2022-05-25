// Darlei Feix, Diogo Rodrigues, Daniela Fuenmayor, Ivanaldo Santos, Valquiria Oliveira

const alice = [ 23, 82, 46 ];
const bob = [ 45, 8, 32];

function comparaNota (nome1,nome2){
    let pontosAlice=0, pontosBob=0;
    for(let aux=0; aux<=alice.length;aux++){
        if(nome1[aux]>nome2[aux]){
            pontosAlice++;
        }else if(nome1[aux]<nome2[aux]){
            pontosBob++;
        }
    }
    if(pontosAlice>pontosBob){
        console.log("Alice ganhou!!");
    }else{
        console.log("Bob ganhou!!");
    }
}
comparaNota(alice, bob);


function digitalHouse(num1,num2){
    for(let aux=1;aux<=100;aux++){
        if(aux%num1==0 && aux%num2==0){
            console.log(aux+" Digital House");
        }else if(aux%num1==0){
            console.log(aux+ " Digital");
        }else if(aux%num2==0){
            console.log(aux+ " House");
        }
    }
}

digitalHouse(2,3);

const myarray = [5,5,5,5,5]; 

function somaArray(numeros){
    let soma=0;
    for (let aux=0;aux<myarray.length;aux++){
        console.log(numeros[aux]);
        soma += " -"+numeros[aux];
    }
    return soma;
}

console.log(somaArray(myarray));