// Tenemos una hoja con datos de nombres de algunas ciudades y tres temperaturas 
// cogidas a lo largo del día. Visualizar una lista con el nombre, las temperaturas y la 
// media de las temperaturas de cada ciudad. Al final del mensaje deberá indicar el 
// número de ciudades que fueron incluidas y la temperatura media de todas ellas.
var ciudad = prompt("Introduce el nombre de una ciudad: ");
while(parseInt(ciudad)==ciudad || typeof(ciudad)!= 'string' || ciudad == "" || ciudad.trim()=="" ){
    ciudad = prompt("Introduce de nuevo el nombre de una ciudad: ");
}


var texto = "";
var contador = 0;
var mediatotal =0;
while(ciudad!= "*"){

    contador++;
    texto += "Ciudad-> " + ciudad + " Temperaturas->";
    var suma = 0;

    for(i=1; i<=3; i++){
        var temp = prompt("Introduce la temperatura " + i+ " para " + ciudad);
        while(parseInt(temp)!=temp){
            temp = prompt("Introduce de nuevo la temperatura " + i+ " para " + ciudad);
        }
        texto += temp + " ";
        suma += +temp;
    }

    texto += "Media temperaturas: " + (suma/3) + "\n";
    mediatotal+= suma/3;

    ciudad = prompt("Introduce el nombre de una ciudad: ");
    while(parseInt(ciudad)==ciudad || typeof(ciudad)!= 'string' || ciudad == "" || (ciudad.replace(/ /g,'')).length == 0){
        ciudad = prompt("Introduce de nuevo el nombre de una ciudad: ");
    }
    
}
alert(texto + "\n" + "La media total de la temperatura de las ciudades es -> " + mediatotal/contador);