document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    const botonToggle = document.getElementById('toggleButton')
        
    function aplicarModoOscuro(estaOscuro) {
        estaOscuro ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }
    
    function alternarModoOscuro() {
        const estaEnModoOscuro = body.classList.toggle('dark-mode')
        localStorage.setItem('modoOscuro', JSON.stringify(estaEnModoOscuro)) 
    }
        
    function inicializarModoOscuro() {
        const modoOscuroGuardado = JSON.parse(localStorage.getItem('modoOscuro'))
        if (modoOscuroGuardado !== null) {
            aplicarModoOscuro(modoOscuroGuardado)
        }
    }

inicializarModoOscuro()

botonToggle.addEventListener('click', alternarModoOscuro)
})
