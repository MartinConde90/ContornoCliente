var digit = prompt("Introduce un número entre 0 y 9: ");
var suma = 0;
var cadena = "";
var contador = 0;

while(0>parseInt(digit)>9 || parseInt(digit) != digit || digit == "" || digit.trim()==""){
    digit = prompt("Introduce de nuevo un número entre 0 y 9: ");
}

while(digit != "*"){
    contador++;
    cadena += digit;
    suma += +digit;

    digit = prompt("Introduce otro número entre 0 y 9: ");
    while(0>parseInt(digit)>9 || parseInt(digit) != digit || digit == "" || digit.trim()==""){
        if(digit == "*"){
            
        }
        else{
            digit = +prompt("Introduce de nuevo un número entre 0 y 9: ");
        }
        
    }
}
if(suma%3==0) alert("El número "+cadena+" es divisible entre 3")
else{
    alert("El número "+cadena+" no es divisible entre 3")
}