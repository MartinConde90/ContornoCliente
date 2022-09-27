//Hacer 4, 5 y 6 en el mismo ejercicio.
var num= prompt("Introduce un número: ",)

var numeros = "";
var suma= 0;
for(i=1; i<=num;i++){
    numeros += "\n" + i;
    suma += i;
}

alert(numeros);
confirm(suma);
alert(suma/num);