//Desarrollar una función que reciba un texto y lo devuelva con la inicial en mayúscula y el resto en minúscula.
//recibe
//  texto- cualquier de caracteres
//retorna
//  texto- modifacdo el original con la inicial mayúscula y el resto en minúscula
function ponerMayusculaInicial(texto){
    return texto[0].toUpperCase()+texto.substr(1).toLowerCase();
}

//función que crea un array de propietarios a travñes de los datos almacenados en el arrauy de mascotas
//recibe
//  mascotas-array con los datos de las mascotas
//         Ej.: ["Perro",7,"Max","Juan"]
//function Propietario(nombrePropietario,tipoMascota,edadMascota,nombreMascota){
function crearPropietarios(mascotas){
    var propietarios=[];
    for(var nMascota=0;nMascota<mascotas.length;nMascota++){
        propietarios.push(new Propietario(mascotas[nMascota][3],mascotas[nMascota][0],mascotas[nMascota][1],mascotas[nMascota][2]));
    }
    return propietarios;
}

//función que recibe un texto y me dice si tiene o nop el formato correcto
//recibe
//   datosNuevaMascota-texto que debería tener el formato xxx,xxx,xxx,nnn
//                                              nnn es un valor entre 1 y 175
//                                              xxx es una cadenna de caracteres
//retorna
//  0-si respeta el formato
//  1-si no tiene el nº de comas adecuado
//  2-si la edad no está comprendida entre 1 y 175
//  3-si todos los datos están vacíos
//  4-si se dio a Aceptar dejando en blanco
function comprobarFormato(datosNuevaMascota){
    var patron=/^([1-9]|[1-9]\d|1[0-6]\d|17[0-5])$/;
    if (datosNuevaMascota.trim()=="") return 4;
    if (datosNuevaMascota.split(",").length!=4) return 1;
    //el control de la edad hay que hacerlo con expresión regular
    if (datosNuevaMascota.split(",")[0].trim()==""&&
        datosNuevaMascota.split(",")[1].trim()==""&&
        datosNuevaMascota.split(",")[2].trim()==""&&
        datosNuevaMascota.split(",")[3].trim()=="") return 3;
    if (datosNuevaMascota.split(",")[3].trim()!="" && !patron.test(datosNuevaMascota.split(",")[3].trim())) return 2;
    return 0;
}

//función que ordena ascendentemente un array bidimensional por un número de columna
//recibe
//  array- el array ordenado
//  nCol- número de columna en el que está el campo a ordenar
//  tipo- tipo de ordenación 0-alfábetica, 1-numérica
//retorna
//  arrayOrdenado
function ordena(array,nCol,tipo){
    let arrayOrdenado=array.concat([]);
    for (let i=0;i<arrayOrdenado.length-1;i++){
        for (let k=i+1;k<arrayOrdenado.length;k++){
            if (tipo==0) {
                if (arrayOrdenado[i][nCol]>arrayOrdenado[k][nCol]) {
                    let temp=arrayOrdenado[i].concat([]);
                    arrayOrdenado[i]=arrayOrdenado[k].concat([]);
                    arrayOrdenado[k]=temp;
                }
            } else {
                if (+arrayOrdenado[i][nCol]>+arrayOrdenado[k][nCol]) {
                    let temp=arrayOrdenado[i].concat([]);
                    arrayOrdenado[i]=arrayOrdenado[k].concat([]);
                    arrayOrdenado[k]=temp;
                }
            }
        }
    }
    return arrayOrdenado.concat([]);
}

//función que comprueba si existe ya una mascota
//recibe
//  datosNuevaMascota- texto con el formato [xxx],[xxx],[xxx],[nnn]
//retorna
//  true-si la mascota ya existe
//  false-en caso contrario
function existeMascota(datosNuevaMascota){
    //recorro el array de mascotas mientras no encuentre un duplicado
    var nMascota=0;
    while (nMascota<mascotas.length-1 && (
           datosNuevaMascota.split(",")[0].trim()!=mascotas[nMascota][3]||
           datosNuevaMascota.split(",")[1].trim()!=mascotas[nMascota][2]||
           datosNuevaMascota.split(",")[2].trim()!=mascotas[nMascota][0]||
           datosNuevaMascota.split(",")[3].trim()!=mascotas[nMascota][1]) 
          ){
        nMascota++;
    }
    return datosNuevaMascota.split(",")[0].trim()==mascotas[nMascota][3]&&
           datosNuevaMascota.split(",")[1].trim()==mascotas[nMascota][2]&&
           datosNuevaMascota.split(",")[2].trim()==mascotas[nMascota][0]&&
           datosNuevaMascota.split(",")[3].trim()==mascotas[nMascota][1];
}

//función que controla si faltan datos en la entrada del usuario y completa con los de la última mascota
//recibe
//  datosNuevaMascota- texto con el formato [xxx],[xxx],[xxx],[nnn]
//retorna 
//  datosNuevaMascota completados
function completarDatos(datosNuevaMascota){
    let partes=datosNuevaMascota.split(",");
    for (let i=0;i<partes.length;i++){
        partes[i]=partes[i].trim();
    }
    if (partes[0]=="") partes[0]=mascotas[mascotas.length-1][3] 
    else partes[0]=ponerMayusculaInicial(partes[0]);
    if (partes[1]=="") partes[1]=mascotas[mascotas.length-1][2] 
    else partes[1]=ponerMayusculaInicial(partes[0]);
    if (partes[2]=="") partes[2]=mascotas[mascotas.length-1][0] 
    else partes[2]=ponerMayusculaInicial(partes[0]);
    if (partes[3]=="") partes[3]=mascotas[mascotas.length-1][1] 
    else partes[3]=ponerMayusculaInicial(partes[0]);
    return partes.join(",");
}

//    ["Perro",7,"Max","Juan"],
// [Nombre del propietario],[Nombre de la mascota],[Tipo de mascota],[Edad de la mascota]
/*
Definir un objeto “Propietario” que permita almacenar los datos de un propietario de una mascota.
a. Con las siguientes propiedades:
i. Nombre del propietario
ii. Tipo de mascota que tiene. (Perro, Gato, Iguana, Cobaya….)
iii. Edad de su mascota.
iv. Nombre de su mascota.
b. Con los siguientes métodos:
i. Aquellos que permiten dar valor a sus propiedades.
ii. Aquellos que permiten obtener los valores de sus propiedades.
c. El objeto inicializa sus propiedades a través de sus argumentos
*/

function Propietario(nombrePropietario,tipoMascota,edadMascota,nombreMascota){
    //propiedades del objeto
    this.nombrePropietario=nombrePropietario;
    this.tipoMascota=tipoMascota;
    this.edadMascota=edadMascota;
    this.nombreMascota=nombreMascota;
    //métodos para establecer las propiedades
    this.setNombrePropietario=function(nombrePropietario){
        this.nombrePropietario=nombrePropietario;
    };
    this.setTipoMascota=function(tipoMascota){
        this.tipoMascota=tipoMascota;
    };
    this.setEdadMascota=function(edadMascota){
        this.edadMascota=edadMascota;
    };
    this.setNombreMascota=function(nombreMascota){
        this.nombreMascota=nombreMascota;
    };
    //métodos para retornar las propiedades
    this.getNombrePropietario=function(){
        return this.nombrePropietario;
    };
    this.getTipoMascota=function(){
        return this.tipoMascota;
    };
    this.getEdadMascota=function(){
        return this.edadMascota;
    };
    this.setNombreMascota=function(){
        return this.nombreMascota;
    };
}

/*Definir un array “mascotas” que almacena los datos de 5 mascotas. En dicho array, cada fila corresponde a
una mascota y cada columna corresponde a cada uno de los datos de cada mascota:
a. Tipo de mascota. (Perro, Gato, Iguana, Cobaya….)
b. Edad de la mascota (valor numérico comprendido entre 1 y 175).
c. Nombre de la mascota.
d. Nombre del propietario
*/
var mascotas=[
    ["Perro",7,"Max","Juan"],
    ["Gato",10,"Michu","Ana"],
    ["Iguana",4,"Petra","Clara"],
    ["Tarántula",2,"Luisa","Roberto"],
    ["Periquito",5,"Perignón","Trond"]
];

var errores=[
    [""],
    ["No respeta el número de ',' del formato"],
    ["La edad de la mascota no está comprendida entre 1 y 175"],
    ["Has dejado todos los datos en blanco. Al menos es obligatorio introducir uno de los datos."],
    ["Has pulsado Aceptar sin haber escrito ningún dato"]
];

var mascotasOrdenado;
/*
4. Crear un array “propietarios”, paralelo al de mascotas, a partir de los datos almacenados en el array
“mascotas”. Dicho array contendrá tantos objetos de tipo “Propietario” como mascotas haya en el array
“mascotas”.
*/
var propietarios=crearPropietarios(mascotas);

/*
Solicitar al usuario los datos para nuevas mascotas hasta que el usuario decida finalizar con un *:
a. El usuario debe introducir todos los datos de cada una de las mascotas de una sola vez con el
siguiente formato: [Nombre del propietario],[Nombre de la mascota],[Tipo de mascota],[Edad de la
mascota].
b. Controlar que no haya duplicidad mascotas. Es decir, no puede haber 2 mascotas con el mismo
nombre, edad, tipo y propietario.
c. Si se omite cualquiera de los datos se asumirá que coincide con el dato correspondiente a la última
mascota introducida. No se pueden omitir todos los datos ya que no puede haber mascotas
duplicadas.
d. El nombre del propietario, el nombre de la mascota y el tipo de mascota se podrán introducir en
mayúsculas y/o minúsculas, pero se almacenará con la inicial en mayúscula y el resto en minúsculas.
e. Controlar mediante el uso de una expresión regular que la edad de la mascota esté comprendida
entre 1 y 175 años.
f. El usuario deberá ser informado de los siguientes errores:
i. Se han omitido todos los datos.
ii. Se ha intentado cancelar.
iii. Se ha introducido una mascota duplicada.
iv. La edad de la mascota no está comprendida entre 1 y 175.
*/
var salida="";
var ano=new Date().getFullYear();
var mensaje="Introduce los datos de una nueva mascota con el siguiente formato:\n\n";
mensaje+="      [Nombre_propietario],[Nombre_mascota],[Tipo_mascota],[Edad_mascota]\n\n";
mensaje+="Los datos omitios serán obtenidos de la última mascota almacenada.\n\n";
mensaje+="Para finalizar introduce un *.";

//ENTRADA PROMPT:[Nombre del propietario],[Nombre de la mascota],[Tipo de mascota],[Edad de la mascota].
//OBJ PROPIETARIO: (nombrePropietario,tipoMascota,edadMascota,nombreMascota)
//ARRAY MASCOTAS:  ["Perro",7,"Max","Juan"],
var datosNuevaMascota=prompt(mensaje);
while (datosNuevaMascota!="*"){
    let mensajeError="";
    let nError=0;
    if (datosNuevaMascota==null){
        mensajeError="¡ Has pulsado el botón cancelar !\n\n";
    } else {
        nError=comprobarFormato(datosNuevaMascota);
        if (nError!=0){
            mensajeError="¡ "+errores[nError]+" !\n\n";
        } else {
            //si se omiten datos se completan con los de la ultima mascota
            datosNuevaMascota=completarDatos(datosNuevaMascota);
            //comprobar si existe ya la mascota
            if (existeMascota(datosNuevaMascota)) {
                mensajeError="¡ La mascota con datos: "+datosNuevaMascota+" ya existe !\n\n";
            } else {
                //aquí hay que añadir la mascota y el nuevo propietario
                let tipo=ponerMayusculaInicial(datosNuevaMascota.split(",")[2].trim());
                let nombre=ponerMayusculaInicial(datosNuevaMascota.split(",")[1].trim());
                let edad=+datosNuevaMascota.split(",")[3].trim();
                let propietario=ponerMayusculaInicial(datosNuevaMascota.split(",")[0].trim());
                if (confirm("Deseas añadir la mascota con los siguientes datos:\n\nNombre: "+nombre+"\nTipo: "+tipo+"\nEdad: "+edad+"\nNombre del propietario: "+propietario)) {
                    mascotas.push([tipo,edad,nombre,propietario]);
                    //function Propietario(nombrePropietario,tipoMascota,edadMascota,nombreMascota){
                    propietarios.push(new Propietario(propietario,tipo,edad,nombre));
                }
            }
        }
    }
    datosNuevaMascota=prompt(mensajeError+mensaje);
}

/*
Al finalizar la entrada de datos con el *, hacer un listado de todas las mascotas:
a. El listado deberá salir ordenando por tipo de mascota.
b. En el listado deberá salir en cada línea los datos de una mascota.
c. La salida de cada línea tendrá el siguiente formato:
Tipo – Nombre – Edad – Año de nacimiento – Propietario
*/

salida="listado de mascotas ordenadas por el campo TIPO\n\n";
salida+="Tipo – Nombre – Edad – Año de nacimiento – Propietario\n\n"
mascotasOrdenado=ordena(mascotas,0,0);
for (let nMascota=0;nMascota<mascotasOrdenado.length;nMascota++){
    salida+=mascotasOrdenado[nMascota][0]+" - "+mascotasOrdenado[nMascota][2]+" - "+mascotasOrdenado[nMascota][1]+" - "+(ano-mascotasOrdenado[nMascota][1])+" - "+mascotasOrdenado[nMascota][3]+"\n";
}
alert(salida);
