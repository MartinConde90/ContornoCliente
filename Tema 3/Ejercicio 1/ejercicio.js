//Solcitar 10 numeros mayores a 20 y guardarlos en aun array.

var array10 = new Array();

for(i=0; i<10; i++){
    var num = prompt("Introduce un número mayor a 20: ",);

    while((num<=20 || parseInt(num) != num || num == "" || num.trim()=="")){
        var num = prompt("Dato introducido es erroneo, introduce de nuevo un número mayor a 20: ",);
    }

    array10[i] = num; 
}

alert(array10.length);
//delete array10[array10.length-1];
array10.splice(9,1);
alert(array10.length);

for(var numero in array10){
    alert(array10[numero]);
}