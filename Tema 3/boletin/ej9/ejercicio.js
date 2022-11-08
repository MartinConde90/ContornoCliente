function numero (array){
    var mayor = array[0];

    for(var i=1; i<array.length; i++){
            if(array[i]>mayor){
                mayor = array[i];
            }

    }
    var posicion = array.indexOf(mayor);
    return posicion;
}

var numeros = [12,54,768,123,98,12,-5,1,999];

alert(numero(numeros));
