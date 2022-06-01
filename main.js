

function encriptar(){
    var texto = document.getElementById("input").value.toLowerCase();

    //i es para que afecte a mayusculas y a minusculas
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos

    var textCifrado = texto.replace(/a/igm,"ai");
    var textCifrado = textCifrado.replace(/e/igm,"enter");
    var textCifrado = textCifrado.replace(/i/igm,"imes");
    var textCifrado = textCifrado.replace(/o/igm,"ober");
    var textCifrado = textCifrado.replace(/u/igm,"ufat");

    document.getElementById("img2").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("input").value.toLowerCase();

    //i es para que afecte a mayusculas y a minusculas
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos

    var textCifrado = texto.replace(/ai/igm,"a");
    var textCifrado = textCifrado.replace(/enter/igm,"e");
    var textCifrado = textCifrado.replace(/imes/igm,"i");
    var textCifrado = textCifrado.replace(/ober/igm,"o");
    var textCifrado = textCifrado.replace(/ufat/igm,"u");
    
    document.getElementById("img2").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}

    function copy(){
        var contenido = document.querySelector("#texto2");
        contenido.select();
        document.execCommand("copy"); 
    }

