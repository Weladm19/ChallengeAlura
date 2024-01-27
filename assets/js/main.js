// variaveis Globais
let txt = document.querySelector('#txtCod')
let conteudo = document.querySelector('#painel')



function crip() {
    if(txt.value == ""){
        alert('Digite alguma frase')
    }else{
        let novoTextoI = txt.value.replace(/i/gi, 'imes');
        let novoTextoA = novoTextoI.replace(/a/gi, 'ai');
        let novoTextoE = novoTextoA.replace(/e/gi, 'enter');
        let novoTextoO = novoTextoE.replace(/o/gi, 'ober');
        let novoTextoU = novoTextoO.replace(/u/gi, 'ufat');
        conteudo.innerHTML = `${novoTextoU} <input type="button" value="Copiar" class="btCopiar" onclick="copiarTexto">`;
        copiarTexto(novoTextoU)
    }
    
}


function desc() {
    if(txt.value == ""){
        alert('Digite alguma frase ')
   }else{
       let novoTextoA = txt.value.replace(/ai/gi, 'a');
       let novoTextoE = novoTextoA.replace(/enter/gi, 'e');
       let novoTextoI = novoTextoE.replace(/imes/gi, 'i');
       let novoTextoO = novoTextoI.replace(/ober/gi, 'o');
       let novoTextoU = novoTextoO.replace(/ufat/gi, 'u');
       conteudo.innerHTML = novoTextoU;
       conteudo.innerHTML = `${novoTextoU} <input type="button" value="Copiar" class="btCopiar" onclick="copiarTexto">`;
       copiarTexto(novoTextoU)
   }
}

function copiarTexto(valor){
    navigator.clipboard.writeText(valor); 
}