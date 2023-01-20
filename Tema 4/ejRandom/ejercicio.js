function random(num1, num2, cantidad){
    const fruits = [];
    for(let i =0; i<cantidad; i++){
        let num = Math.floor(Math.random() * (num2 -num1+1)) + num1;
        while(fruits.includes(num)){
          num = Math.floor(Math.random() * (num2 -num1+1)) + num1;
        }
        fruits.push(num);
    }
    return fruits;
}

//alert(random(1,10,3));

//FALTA CONTROLAR QUE NO SE REPITAN NUMEROS DENTRO DE LA MISMA SERIE

function loteria(juego){
    let numeros;
    let reintegro;
    switch (juego) {
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
        case 'Euromillon':
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
var juego = prompt("Introduce que lotería juego: ");
loteria(juego);
