function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
let winsUser=0, winsPC=0,aviso=false;

while(winsPC<2 && winsUser<2){
    let escolhaUser = prompt("Pedra,papel ou tesoura!");
    let escolhaPC = getRandomInt(1,4);
    
    if(escolhaPC==1){
        escolhaPC = "Pedra";
    }else if(escolhaPC==2){
        escolhaPC = "Papel";
    }else if(escolhaPC==3){
        escolhaPC = "Tesoura";
    }
    aviso=false;
    console.log(aviso);
    if(escolhaUser == "Pedra" || escolhaUser == "pedra"){
        if(escolhaPC=="Papel"){
            winsPC++;
        }else if(escolhaPC=="Tesoura"){
            winsUser++;
        }else{};
    }else if(escolhaUser=="Papel" || escolhaUser=="papel"){
        if(escolhaPC=="Tesoura"){   
            winsPC++;
        }else if(escolhaPC=="Pedra"){
            winsUser++;
        }else{};
    }else if(escolhaUser=="Tesoura" || escolhaUser=="tesoura"){
        if(escolhaPC=="Papel"){
            winsUser++;
        }else if(escolhaPC=="Pedra"){
            winsPC++;
        }else {};
    }else{
        aviso=true;
        alert("Escolha inválida!!!");
    }
    console.log(aviso);
    if(aviso===false){alert("Sua escolha - "+escolhaUser+"        "+winsUser+"  :  "+winsPC+"         "+escolhaPC+" - Escolha da máquina");}
}

if(winsPC==2){
    alert("Você perdeu!!!");
}else{
    alert("Você ganhou!!!");
};