import input from 'readline-sync';


   let polegadas 
   let resultado  
   
    console.log("Escolha qual conversor deseja utilizar: \n\n");
    console.log("1- Polegadas para Centimetros \n");
    console.log("2- Polegadas para Milimetros \n");
    console.log("3- Centimetros para Polegadas \n");
    console.log("4- Milimetros para Polegadas \n");

    let opcao = input.question("Opcao Escolhida: ");

    if(opcao == 1){
        polegadas  = input.question("Insira a medida em polegadas: ");
        resultado = polegadas * 2.54;
        console.log("A medida em centimetros e: " + resultado.toFixed(2) + " cm ");
    }
    else if(opcao == 2){
        polegadas = input.question("Insira a medida em polegadas: ");
        resultado = polegadas * 25.4;
        console.log("A medida em milimetros e: " + resultado.toFixed(2) + " mm");
    }
    else if(opcao == 3){
        let centimetros = input.question("Insira a medida em centimetros: ");
        resultado = centimetros / 2.54;
        console.log("A medida em polegadas e: " + resultado.toFixed(2));
    }
    else if(opcao == 4){
        let milimetros = input.question("Insira a medida em milimetros: ");
        resultado = milimetros / 25.4;
        console.log("A medida em polegadas e: " + resultado.toFixed(2) );
    }
    else{
        console.log("Opcao Invalida!!");
    }