// Visualizar la media de una secuencia de números introducidos por el usuario. Para saber cuándo finalizar se introduce un *.
var contador = 0;
var num = 0;
var suma = 0;

do{
    num = prompt("Introduce un número: ");
    if(num != "*"){
        suma += +num;
        contador++;
    }
    

 } while(num!="*");
alert(suma/contador);