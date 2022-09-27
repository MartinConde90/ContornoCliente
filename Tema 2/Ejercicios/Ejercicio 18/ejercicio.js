//Visualizar los términos anterior y posterior a un número N en la sucesión de Fibonacci
var num1 = 0;
var num2 = 1;

var N = prompt("Introduce un número: ");
var numero = 0;

while(numero < N){
        numero= (num1 + num2);
        num1 = num2;
        num2 = numero; 
}
alert("El número anterior a " + N + " es: " + num1 +"\n" + "El número siguiente a " + N + " es: " + (num1 + num2) +"\n");