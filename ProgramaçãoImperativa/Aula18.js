// Exercicio 1 //

// function loopdePares(num){
//     for(let x=0;x<=100;x++){
//         if((x+num)%2==0){
//             let soma= x+num;
//             console.log("O número "+soma+" é par!");
//         }else{
//             console.log(x);
//         }
//     }
// }

// loopdePares(5);

// Exercicio 2 //

// function loopdeImpares(num,word){
//     for(let x=0;x<=100;x++){
//         if((x+num)%2==1){
//             console.log(word);
//         }else{
//             console.log(x);
//         }
//     }
// }

// loopdeImpares(5,"batata");

// Exercicio 3//

// function soma(num1){
//     let result=0;
//     for(num1;num1>=1;num1--){
//         result += num1;
//     }
//     return result;
// }

// console.log(soma(8));

// Exercicio 4 //

// function newArray(num){
//     let array=[];
//     for(num;num>=1;num--){
//         array.unshift(num);
//     }
//     return array;
// }
// console.log(newArray(7));

// Exercicio 5  // 

// function split(word){
//     let result=[];
//     for(let x=0;x<word.length;x++){
//         result.push(word[x]);
//     }
//     return result;
// }
// console.log(split("banana"));

// Exercicio 6 //

// let array = [1,2,0,1,0,1,0,3,0,1];
// function moverZeros(teste){
//     let novaArray =[];
//     let conta0=0;
//     for (let x=0;x<teste.length;x++){
//         if(teste[x]!=0){
//             novaArray.push(teste[x]);
//         }else{
//             conta0++;
//         }    
//     }
//     for(x=1;x<=conta0;x++){
//         novaArray.push(0);
//     }
//     return novaArray;
// }
// console.log(moverZeros(array));

// Exercicio 7 //
//depois da 6 essa foi fácil//
// function arrayHandler(array1,array2){
//     for(let x=0;x<array1.length;x++){
//         console.log("Eu sou o "+array1[x]+" e eu sou o "+array2[x]);
//     }
// }
// arrayHandler([1,2,3],["o","l","a"]);

// Exercicio 8 //

// function arrayObjects(num){
//     let array=[];
//     for(let x=1;x<=num;x++){
//         let teste ={
//             valor:x,
//         }
//         array.push(teste);
//     }
//     return array;
// }
// console.log(arrayObjects(5));

// Exercicio 9 //

function arrayObjectsTwo(num,word){
    let array=[];
    for(let x=1;x<=num;x++){
        let teste ={
            [word]:x,
        }
        array.push(teste);
    }
    return array;
}
console.log(arrayObjectsTwo(5,"ola"));