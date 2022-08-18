var texto = document.querySelector('textarea');
var mostraTexto = document.querySelector('#message__2');
var backRecebeTexto = document.querySelector('.output__message');

var botaoCriptografar = document.getElementById('botao-criptografar');
var botaoDescriptografar = document.getElementById('botao-descriptografar');
var botaoCopy = document.getElementById('botao-copy');

function removeImage() {
    backRecebeTexto.style.background = 'white';

}

function criptografaTexto() {
    var criptografia = texto.value;
    criptografia = criptografia.replace(/e/gi , 'enter');
    criptografia = criptografia.replace(/i/gi , 'imes');
    criptografia = criptografia.replace(/a/gi , 'ai');
    criptografia = criptografia.replace(/o/gi , 'ober');
    criptografia = criptografia.replace(/u/gi , 'ufat');
    
    removeImage();
    mostraTexto.innerText = criptografia;
}

function descriptografaTexto() {
    var descriptografia = texto.value;
    descriptografia = descriptografia.replace(/enter/gi , 'e');
    descriptografia = descriptografia.replace(/imes/gi , 'i');
    descriptografia = descriptografia.replace(/ai/gi , 'a');
    descriptografia = descriptografia.replace(/ober/gi , 'o');
    descriptografia = descriptografia.replace(/ufat/gi , 'u');

    removeImage();
    mostraTexto.innerText = descriptografia;
}

function copiaTexto() {
    mostraTexto.select();
    mostraTexto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    mostraTexto.innerText = "";
}

botaoCriptografar.onclick = criptografaTexto;
botaoDescriptografar.onclick = descriptografaTexto; 
botaoCopy.onclick = copiaTexto;    