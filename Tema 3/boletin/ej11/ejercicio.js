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

function matricula(alumno, modulo){
    var matricula = false;
    for(var i=0; i< horarioAlum[alumno].length; i++){
        if(horarioAlum[alumno][i]==modulo){
            matricula= true;
        }
    }
    return matricula;
}

alert(matricula("DAWDU203", "DEWE"));



