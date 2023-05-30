function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textocifrado;
        tituloMensaje.textContent = "texto encriptado con exito";
        parrafo.textContent = "";
        pensando.src ="./imag/encriptado.png";
    } 
    else {
        pensando.src = "./imag/pensando 2.png";
        tituloMensaje.textContent = "Ningun mesaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desea encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    } 
}
    
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textocifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textocifrado;
        tituloMensaje.textContent = "texto desencriptado con exito";
        parrafo.textContent = "";
        pensando.src ="./imag/desencriptado.png";
    } 
    else {
        pensando.src = "./imag/pensando 2.png";
        tituloMensaje.textContent = "Ningun mesaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desea encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }     
}    
