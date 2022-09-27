//Visualizar si un número N pertenece a la sucesión de Fibonacci.
var num1 = 0;
var num2 = 1;

var N = prompt("Introduce un número: ");
var numero = 0;

while(numero < N){
        numero= (num1 + num2); 
        num1 = num2;
        num2 =numero; 
}
if(numero == N){
    alert("El numero pertenece a la sucesion de Fibonacci");
}
else{
    alert("El numero no pertenece a la sucesion de Fibonacci");
};