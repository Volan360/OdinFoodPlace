import './style.css'

function loadHome() {
    const main = document.getElementById("main")
    const para = document.createElement("p")
    main.classList.add('flex-1', 'bg-yellow-200')
    para.textContent = "Home!"
    main.appendChild(para)
}

export default loadHome