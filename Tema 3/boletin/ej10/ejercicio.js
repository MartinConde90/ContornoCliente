function fibo(num){
    var num1 = 0;
    var num2 = 1;

    var numero = 0;
    var igual = true;

    while(numero<num){
        numero = num1+num2;
        num1 = num2;
        num2 = numero;
    }

    if(numero != num){
        igual = false;
    }

    return igual;
}

var num = prompt("Introduce un número:");

alert(fibo(num));