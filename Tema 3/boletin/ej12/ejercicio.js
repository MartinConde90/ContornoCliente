var clases = [
    ["DEWA","DEWE","DEWI"],
    ["DEWO","DEWU","DAWA"],
    ["DAWA","DEWE","DEWI"],
    ["DEWE","DEWA","DEWU"],
    ["DEWI","DEWO","DEWE"],
    ["DEWU","DEWI","DEWO"]
]
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

function asiste(alumno, dia){
    for(var i = 0; i<horarioAlum[alumno].length; i++){
        for(var e = 0; e<clases.length; e++){
            if(horarioAlum[alumno][i] == clases[e][dia]){
                return true;
            }
        }
    }
    return false;
}

alert(asiste("DAWDU203", 2));



