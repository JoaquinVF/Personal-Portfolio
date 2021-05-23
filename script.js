let español = document.getElementById('esp');
let ingles = document.getElementById('eng');

function langEs(){
    ingles.style.display = "none";
    español.style.display = "block";
}

function langEn(){
    ingles.style.display = "block";
    español.style.display = "none";
}