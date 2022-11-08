function mayor(num1, num2){
    var mayor = 0;

    if(num1>num2){
        mayor = num1;
    }
    else{
        mayor = num2;
    }

    return mayor;
}
var num1 = prompt("Introduce un número: ",);
var num2 = prompt("Introduce otro número: ",);

alert(mayor(num1,num2));


