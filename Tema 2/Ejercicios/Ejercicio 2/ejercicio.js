//Visualizar los 10 primeros números pares
var cadena = "";
var num=0;
var acum=0;

while(acum<10){
    if(num%2==0){
        cadena += "\n" + num;
        
        acum++;
    } 
    num++;
}
alert(cadena);