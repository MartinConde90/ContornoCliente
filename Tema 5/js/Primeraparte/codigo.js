//expresion_regular_dni = /^\d{6-8}[a-zA-Z]$/;
var meses = {
    "ene":1,
    "feb":2,
    "mar":3,
    "abr":4,
    "may":5,
    "jun":6,
    "jul":7,
    "ago":8,
    "sep":9,
    "oct":10,
    "nov":11,
    "dic":12
};

var personas = [
    ["Martin Conde Grande","45612678H","1990/dic/19",true],
    ["Brandon Firu Lais","12389746L","2013/sep/09",false],
    ["Dunker Conde Rosmon","09825364Y","1995/feb/23",false]
];

var equipos = [];

function Equipo(nombreEquip=null,nombreCap=null,jugadores=null){
    this.nombreEquipo = nombreEquip;
    this.nombreCapitan = nombreCap;
    this.jugadores = jugadores.concat([]);

    this.mediaEdad = function(jugadores){
        let suma=0;
        for(let i=0; i<jugadores.length;i++){
            suma+= new Date().getFullYear() - parseInt(jugadores[i][2].substring(0,4));
        }
        return (suma/jugadores.length);
    };

    this.añadirJugador = function(nombre, dni, nacimiento, rol=false){
        if(rol == "capitan"){
            rol=true;
        }
        var jugador = [nombre,dni,nacimiento,rol];
        this.jugadores.push(jugador);
    }

}

let equipo = new Equipo("pacos","martin", personas);

console.log(equipo.mediaEdad(personas));

//console.log(equipo.jugadores);

//equipo.añadirJugador("Goonie Cara Mocho", "12376098I","1990/mar/15");

//console.log(equipo.mediaEdad(personas));




var nuevoJugador = prompt("Introduce los datos del nuevo jugador con el formato:"+"\n" + "'nombre apellido1 apellido2,"+"\n" + " dni,"+"\n" + " año/3PrimerasInicialesMes/dia,"+"\n" + "capitan(en caso de serlo)'");

let nombre;
let dni;
let fecha;
let capitan;

while(nuevoJugador!='*'){
    
    var indices = [];

    var correcto = true;

    for(let i=0; i<nuevoJugador.length;i++){
        if(nuevoJugador[i] === ','){
            indices.push(i);
        } 
    }
    
    nombre = nuevoJugador.substring(0,indices[0]);
    dni = nuevoJugador.substring(indices[0]+1,indices[1]);
    fecha = nuevoJugador.substring(indices[1]+1,indices[2]);

    if(indices.length == 3){
        capitan = nuevoJugador.substring(indices[2]+1,indices[3]);
    }
    else{
        capitan = false;
    }
    

    let expresiondni = /^\d{6}|\d{8}[a-zA-Z]$/;
    if(expresiondni.test(dni) == false){
        correcto = false;
    }

    let repetido = true;

    for(let i=0;i<personas.length;i++){
        if(personas[i][1]==dni){
            repetido = false;
        }
    }

    if(repetido && correcto){
        equipo.añadirJugador(nombre,dni,fecha,capitan);
        //var datosjugadores = [nombre,dni,fecha,capitan];
        //personas.push(datosjugadores);
    }else{
        alert("Error de formato en el dni o dni repetido");
    }

    var nuevoJugador = prompt("Introduce los datos del nuevo jugador con el formato:"+"\n" + "'nombre apellido1 apellido2,"+"\n" + " dni,"+"\n" + " año/3PrimerasInicialesMes/dia,"+"\n" + " true para saber si es capitan'");
    nombre="";
    dni="";
    fecha="";
    capitan="";
}
console.log(equipo.jugadores);
console.log(personas);