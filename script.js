let textoEspañol = document.getElementById('esp');
let textoIngles = document.getElementById('eng');

function langEs(){
    textoIngles.style.display = "none";
    textoEspañol.style.display = "block";
}

function langEn(){
    textoIngles.style.display = "block";
    textoEspañol.style.display = "none";
}