//Visualizar si 327 es un número primo.
var num = 327;
var acum = 0; //contador de numero de divisores
for(i=2; i<=327/2; i++){
    if((num%i)==0 ){
        acum++
    }
}
if(acum==0){
    alert("El número 327 es primo");
}
else{alert("El número 327 no es primo")};