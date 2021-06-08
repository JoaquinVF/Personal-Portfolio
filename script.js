const textoEspañol = document.getElementsByClassName('esp');
const textoIngles = document.getElementsByClassName('eng');
const selector = document.getElementById("selector");
const container = document.getElementById("projects-container");
let orderText = document.getElementById("orderText");
let windowSize = window.matchMedia("(max-width: 768px)");


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
function changeMovileOrder(){
    if (container.style.flexDirection === "column-reverse"){
        container.style.flexDirection = "column";
        orderText.textContent = "Filter: A - Z";
    } else {
        container.style.flexDirection = "column-reverse"
        orderText.textContent = "Filter: Z - A";
    }
}
function changeDesktopOrder(){
    if (container.style.flexDirection === "row-reverse"){
        container.style.flexDirection = "row";
        orderText.textContent = "Filter: A - Z";
    } else {
        container.style.flexDirection = "row-reverse"
        orderText.textContent = "Filter: Z - A";
    }
}
function myFunction(windowSize) {
    if (windowSize.matches) {
        changeMovileOrder();
        orderText.addEventListener('click', e => {
            changeMovileOrder()
        })
    } else {
        changeDesktopOrder();
        orderText.addEventListener('click', e => {
            changeDesktopOrder()
        })
    }
  }



selector.addEventListener('change', e => {
    if (e.target.value === "value2"){
        langEs()
    } else {
        langEn()
    }
})

myFunction(windowSize);
windowSize.addListener(myFunction);


