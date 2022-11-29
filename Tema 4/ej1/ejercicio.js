
//var persona = prompt("Introduce 'apellidos, nombre'");
//inválidos
 //  var persona = "";
 //  var persona = "          ";
 // var persona = "      Julio";
 //  var persona = "Julio,";
 //  var persona = "Julio,      ";
 //  var persona = ",      Julio";
 //  var persona = "   ,     ";
 //  var persona = "      Ramírez   ,   González      ,      Julio    Luis     ";
 
//válidos pero no depurados
 //  var persona = "      Ramírez      González      ,      Julio    Luis     ";
 //  var persona = " j    Ramírez       ,Julio    Luis     ";
 //  var persona = "      R      , j l ";
 
//válidos depurados no palíndromo en sus iniciales
 //  var persona = "Ramírez, Julio";
 //  var persona = "Ramírez G, Julio J";
 
//válido depurado y palíndromo en sus iniciales
 //  var persona = "Ramírez, Ramón";
 	 var persona = "Rodríguez Álvarez, Alberto Ramón";
 //  var persona = "De Ramírez González dios, Domingo Gerardo Rencarnación";


var posicion = persona.search(",");

function coma(persona){
    let mensaje="";
    
    //EJERCICIO 1
    if(posicion==-1){
        mensaje = "Invalido";
        return mensaje;
    };
    if(persona.substring(posicion+1,persona.length).includes(",")){
        mensaje = "Invalido";
        return mensaje;
    }
    
    if(persona.substring(0,posicion).trim()=="" && persona.substring(posicion+1,persona.length-1).trim()==""){
        mensaje = "Se dejaron en blanco nombre y apellidos";
        return mensaje;
    }
    if(persona.substring(0,posicion).trim()==""){
        mensaje = "Se dejaron en blanco los apellidos";
        return mensaje;
    }
    if(persona.substring(posicion+1,persona.length).trim()=="" || persona[persona.length]==","){
        mensaje = "Se dejó en blanco el nombre";
        return mensaje;
    }

    return persona;
}

function espacios(persona){
    let depurada = persona.trim();
    let array = depurada.split(/\s+/);
    let cadenanew = "";
    //alert(array);

    for(let i=0; i<array.length;i++){
        if(array[i]==","){
            cadenanew+=array[i]+ " ";
        }else if(i==array.length-1){
            cadenanew+= array[i];
        }else if(array[i+1]!=","){
            cadenanew+= array[i];
            cadenanew+= " ";
        }
        else{
            cadenanew+= array[i];
        }
    }
    return cadenanew;
}

function saludo(persona){
    let nome = persona.substring(posicion+2, persona.length);

    let array = nome.split(" ");
    let mensaje = "Hola " + array[0];
    return mensaje;
}

function longitud(nome){
    let cadena = nome.replace(",","");
    return(cadena.length-1);
}

function minusculas(nome){
    let min = nome.toLowerCase();
    return min; 
}

function mayusculas(nome){
    let min = nome.toUpperCase();
    return min; 
}

function longitudNombre(nome){

    let nombre = nome.substring(posicion+1,persona.length).trim();

    return nombre.length;
}

function longitudApellidos(nome){
    let nombre = nome.substring(0,posicion).trim();

    return nombre.length;
}


function iniciales(nome){
    let nombre = nome.substring(posicion+1,persona.length).trim().split(" ");
    let apellidos = nome.substring(0,posicion).split(" ");
    let inici = "";

    let completo = nombre.concat(apellidos);

    completo.forEach(element => inici+=element[0].toUpperCase()+".");
    return inici;
}

function encriptar(nome){
    let nombre = nome.substring(posicion+1,persona.length).trim().split(" ");
    let apellidos = nome.substring(0,posicion).split(" ");
    

    let completo = nombre.concat(apellidos);

    completo.forEach( function(valor, indice){
        completo[indice] = '*'.repeat(valor.length);
        }
    );
    return completo.join(" ");

}

function palindromo(nome){
    while(nome!==nome.replace(".","")){
        nome = nome.replace(".","");
    }
    let vocales = ["A","E","I","O","U"];
    let acentuadas = ["Á","É","Í","Ó","Ú"];

    for(let i =0; i< nome.length; i++){
        if(acentuadas.includes(nome[i])){
            nome = nome.replace(nome[i], vocales[acentuadas.indexOf(nome[i])]);
        }
    }

    const strReversed = nome.split("").reverse().join("");
    return strReversed === nome ? "Si" : "No";
}


//Ejercicio 1
//alert(coma(persona));
//Ejercicio 3 sin depurar
//alert(coma(persona));
//Ejercicio 3 depurado
//alert(espacios(persona));
//Ejercicio 4
//alert(saludo(espacios(persona)));
//Ejercicio 5
//alert(longitud(espacios(persona)));
//Ejercicio 6
//alert(minusculas(espacios(persona)));
//Ejercicio 7
//alert(mayusculas(espacios(persona)));
//Ejercicio 8
//alert(longitudNombre(espacios(persona)));
//Ejercicio 9
//alert(longitudApellidos(espacios(persona)));
//Ejercicio 10
//alert(iniciales(espacios(persona)));
//Ejercicio 11
//alert(encriptar(espacios(persona)));
//Ejercicio 12
alert(palindromo(iniciales(espacios(persona))));