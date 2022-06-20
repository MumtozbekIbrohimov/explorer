const toggleNav = document.getElementById('toggle-nav')
const hiddenNav = document.getElementById('hidden-nav')
const overlay = document.getElementById('overlay')

toggleNav.addEventListener('click', () => {
    hiddenNav.classList.toggle('show-nav')
    overlay.classList.toggle('hidden')
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 440) {
        hiddenNav.classList.remove('show-nav')
        overlay.classList.add('hidden')
    }
})

overlay.addEventListener('click', () => {
    hiddenNav.classList.remove('show-nav')
    overlay.classList.add('hidden')
})



const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overlays = document.getElementById('overlay')

// add classList hidden
const addHidden = () => {
    modal.classList.add('hidden')
    overlays.classList.add('hidden')
}

// remove classList hidden
const removeHidden = () => {
    modal.classList.remove('hidden')
    overlays.classList.remove('hidden')
}

showBtn.addEventListener('click', removeHidden)

closeBtn.addEventListener('click', addHidden)

overlays.addEventListener('click', addHidden)

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
    addHidden()
    }
})
