//El 12 pero visualizar en diferentes líneas los números introducidos por el usuario y su media.

var contador = 0;
var num = 0;
var suma = 0;
var cadena = "";
do{
    num = prompt("Introduce un número: ");
    if(num != "*"){
        suma += +num;
        contador++;
        cadena += "\n" + num;
    }
    

 } while(num!="*");
alert("La media de la suma de los números es: " + (suma/contador));
confirm(cadena);
