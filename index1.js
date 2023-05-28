function encriptar(){
    let texto = document.getElementById("input-principal").value; 
    const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;
    
    if(caracteresValidos.test(texto)){ 
        let textoEncriptado = encriptacion(texto);
        document.getElementById("resultadodelTexto").innerHTML = textoEncriptado;  
        document.getElementById("input-principal").value = "";     
    }else{
        alert("Tu texto no es valido, escribelo en minusculas y sin acentos.")
    }
}

function desencriptar(){
    let texto = document.getElementById("input-principal").value;  
    const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;
    
    if(caracteresValidos.test(texto)){ 
        let textoDesencriptado = desencriptado(texto);
        document.getElementById("resultadodelTexto").innerHTML = textoDesencriptado;   
        document.getElementById("input principal").value = ""; 
    }else{
        alert("Tu texto no es valido, escribelo en minusculas y sin acentos.")
    }
}

function copiar() {
    let mensajeEncriptado = document.getElementById("resultadodelTexto").innerHTML;
    navigator.clipboard.writeText(mensajeEncriptado).then(function() {
        alert("El mensaje encriptado se ha copiado");
    })
}

function desapareser(){
    document.getElementById("caja-imagen").style.display = "none";
    document.getElementById("caja-resultado").style.display = "flex"; 
}

function encriptacion(texto){
    let textoEncriptado = [];
    let textoSeparado = texto.split("");
            for(let i = 0; i < textoSeparado.length; i++){
                let letra = textoSeparado[i];
                if(letra == "o"){
                    textoEncriptado.push("ober");
                }else if(letra == "a"){
                    textoEncriptado.push("ai");
                }else if(letra == "e"){
                    textoEncriptado.push("enter");
                }else if(letra == "i"){
                    textoEncriptado.push("imes");
                }else if(letra == "u"){
                    textoEncriptado.push("ufat");
                }else{
                    textoEncriptado.push(letra);
                }
            }    
    textoEncriptado = textoEncriptado.join("");
    desapareser();
    return textoEncriptado;
}

function desencriptado (texto){
    let textoSinOber = texto.replaceAll("ober", "o");
    let textoSinAi = textoSinOber.replaceAll("ai", "a");
    let textoSinEnter = textoSinAi.replaceAll("enter", "e");
    let textoSinImes = textoSinEnter.replaceAll("imes", "i");
    let textoDesencriptado = textoSinImes.replaceAll("ufat", "u");
    desapareser();
    return textoDesencriptado;
}
