const textoEspañol = document.getElementsByClassName('esp');
const textoIngles = document.getElementsByClassName('eng');
const selector = document.getElementById("selector");
selector.addEventListener('change', (event) => {
    if (event.target.value === "value2"){
        langEs()
    } else {
        langEn()
    }
})


function langEs(){
    for (let i = 0; i < textoEspañol.length; i++) {
        textoIngles[i].style.display = "none";
        textoEspañol[i].style.display = "block";
    }
}

function langEn(){
    for (let i = 0; i < textoEspañol.length; i++) {
        textoIngles[i].style.display = "block";
        textoEspañol[i].style.display = "none";
    }
}