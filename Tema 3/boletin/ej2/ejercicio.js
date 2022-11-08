var nombres = new Array("Meno","Groba","Jorge","Sergio","Xesta",
                        "Breo","Casa","Basa","Sapo","4fingers",
                        "Gordo","Camelias","Roberto","Chancas","Skater",
                        "Archivito","Grouter","Chema","Brandon","Pato");
var edad = new Array(29,21,38,49,78,68,35,17,54,52,
                     11,77,66,22,15,88,61,10,70,69);

for(i=0; i< edad.length-1; i++){
    for(j=[i+1]; j<edad.length; j++){
        if(edad[i]>edad[j]){
            
            let aux = edad[i];
            edad[i]=edad[j];
            edad[j]= aux;

            aux=nombres[i];
            nombres[i]=nombres[j];
            nombres[j]=aux;
        }
    }
}
alert(nombres);