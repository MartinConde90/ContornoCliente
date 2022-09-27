//Visualizar los 10 primero números primos.
var acum = 0;
var num = 2;
var cadena = "";
var contador=0;

while(acum < 10){
    for(i=2; i<=num/2; i++){
        if((num%i)==0 ){
            contador++
        }
    }
    if(contador==0){
        cadena += "\n" + num;
        acum++;
    }
    contador = 0;
    num++;
}
alert(cadena);