//Visualizar la posición que ocupa un número N en la sucesión de Fibonacci.
var num1 = 0;
var num2 = 1;

var N = prompt("Introduce un número: ");
var numero = 0;
var contador = 2;
while(numero < N){
        numero= (num1 + num2);
        num1 = num2;
        num2 = numero; 
        contador++;
}
alert(contador);