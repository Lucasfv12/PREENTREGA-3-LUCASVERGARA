document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    const botonToggle = document.getElementById('toggleButton')
    
    function aplicarModoOscuro(estaOscuro) {
        estaOscuro ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }
    
    function alternarModoOscuro() {
        const estaEnModoOscuro = body.classList.toggle('dark-mode')
        localStorage.setItem('modoOscuro', estaEnModoOscuro ? 'habilitado' : 'deshabilitado')
    }
    
    function inicializarModoOscuro() {
        const modoOscuroGuardado = localStorage.getItem('modoOscuro')
        modoOscuroGuardado === 'habilitado' ? aplicarModoOscuro(true) : aplicarModoOscuro(false)
    }
    
    inicializarModoOscuro()
    
    botonToggle.addEventListener('click', alternarModoOscuro)
    })
