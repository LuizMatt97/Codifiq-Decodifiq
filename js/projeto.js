let enterMsg = document.getElementById('enterMensagem');
let opçoes = document.querySelector('#op');
let incremento = document.getElementById('incremento');
let botaoCodificar = document.getElementById('codificar');
let botaoDecodificar = document.getElementById('decodificar');
let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
let submit = document.querySelector('#submit');
let outMensagem = document.querySelector('.outMensagem')
let radio = document.querySelector('.radio');


opçoes.addEventListener("change", function () {

    
    if(opçoes.value == 'cifraDeCesar') {
        incremento.style.display = 'block';
    
        
    }else if (opçoes.value == 'base64') {
        incremento.style.display = 'none';
    
    }else {
    
    }
    })


  botaoCodificar.addEventListener("click", function () {
     submit.style.display = 'block';
     submit.value = 'Confirmar.'

  })

  botaoDecodificar.addEventListener("click", function () {
    submit.style.display = 'block';
    submit.value = 'Confirmar.'

 })


// Cifra de Cesar
   

function codCesar() {
  let elementoDaMensagem = enterMsg.value;
  let msgMinuscula = elementoDaMensagem.toLowerCase();
  let transformarNumero = (Number(incremento.value) % 26);
  let msgCodificada = '';

  for(let i = 0; i < msgMinuscula.length; i++){
     for(let j =0; j < alfabeto.length; j++){
       if(msgMinuscula[i] == alfabeto[j]){
         msgCodificada += alfabeto [j + transformarNumero]
         break;
     } else if (msgMinuscula[i] == ' ') {
         msgCodificada += ' ';
         break;
     }
    }
  

}
return msgCodificada
}


  function decCesar() {
    let elementoDaMensagem = enterMsg.value;
    let msgMinuscula = elementoDaMensagem.toLowerCase()
    let transformarNumero = (Number(incremento.value) % 26)
    let msgCodificada = '';
  
    for(let i = 0; i < msgMinuscula.length; i++){
       for(let j = alfabeto.length - 1; j >= 0; j--){
         if(msgMinuscula[i] == alfabeto[j]){
           msgCodificada += alfabeto [j - transformarNumero]
           break;
       } else if (msgMinuscula[i] == ' ') {
           msgCodificada += ' ';
           break;
       }
      }
    
  }
  return msgCodificada
}
  

// Base64 

function codBase(){
    let mensagem = document.querySelector('#enterMensagem').value
    let codificado = btoa(mensagem)
    return codificado
}

function decBase(){
    let mensagem = document.querySelector('#enterMensagem').value
    let decodificado = atob(mensagem)
    return decodificado
}


submit.addEventListener('click', function(e){
    e.preventDefault();
    if(botaoCodificar.checked && opçoes.value === "base64"){
        
        outMensagem.innerText = codBase();
    } else if(botaoDecodificar.checked && opçoes.value === "base64"){
        
        outMensagem.innerText = decBase();
    } else if(botaoCodificar.checked && opçoes.value === "cifraDeCesar"){
        
        outMensagem.innerText = codCesar()
    } else if(botaoDecodificar.checked && opçoes.value === "cifraDeCesar"){
        
        outMensagem.innerText = decCesar()
    } else{
        outMensagem.innerText = "Erro! Insira um texto e selecione."
    }
})












