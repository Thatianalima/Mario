const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    if (window.innerWidth > 768) { // Para dispositivos móveis
        form.style.left = "50%"
        form.style.transform = "translateX(-50%)"
         // Ocupa 90% da largura da tela
    } else {
        form.style.left = "50%"
        form.style.transform = "translateX(-50%)"
        // Mantenha a largura original para telas maiores ou defina uma específica se desejar
    }
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left = "-400px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

// Adicione este evento para ajustar o formulário quando a janela for redimensionada
window.addEventListener('resize', mostrarForm)
