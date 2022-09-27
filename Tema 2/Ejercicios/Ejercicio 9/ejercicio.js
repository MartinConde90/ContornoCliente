//Visualizar si un número N es un número primo.
var num = prompt("Introduce un número: ",);
var acum = 0;
for(i=2; i<=num/2; i++){
    if((num%i)==0 ){
        acum++
    }
}
if(acum==0){
    alert("El número " + num + " es primo");
}
else(alert("El número " + num + " no es primo"));