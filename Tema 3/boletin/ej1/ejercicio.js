var paises = new Array("España", "Francia", "Suecia", "Italia", "Noruega", "Portugal", "Holanda");

paises.splice(0,1,"Bélgica", "Alemania", "Dinamarca");
paises.splice(4,0,"Grecia", "Holanda", "Italia", "Noruega", "Portugal");
paises.splice(10,5,"Suiza");

alert(paises);