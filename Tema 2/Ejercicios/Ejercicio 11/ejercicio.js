//Visualizar los N primeros números primos, su suma y su media.
var cant = prompt("Introduce un número: ");

var acum = 0;
var num = 2;
var cadena = "";
var contador=0;

var suma = 0;
while(acum < cant){
    for(i=2; i<=num/2; i++){
        if((num%i)==0 ){
            contador++
        }
    }
    if(contador==0){
        cadena += "\n" + num;
        suma += num;
        acum++;
    }
    contador = 0;
    num++;
}
alert(cadena);
confirm(suma);
alert(suma/cant);