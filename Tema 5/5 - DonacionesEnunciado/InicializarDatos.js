window.addEventListener("load", Inicio,false);
function Inicio(){

	evento();

}
//////////////////////////////////////
//variables globales a utilizar en el programa
/////////////////////////////////////


function evento(){
	const date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let currentDate = `${day}/${month}/${year}`;
	for(let i=0; i<visitas.length;i++){
		if(visitas[i][0] == currentDate){
			let fecha = document.getElementById("datosGenerales");
			fecha.value = visitas[i][1] + "--"+responsables[i];
		}
	}
}

var visitas=[
				["14/2/2023","CIFP A Carballeira"],
				["10/2/2021","Blanco Amor"],
				["16/4/2021","IES Universidad Laboral"],
				["24/1/2021","IES Portovello"],
				["25/1/2021","IES O Couto"]
			];   
// array bidimensional con la visitas que están concertadas para esta campaña
// (cada fila contiene un array con la fecha de la visita y el nombre del instituto que se va a visitar)
				
var responsables=["Beatriz","Manuel","Julio","Ana","Sonia"];
//array que contiene el nombre de la persona responsable 
//encargada del autobús de la sangre que visitará cada instituto

var gruposSanguineos=["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]; 

var donacionesGrupo=[]; 
//array que almacenará en cada fila el número de donaciones que hubo
//de cada grupo sanguíneo. Es un array paralelo al de gruposSanguineos

