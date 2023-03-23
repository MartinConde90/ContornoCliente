window.addEventListener("load", mostrarInicio,false);
var lista;
var contadorEquipo = 0;
let contador = 0;
function mostrarInicio(){

    let x = document.getElementById("lista"); //id div lista

    x.innerHTML="<label>Lista de jugadores</label>"
    x.innerHTML+="<select id='listajugadores'></select>"

    lista = document.getElementById("listajugadores");

    
    document.getElementById("listajugadores").addEventListener("click", enviar, false);

    for(let i=0; i< jugadores.length; i++){
        
        if(!jugadores[i][3]){
        let opcion = new Option(jugadores[i][0]+','+jugadores[i][1], i,false,false);
        lista.add(opcion);
       
        }
    }
    lista.size =lista.length;
    lista.title = 'El jugador que escojas con clic se irá al Equipo: ' + nombresEquipos[contadorEquipo];


    let y = document.getElementById("equipos"); //id div equipos

    for(let x=0; x<jugadores.length; x++){
        if(jugadores[x][3]){
            y.innerHTML += "<label style='text-align: center'>"+ "Equipo: "+ nombresEquipos[contador] +"</label>";
            let tabla = document.createElement("table");
            tabla.id = contador;
            let tr = document.createElement("tr");

            let th1 = document.createElement("th");
            let text1 = document.createTextNode("Nombre");

            let th2 = document.createElement("th");
            let text2 = document.createTextNode("DNI");

            let th3 = document.createElement("th");
            let text3 = document.createTextNode("Fecha de Nacimiento");

            th1.appendChild(text1);
            th2.appendChild(text2);
            th3.appendChild(text3);

            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);

            tabla.appendChild(tr);

            tr = document.createElement("tr");
 
            td = document.createElement("td");
            td.style.background = "rgb(255,255,0)";
            text = document.createTextNode(jugadores[x][0]);
            td.appendChild(text);
            tr.appendChild(td);
        
            td = document.createElement("td");
            td.style.background = "rgb(255,255,0)";
            text = document.createTextNode(jugadores[x][1]);
            td.appendChild(text);
            tr.appendChild(td);
        
            td = document.createElement("td");
            td.style.background = "rgb(255,255,0)";
            text = document.createTextNode(jugadores[x][2].replace(/,/g, "/"));
            td.appendChild(text);
            tr.appendChild(td);
 
            tabla.appendChild(tr);
    
            y.appendChild(tabla);
            

            equipos.push(new Equipo(nombresEquipos[contador],jugadores[x][0]))
            equipos[contador].addJugador(jugadores[x][0]);
            contador++;
        }
    }
console.log(equipos);

}

function enviar(){

    let selectJugadores=lista;
    let elemento = selectJugadores[selectJugadores.selectedIndex];
    
            let tabla = document.getElementById(contadorEquipo);
            tr = document.createElement("tr");

            td = document.createElement("td");
            text = document.createTextNode(jugadores[elemento.value][0]);
            td.appendChild(text);
            tr.appendChild(td);

            td = document.createElement("td");
            text = document.createTextNode(jugadores[elemento.value][1]);
            td.appendChild(text);
            tr.appendChild(td);

            td = document.createElement("td");
            text = document.createTextNode(jugadores[elemento.value][2].replace(/,/g, "/"));
            td.appendChild(text);
            tr.appendChild(td);

            tabla.appendChild(tr);

            

            selectJugadores.remove(selectJugadores.selectedIndex);
            lista.size =lista.length;

            equipos[contadorEquipo].addJugador(jugadores[elemento.value][0]);
            contadorEquipo++;
            
        if(contadorEquipo == equipos.length){
            contadorEquipo=0;
        }
        if(lista.size==0){
            document.getElementById("lista").style.visibility = "hidden";
        }
        lista.title = 'El jugador que escojas con clic se irá al Equipo: ' + nombresEquipos[contadorEquipo];
}


//almacena todos los jugadores que formarán los equipos
//cada fila de la tabla contiene los datos de un jugador
//los datos de cada jugador son: 
//  nombre
//  DNI
//  fecha de nacimiento (con formato yyyy,mmm,dd)
//  booleano (que indica si es Capitán de equipo 
var jugadores=[
		["Liria Gómez","11111111A","2000,feb,28",true],
		["Eloy Vázquez","12111111A","2003,mar,23",false],
		["Adrián Gómez","11311111A","2004,abr,22",false],
		["Josué Dopico","11141111A","2001,oct,21",true],
		["Alberto Vázquez","11115111A","1999,jun,10",true],
		["Iván Morgade","11111611A","2000,abr,30",false],
		["Óscar González","11111171A","2001,jun,1",false],
		["Diego Oliveira","11111118A","2002,may,2",true],
		["Diego García","21111111A","2002,abr,28",false],
		["Juanjo Dapena","31111111A","2003,oct,24",false],
		["Iago Aguilar","41111111A","2003,abr,25",true],
		["Borja Ferreiro","51111111A","2000,may,27",false],
		["Daniel Gil","61111111A","2001,abr,28",false],
		["Xián García","71111111A","2001,abr,20",false],
		["Pablo Guzmán","81111111A","2000,jun,18",false],
		["Alexis Martínez","91111111A","2000,abr,11",false],
		["Iván Rodríguez","11311111A","2004,jun,22",false],
		["Erik Yáñez","1141111A","2004,may,28",false],
		["Mikael Prada","11511111A","2000,abr,11",false],
		["Miguel Calleja","16111111A","2000,ene,15",false]
];

var nombresEquipos=["Los invencibles",
                    "Los terremotos",
                    "Los grandes reservas",
                    "Los tira y afloja",
                    "Los que van y no vuelven",
                    "Los que no fían",
                    "Los vete tú a saber por qué están aquí",
                    "Los de aquí y los de allá",
                    "Los ancianos",
                    "Los tramposos",
                   ]
var equipos=[];



//objeto de usuario
//almacena los datos de un equipo
function Equipo(nombre,capitan,jugadores){
    //propiedades
    this.nombre=nombre||"";
    this.capitan=capitan||"";
    //se almacenarán los datos que provienen del array de personas
    this.jugadores=[]||jugadores.concat([]);
    //métodos
    //añadir un jugador a la lista de jugadores de este equipo
    //recibe
    //  jugador- array con los datos de un jugador en el mismo formato que el array jugadores
    this.addJugador=function (jugador){this.jugadores.push(jugador);};
    //calcula la edad media aproximada de los jugadores de este equipo teniendo en cuenta para el cálculo solo el año de nacimiento
    this.calcularMediaEdad=function(){
        let sumaAnos=0;
        let anoActual=new Date().getFullYear();
        //recorremos jugadores
        for (let nJug=0;nJug<this.jugadores.length;nJug++){
            //sumo los años
            sumaAnos+=+this.jugadores[nJug][2].split(",")[0];
        }
        return (anoActual-sumaAnos/this.jugadores.length);
    };
}