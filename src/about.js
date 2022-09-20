import './style.css'

function loadAbout() {
    const main = document.getElementById("main")
    main.classList.add('flex-1', 'bg-red-200')
    const para = document.createElement("p")
    para.textContent = "About!"
    main.appendChild(para)
}

export default loadAbout