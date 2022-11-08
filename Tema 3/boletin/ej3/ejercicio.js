var profesores = new Array("Juan","Chancas","Jorge","Conchi","Skater","Chema","Luis","Buyo","Carlos","Chancas");
var modulo = new Array("diw","dew","daw","dow","duw","ping","pang","peng","pong","Code");
var alumnos = new Array(15,12,10,13,19,18,17,21,26,28);

var nom = prompt("Introduce el nombre del profesor a buscar: ",);

var modulosProf = new Array();
var contador=0;
var numalumnos=0;
var salida = "";

if(profesores.includes(nom)){
    alert("Si, " + nom + " es profesor de algún módulo");

    for(i=0; i<= profesores.length-1; i++){
        if(profesores[i] == nom){
            contador++;
            modulosProf.push(modulo[i]);
            numalumnos+= alumnos[i];

        }
    }
    salida += nom + " imparte " + contador +" "+ (contador>1?"modulos,":"modulo,")+ " " + modulosProf;
    
    salida +=". Tiene " + numalumnos + " alumnos ,tiene una media de alumnos de " + numalumnos/contador;

    var numax = Math.max(...alumnos);

    salida+= " ." + profesores[alumnos.indexOf(numax)] + " es el profesor con mas alumnos, tiene " + numax + " en el módulo " + modulo[alumnos.indexOf(numax)];
    
    alert(salida);
}else{
    alert("Nombre introducido: " +nom+ "\n" + " Este profesor no consta en la base de datos")
}