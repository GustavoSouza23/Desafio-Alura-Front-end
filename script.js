let textInput = document.querySelector(".conteudo__entrada__texto");
let textOutInput = document.querySelector(".conteudo__saida__texto");

function textoCriptografado() {
  let texto = textInput.value;

  let resultCripto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  textOutInput.value = resultCripto;

  document.querySelector(".conteudo__saida__texto").innerHTML =
    ' <textarea class="conteudo__saida__texto" placeholder="Texto Descriptografado..." rows="10" cols="33">' +
    resultCripto;
  "</textarea>" +
    '<button  class="conteudo__button_criptografar"onclick="textoCriptografado()" >Criptografar</button>'
  ' <button class="conteudo__button__copiar__texto" onclick="buttonCopia()">Copiar</button>';
}

function textoDescriptografar() {
  let texto = textOutInput.value;
  let resultDescript = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  textOutInput.value = resultDescript;

  document.querySelector(".conteudo__saida__texto").innerHTML =
    ' <textarea class="conteudo__saida__texto" placeholder="Texto Descriptografado..." rows="10" cols="33">' +
    resultDescript;
  "</textarea>" +
    '<button class="conteudo__button__descriptografar" onclick="textoDescriptografar()">Descriptografar</button>'
  ' <button class="conteudo__button__copiar__texto" onclick="buttonCopia()">Copiar</button>';
}

function buttonCopiar() {
  let textCopy = document.querySelector(".conteudo__saida__texto");
  textCopy.select();
  document.execCommand("copy");
  alert("Texto copiado!");
}
