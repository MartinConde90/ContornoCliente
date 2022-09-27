// Visualizar la media de los N primeros números naturales.
var num= prompt("Introduce un número: ",)

var cadena = 0;
for(i=1; i<=num;i++){
    cadena += i;
}
alert(cadena/num);