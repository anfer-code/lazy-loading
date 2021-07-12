// //

// version del profesor

// const isIntersecting = entry => entry.isIntersecting // True dentro de la pantalla

// const accion = (entry) => {
//     const nodo = entry.target
//     console.log(nodo)
//     observer.unobserve(nodo)
// }

// const observer = new IntersectionObserver(entries => {
//     entries.filter(isIntersecting).forEach(accion)
// })

// export const registerImg = (img) => {
//     //intersectionObserver -> observer(img)
//     observer.observe(img)
// }


// version mia
import { contar } from "./count.js"

const isIntersecting = entry => entry.isIntersecting


const loadImg = entry => {
    let container = entry.target //div
    const wrapp = container.firstChild
    const imagen = wrapp.firstChild
    const url = imagen.dataset.src
    //cargar imagen poniendole un valor valido a la imagen
    imagen.src = url
    contar.imgLoad()

    observer.unobserve(container)
}


let observer = new IntersectionObserver( entries => {
    entries.filter(isIntersecting).forEach(loadImg)
})


export const observeImg = img => {
    observer.observe(img)
}