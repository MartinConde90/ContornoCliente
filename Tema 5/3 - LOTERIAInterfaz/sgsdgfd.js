function bolas(num, reintegro=null,apuestas,nombre){
    let zonaboleto=document.getElementById("boleto");

    for(let i=0; i<apuestas;i++){
        let div = document.createElement("div");
        let label = document.createElement("label");
            label.textContent = nombre+": "+(i+1);
            div.appendChild(label);
            div.appendChild(document.createElement("br")); 
        for(let n=0; n<num.length; n++){
            let span = document.createElement("span");
            span.className = "bola1";
            span.textContent = num[n];
            div.appendChild(span);
        }
        if(reintegro!=null){
            for(let n=0; n<reintegro.length; n++){
                let span2 = document.createElement("span");
                span2.className = "bola2";
                span2.textContent = reintegro[n];
                div.appendChild(span2);
            }
        }
        zonaboleto.appendChild(div);
    }
    document.getElementById("juego").selectedIndex = -1;
}