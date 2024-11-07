

const form = document.querySelector(".formulario"); // Use a class selector
const mascara = document.querySelector(".mascara-formulario"); // Use a class selector

function aparecerformulario() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"// Corrigi a sintaxe
}

function fecharform(){
    form.style.left = "-300px"
    form.style.transform = ""
    mascara.style.visibility = "hidden"

}