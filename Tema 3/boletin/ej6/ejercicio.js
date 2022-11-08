var alumnos = {"DAWDU201":"Roberto",
               "DAWDU202":"Gersio",
               "DAWDU203":"Martin",
               "DAWDU204":"Jorge",
               "DAWDU205":"Groba",
               "DAWDU206":"Clara",
               "DAWDU207":"Meno",
               "DAWDU208":"Tron",
               "DAWDU209":"Kresta",
               "DAWDU210":"Compras",
               "DAWDU211":"Yk4ro",
               "DAWDU212":"CalvoNazi"
};
var modulo = { "DEWA":"Juan",
               "DEWE":"Chancas",
               "DEWI":"Jorge",
               "DEWO":"Chancas",
               "DEWU":"Conchi",
               "DAWA":"Marta"
};
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

var nom = prompt("Introduce el nombre del alumno a buscar: ",);
var salida ="";
var horario=[[],[],[],[],[],[]];

if(alumnos[nom]!= undefined){
    salida+="Horario de " + alumnos[nom] + "\n";
    //alert(horarioAlum[nom]);

    for(i=0;i<=horarioAlum[nom].length-1; i++){
        for(j=0;j<=clases.length-1; j++){
            for(k=0;k<=clases[j].length-1;k++){
                if(clases[j][k]==horarioAlum[nom][i]){
                    //console.log(horarioAlum[nom][i]);
                    horario[j][k]=horarioAlum[nom][i]+"("+modulo[horarioAlum[nom][i]]+")";
                }
                if(horario[j][k]==undefined){
                    horario[j][k]="---";
                }
            }
        }
    }
    for(j=0;j<=horario.length-1; j++){
        for(k=0;k<=horario[j].length-1;k++){
            salida+=horario[j][k]+ " ";
        }
        salida+="\n";
    }
    alert(salida);
}

