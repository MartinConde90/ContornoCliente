window.addEventListener("load", mostrarInicio,false);

var aficiones=["Leer","Dormir","Cine","Videojuegos","Fúbol","Tenis","Nadar","Bucear","Senderismo","Escalada","Esquiar","Pescar"];

function mostrarInicio(){
    let x = document.getElementById("aficiones");
    
    for(let i=0; i< aficiones.length; i++){
        let option = document.createElement("option");
        option.text = aficiones[i];
        option.value = aficiones[i];
        x.add(option);
    }

    document.getElementById("pasaSeleccionados").addEventListener("click", enviar1, false);
    document.getElementById("regresaSeleccionados").addEventListener("click", enviar2, false);

    document.getElementById("pasaTodos").addEventListener("click", enviar3, false);
    document.getElementById("regresaTodos").addEventListener("click", enviar4, false);

}

function enviar(origen,destino){
    let objAficiones=document.getElementById(origen);// id del select que contiene la aficiones

    let elementos = objAficiones.selectedOptions;//guarda un array con las selecciones
    if(elementos.length==0){
        alert("No se han seleccionado opciones")
    }else{
        let x = document.getElementById(destino);//id del select donde queremos enviar las aficiones seleccionadas
        let contador = 0;
        for(let i=elementos.length-1; i>= 0; i--){ //recorremos el array de las selecciones,al reves
            x.add(elementos[i],x.length-contador); 
            //añadimos el último elemento del array en la posicion length-contador, que va a ser la que era la última antes de comenzar
            //a añadir
            contador++;
        } 
    };
      
}

function enviar1(){
    enviar("aficiones","aficionesSeleccionadas");
}
function enviar2(){
    enviar("aficionesSeleccionadas","aficiones");
}

function enviarAll(origen,destino){
    let objAficiones=document.getElementById(origen);// id del select que contiene la aficiones

    let elementos = objAficiones.options;//guarda un array con todas las opciones

    if(elementos.length==0){
        alert("No se ")
    }else{
        let x = document.getElementById(destino);//id del select donde queremos enviar las aficiones seleccionadas
        let contador = 0;
        for(let i=elementos.length-1; i>= 0; i--){ //recorremos el array con todos los elementos,al reves, ya que el quitar uno, el siguiente ocupa su lugar
            x.add(elementos[i],x.length-contador); 
            //añadimos el último elemento del array en la posicion length-contador, que va a ser la que era la última antes de comenzar
            //a añadir
            contador++;
        } 
    };
}

function enviar3(){
    enviarAll("aficiones","aficionesSeleccionadas");
}
function enviar4(){
    enviarAll("aficionesSeleccionadas","aficiones");
}


