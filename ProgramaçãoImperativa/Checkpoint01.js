function microOndas(tipoAlimento, tempo){
    if(tipoAlimento == "pipoca" || tipoAlimento == "macarrao" || tipoAlimento == "carne" || tipoAlimento == "feijão" || tipoAlimento == "brigadeiro"){
            switch (tipoAlimento){
                case "pipoca":
                    if(tempo>=30){
                        console.log("KABUMMMMMM");
                    }else if(tempo>20){
                        console.log("Comida queimou!!!");
                    }else if(tempo<10){
                        console.log("Tempo insuficiente!!!");
                    }
                    break;
                case "macarrao":
                case "brigadeiro":
                    if(tempo>=24){
                        console.log("KABUMMMMMM");
                    }else if(tempo>16){
                        console.log("Comida queimou!!!");
                    }else if(tempo<8){
                        console.log("Tempo insuficiente!!!");
                    }
                    break;
                case "carne":
                    if(tempo>=45){
                        console.log("KABUMMMMMM");
                    }else if(tempo>30){
                        console.log("Comida queimou!!!");
                    }else if(tempo<15){
                        console.log("Tempo insuficiente!!!");
                    }
                    break;
                case "feijão":
                    if(tempo>=36){
                        console.log("KABUMMMMMM");
                    }else if(tempo>24){
                        console.log("Comida queimou!!!");
                    }else if(tempo<12){
                        console.log("Tempo insuficiente!!!");
                    }
                    break;
            }
            console.log("Prato pronto, bom apetite!!!");
    }else{
        console.log("Prato Inexistente!!!");
    }
}

microOndas("brigadeiro", 7);