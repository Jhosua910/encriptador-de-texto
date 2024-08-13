const d = document;
const textArea = d.querySelector(".formulario_input");
const imagen = d.querySelector(".muñeco");
const loader = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".resultado_titulo");
const resultadoTexto = d.querySelector(".resultado_texto");
const botonEncriptar = d.querySelector(".formulario_encriptar");
const botonDesencriptar = d.querySelectorAll(".formulario_encriptar");
const botonCopiar = d.querySelector(".resultado_boton");
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

//Funcion para encriptar
function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if (letra === llaves[j][0]){
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

//Funcion para encriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves [i][0]);
    }
    return mensajeDesencriptado;
}

//Ocultar elementos
textArea.addEventListener("input", (e)=>{
    imagen.style.display = "none";
    loader.classList.remove("ocultar");
    resultadoTitulo.textContent = "Capturando Mensaje";
    resultadoTexto.textContent = "";
})

//Encriptar mensaje
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("ocultar");
    resultadoTitulo.textContent = "El resultado es:";
})

//Desencriptar mensaje
botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("ocultar");
    resultadoTitulo.textContent = "El resultado es:";
})

//Copiar mensaje
botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagen.style.display = "block"
        loader.classList.add("ocultar");
        resultadoTitulo.textContent = "El texto se copio"
        botonCopiar.classList.add("ocultar")
        resultadoTexto.textContent = ""
    });
});