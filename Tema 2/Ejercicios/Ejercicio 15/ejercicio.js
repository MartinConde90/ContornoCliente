//La sucesión de Fibonacci comienza con los números 0 y 1 y, a partir de éstos, cada término es la suma de los dos anteriores.
//0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89 , 233 , 377 , 610 , 987 , 1597 … 
//Visualizar los N primero términos de la sucesión de Fibonacc

var num1 = 0;
var num2 = 1;

var N = prompt("Introduce un número: ");
var secuencia = "";

secuencia += num1 + "\n";
secuencia += num2 + "\n";

for(i =3; i<= N; i++){
    secuencia += (num1 + num2) + "\n";
    var numero = num1;
    num1 = num2;
    num2 += numero; 
}
alert(secuencia);