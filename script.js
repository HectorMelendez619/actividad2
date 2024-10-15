const ascii = document.getElementById("ascii");
const asciiColor = document.getElementById("ascii-color");
const asciiPre = document.getElementById("ascii-pre");
const asciiFondo = document.getElementById("ascii-fondo");
const transparente = document.getElementById("transparente");

asciiColor.addEventListener('change', function() {
    asciiPre.style.color = asciiColor.value;
})

asciiFondo.addEventListener('change', function() {
    asciiPre.style.backgroundColor = asciiFondo.value;
})

transparente.addEventListener('change', function() {
    console.log(transparente.checked)
    if (transparente.checked == true) {
        asciiPre.style.backgroundColor = "transparent";
    }
    else {
        asciiPre.style.backgroundColor = asciiFondo.value;
    }
})