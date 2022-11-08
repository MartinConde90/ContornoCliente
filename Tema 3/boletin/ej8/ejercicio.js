function numero (array){
    var mayor = array[0];
    var menor = array[0];

    for(var i=1; i<array.length; i++){
            if(array[i]>mayor){
                mayor = array[i];
            }
            if(array[i]<menor){
                menor = array[i];
            }
    }
    var maymen = [mayor, menor];
    return maymen;
}

var numeros = [12,54,768,123,98,12,-5,1];

alert(numero(numeros));

