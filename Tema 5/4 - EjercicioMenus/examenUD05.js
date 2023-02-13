//REVISAR EL COMPROBADOR DE SI HAY REPETIDO
window.addEventListener("load", Inicio,false);
var arrayMenus=[];
var favorito = -1;

function Inicio(){

	document.getElementById("plato").selectedIndex = -1;
    document.getElementById("plato").size = 4;
	document.getElementById("bebida").selectedIndex = -1;
    document.getElementById("bebida").size = 7;
	document.getElementById("postre").selectedIndex = -1;
    document.getElementById("postre").size = 7;

    mostrar();

	document.getElementById("generarMenu").addEventListener("click", creaMenu, false);

	document.getElementById("favorito").addEventListener("click", menufavorito, false);

	document.getElementById("listaMenus").addEventListener("click", menuSeleccionado, false);

}

function menuSeleccionado(){
	let favorito = document.getElementById("listaMenus").value;
	let index = document.getElementById("listaMenus").selectedIndex;

	let menu =document.getElementById("menuFavorito");
	let precio = document.getElementById("precio");
	let contador=0;

	if(favorito== menu.value){
		document.getElementById("favorito").checked = true;
	}else{
		document.getElementById("favorito").checked = false;
	}

	

	for(let i=1; i< arrayMenus[index].length;i+=2){
		if(i<arrayMenus[index].length){
			contador += arrayMenus[index][i];
		}
	 };
	 precio.value = contador+"€";

}

function menufavorito(){
	favorito = document.getElementById("listaMenus").selectedIndex;
	let menu =document.getElementById("menuFavorito");

	if(document.getElementById("favorito").checked == false && menu.value == arrayMenus[favorito]){
		menu.value = "";
	}else if(document.getElementById("favorito").checked == true && menu.value != arrayMenus[favorito]){
		menu.value = document.getElementById("listaMenus").value;
	}else{
		alert("Ningun menú elegido para añadir a favorito");
	}
	
	
}


function creaMenu(){
	let menu =document.getElementById("listaMenus");
	let array=[];
	let plato = document.getElementById("plato").selectedIndex;
	let bebida = document.getElementById("bebida").selectedIndex;
	let postre = document.getElementById("postre").selectedIndex;

	if(plato!=-1){
		array.push(platos[plato][0]);
		array.push(platos[plato][1]);

	}
	
	if(bebida!=-1){
		array.push(bebidas[bebida][0]);
		array.push(bebidas[bebida][1]);

	}
	
	if(postre!=-1){
		array.push(postres[postre][0]);
		array.push(postres[postre][1]);
	}

	

	if(plato==-1 && bebida==-1 && postre==-1){
		alert("no se ha seleccionado ninguna opcion");
	}else{
		if(repetido(arrayMenus,array)){
			let option = document.createElement("option");
                 for(let i=0; i< array.length;i+=2){
					if(i<array.length-2){
						option.text +=array[i]+","; 
						//option.value +=array[i]+",";
					}else{
						option.text +=array[i]; 
						//option.value +=array[i];
					}
				 };

				
                menu.add(option);
				arrayMenus.push(array);

				document.getElementById("plato").selectedIndex = -1;
				document.getElementById("bebida").selectedIndex = -1;
				document.getElementById("postre").selectedIndex = -1;
		}
		else{
			alert("Menú ya existente");
		}
	}

	menuSeleccionado();
}

function repetido(menus, menu){
	var bool = true;
	let contador =0;
	for(let i=0;i<menus.length;i++){
		if(menus[i].length == menu.length){
			for(j=0; j<menu.length;j++){
				if(menus[i][j]==menu[j]){
					contador++;
				}
			}
			if(contador == menu.length){
				bool = false;
			}
		}
	}
	
	return bool;
}

function mostrar(){
	
		let plato =document.getElementById("plato");
		let bebida =document.getElementById("bebida");
		let postre =document.getElementById("postre");

		for(let i=0; i< platos.length; i++){
			let option = document.createElement("option");
                option.text = platos[i][0];
                option.value = platos[i][0];
                plato.add(option);
		}
		
		for(let j=0; j< bebidas.length; j++){
			let option = document.createElement("option");
                option.text = bebidas[j][0];
                option.value = bebidas[j][0];
                bebida.add(option);
		}
		
		for(let j=0; j< postres.length; j++){
			let option = document.createElement("option");
                option.text = postres[j][0];
                option.value = postres[j][0];
                postre.add(option);
		}
	
}


//array que almacena los datos de los platos: nombre y precio
var platos=[
			["Cochinillo asado",22],
			["Huevos rotos con chorizo",10],
			["Cocido gallego",14],
			["Salmón a la plancha",12],
			["Merluza a la gallega",16],
			["Escalopines de ternera",10],
			["Ternera asada",10],
			["Rodaballo de la ría",28],
			["calamares en su tinta",15]
		];
//array que almacena los datos de las bebidas: nombre y precio
var bebidas=[
			["Agua",1],
			["Refresco",1.5],
			["Botella de Godello",12],
			["Botella de Ribera del Duero",16],
			["Botella de Cava",15],
			["Botella de Rioja",14],
			["Botella de Albariño",14]
		];
//array que almacena los datos de los postres: nombre y precio
var postres=[
			["Goulant con nata",5],
			["Fresas con nata",4],
			["Filloas rellenas",3.5],
			["Pieza de fruta",1],
			["Natillas",2.5],
			["Arroz con leche",3],
			["Bola de helado",1.5]
		];
		
