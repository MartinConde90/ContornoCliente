/*"Introducir un nombre completo por teclado con el formato: apellidos, nombre
El programa debe avisar del posible error encontrado:
    a. Se dejó en blanco el nombre o los apellidos
    b. No hay la coma de separación o a hay más de una."
*/

var persona = prompt("Introduce 'apellidos, nombre'");

function coma(persona){
    let mensaje="todo ok";
    posicion = persona.search(",");

    //EJERCICIO 1
    if(posicion==-1){
        mensaje = "No se ha introducido la coma";
        return mensaje;
    };
    if(persona.substring(posicion+1,persona.length).includes(",")){
        mensaje = "Has introducido mas de una coma";
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
    let array = depurada.split(" ");
    let cadenanew = "";
    alert(array);

    for(var i=0; i<array.length;i++){
        if(array[i]==","){
            cadenanew+=array[i]+ " ";
        }else if(i==array.length){
            cadenanew+= array[i];
        }else if(array[i]!=""){
            cadenanew+= array[i];
            cadenanew+= " ";
        }
    }
    return cadenanew;
}

function saludo(persona){
    posicion = persona.search(",");
    let nome = persona.substring(posicion+1, persona.length);
    
    return nome;
}

//Ejercicio 1
//alert(coma(persona));
//Ejercicio 3 sin depurar
//alert(persona);
//Ejercicio 3 depurado
//alert(espacios(persona));
//Ejercicio 4
alert(saludo(espacios(persona)));