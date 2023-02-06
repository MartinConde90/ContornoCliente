window.addEventListener("load", Inicio,false);

function Inicio(){

    document.getElementById("juego").addEventListener("click", mostrar, false);
    document.getElementById("juego").selectedIndex = -1;
    document.getElementById("juego").size = 4;

   
}

function random(num1, num2, cantidad){
    const fruits = [];
    for(let i =0; i<cantidad; i++){
        let num = Math.floor(Math.random() * (num2 -num1+1)) + num1;
        while(fruits.includes(num)){
          num = Math.floor(Math.random() * (num2 -num1+1)) + num1;
        }
        fruits.push(num);
    }
    return fruits;
}

function mostrar(){
    let loteria = document.getElementById("juego");
    let index = parseInt(loteria.selectedIndex);
    //alert(index);
    let apuestas =document.getElementById("numApuestas").value;

    switch (index) {
        case 0:
          
          nombre = "La Primitiva";
          //alert(numeros + "-" + reintegro);
          bolas(49,6,apuestas,nombre,9,1);
          break;
        case 1:
          
          nombre = "El Gordo";
          //alert(numeros + "-" + reintegro);
          bolas(54,5,apuestas,nombre,9,1);
          break;
        case 2:
          
          nombre = "El Euromillón";
          //alert(numeros + "-" + reintegro);
          bolas(50,5,apuestas,nombre,12,2);
          break;
        case 3:
          
          //alert(numeros);
          bolas(49,6,apuestas,nombre);
          break;
        default:
          alert("Lotería no existente");
      }
}

function bolas(rangonum,cantnum,apuestas,nombre,rangoreint=null,cantreint=null){
    let zonaboleto=document.getElementById("boleto");

    for(let i=0; i<apuestas;i++){
        let div = document.createElement("div");
        let label = document.createElement("label");
            label.textContent = nombre+": "+(i+1);
            div.appendChild(label);
            div.appendChild(document.createElement("br")); 
            
            numeros = random(1,rangonum,cantnum);
            reintegro = random(1,rangoreint,cantreint);

        for(let n=0; n<numeros.length; n++){
            let span = document.createElement("span");
            span.className = "bola1";
            span.textContent = numeros[n];
            div.appendChild(span);
        }
        if(cantreint!=null){
            for(let l=0; l<reintegro.length; l++){
                let span2 = document.createElement("span");
                span2.className = "bola2";
                span2.textContent = reintegro[l];
                div.appendChild(span2);
            }
        }
        zonaboleto.appendChild(div);
    }
    document.getElementById("juego").selectedIndex = -1;
}
/*
<label></label><br>
<span class="bola1"></span>
*/