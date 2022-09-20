import loadHome from "./home"
import loadAbout from "./about"
import './style.css'
function reset() {
    const main = document.getElementById("main")
    
    main.classList.remove(...main.classList)
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
}

function initSite() {
    document.getElementById("body").classList.add('h-full')
    document.getElementById("html").classList.add('h-full')
    const content = document.getElementById("content")
    content.classList.add('h-full', 'w-full','flex', 'flex-col')

    const header = document.createElement("div")
    header.id = "header"
    header.classList.add('h-40','bg-blue-200','flex','justify-center','items-end', 'gap-4', 'py-5')
    
    const home_btn = document.createElement("button")
    home_btn.addEventListener("click", () => {
        reset()
        loadHome()
    })
    home_btn.textContent = 'Home'
    home_btn.classList.add('h-10', 'bg-green-200', 'w-24', 'rounded-full')


    const about_btn = document.createElement("button")
    about_btn.addEventListener("click", () => {
        reset()
        loadAbout()
    })
    about_btn.textContent = 'About'
    about_btn.classList.add('h-10', 'bg-green-200', 'w-24', 'rounded-full')

    header.appendChild(home_btn)
    header.appendChild(about_btn)

    

    const main = document.createElement("div")
    main.id = "main"

    content.appendChild(header)
    content.appendChild(main)
}
export default initSite