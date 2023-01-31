window.addEventListener("load", mostrarInicio,false);

function mostrarInicio(){

    document.getElementById("operar").addEventListener("click", accion, false);
    document.getElementById("misFrutas").addEventListener("click", autochecked, false);
    document.getElementById("nuevaFruta").addEventListener("click", seleccionar, false);
}

function seleccionar(){
    var input = document.getElementById('nuevaFruta');
    input.focus();
    input.select();
}

function autochecked(){
    let objFrutas=document.getElementById("misFrutas");// id del select que contiene las frutas
    let elementos = objFrutas.selectedOptions;//guarda un array con las selecciones
    if(elementos.length!=0){
        document.getElementById("borrar").checked=true;//marcamos la opcion borrar como checked
    }
}

function accion(){
    if(document.getElementById("añadir").checked){
        añadir();
    }
    if(document.getElementById("borrar").checked){
        borrar();
    }
}

function añadir(){
    let objFrutas=document.getElementById("misFrutas");
    let nuevaFruta=document.getElementById("nuevaFruta").value;

    if(acentuada(nuevaFruta.toUpperCase(),objFrutas)){
        let option = document.createElement("option");
            option.text = nuevaFruta;
            option.value = nuevaFruta;
            objFrutas.add(option);
    }else{
        alert("fruta ya existente");
    }   
}

function acentuada(nueva, existentes){
    let vocales = ["A","E","I","O","U"];
    let acentuadas = ["Á","É","Í","Ó","Ú"];
    
    let existentesMod=[];
    let exist="";
    let bool = true;

    for(let i =0; i< nueva.length; i++){
        if(acentuadas.includes(nueva[i])){
            nueva = nueva.replace(nueva[i], vocales[acentuadas.indexOf(nueva[i])]);
        }
    }

    for(let j =0; j<existentes.length; j++){
        exist = existentes[j].value;
        for(let n=0; n<existentes[j].value.length; n++){
            if(acentuadas.includes(existentes[j].value[n].toUpperCase())){
                exist = existentes[j].value.replace(existentes[j].value[n], vocales[acentuadas.indexOf(existentes[j].value[n].toUpperCase())]);
            }
        }
        existentesMod[j]=exist.toUpperCase();
    }

    console.log(existentesMod);
    console.log(nueva);

    for(let p=0; p<existentesMod.length; p++){
        if(nueva == existentesMod[p]){
            bool = false;
        }
    }

    return bool;
}

function borrar(){

    let text = "Seguro que quieres eliminar?\n";
    let objFrutas=document.getElementById("misFrutas");// id del select que contiene las frutas
    for(let i=0; i<objFrutas.length ; i++){//recorremos el select al revés, ya que al eliminar uno, el siguiente acupa su lugar
        if(objFrutas[i].selected){ //si alguna de las opciones está seleccionada
            text += objFrutas[i].value+"\n";
        }
    }

    if (confirm(text) == true) {
        for(let i =objFrutas.length-1; i>=0 ; i--){//recorremos el select al revés, ya que al eliminar uno, el siguiente acupa su lugar
            if(objFrutas[i].selected){ //si alguna de las opciones está seleccionada
                objFrutas.remove(i);//borramos esa opcion del select
            }
        }
    } 
    
}

//tildes y minusc mayusc
/*
let vocales = ["A","E","I","O","U"];
    let acentuadas = ["Á","É","Í","Ó","Ú"];
    let strReversed;

    while(nome!==nome.replace(".","")){
        nome = nome.replace(".","");
    }
    
    for(let i =0; i< nome.length; i++){
        if(acentuadas.includes(nome[i])){
            nome = nome.replace(nome[i], vocales[acentuadas.indexOf(nome[i])]);
        }
    }
*/