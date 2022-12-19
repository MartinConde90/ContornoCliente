function random(num1, num2, cantidad){
    const fruits = [];
    for(let i =0; i<cantidad; i++){
        fruits.push(Math.floor(Math.random() * (num2 -num1+1)) + num1);
    }
    return fruits;
}

alert(random(1,10,3));

//FALTA CONTROLAR QUE NO SE REPITAN NUMEROS DENTRO DE LA MISMA SERIE

function loteria(jugar){
    let numeros;
    let reintegro;
    switch (jugar) {
        case 'Primitiva':
           numeros = random(1,49,6);
           reintegro = random(0,9,1);
            alert(numeros + "-" + reintegro);
          break;
        case 'El Gordo':
             numeros = random(1,54,5);
             reintegro = random(0,9,1);
             alert(numeros + "-" + reintegro);
          break;
        case 'Euromillón':
             numeros = random(1,50,5);
             reintegro = random(1,12,2);
             alert(numeros + "-" + reintegro);
          break;
        case 'Bonoloto':
             numeros = random(1,49,6);
             alert(numeros);
          break;
        default:
          alert("Lotería no existente");
      }   
}
//var jugar = prompt("Introduce que lotería jugar: ");
//loteria(jugar);
