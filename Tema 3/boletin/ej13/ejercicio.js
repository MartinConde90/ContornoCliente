//Hacer una función que diga el número de alumnos que están matriculados en un módulo concreto.

var horarioAlum = {
    "DAWDU201":new Array("DEWA","DEWE","DEWI"),
    "DAWDU202":new Array("DEWO","DEWU","DAWA"),
    "DAWDU203":new Array("DEWE","DAWA"),
    "DAWDU204":new Array("DEWI","DEWO","DEWA"),
    "DAWDU205":new Array("DEWA","DEWE","DEWI"),
    "DAWDU206":new Array("DEWO","DEWU","DAWA"),
    "DAWDU207":new Array("DEWA","DEWE","DEWI"),
    "DAWDU208":new Array("DEWE","DAWA"),
    "DAWDU209":new Array("DEWA","DEWE","DEWI"),
    "DAWDU210":new Array("DEWE","DAWA"),
    "DAWDU211":new Array("DEWO","DEWU","DAWA"),
    "DAWDU212":new Array("DEWE","DAWA")
}

function matriculados(modulo){
    let contador = 0;

    for(let alumno in horarioAlum){
        if(horarioAlum[alumno].includes(modulo)){
            contador++;
        }
    }
    return contador;
}

alert(matriculados("DEWO"));



