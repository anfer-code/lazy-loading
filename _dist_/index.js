import { observeImg } from "./lazy.js"
import { contar } from "./count.js"

//Usaremos async / await para este proyecto.

// la url traerá un dato random
const baseUrl = "https://randomfox.ca/floof/"
const idImg = document.querySelector("#images")
const button = document.querySelector("#button")
const eraser = document.querySelector("#eraser")



const urlImg = async () => {
    // Petición Asincrona a nuestra url
    let imgUrl = await fetch(baseUrl)
    let data = await imgUrl.json()
    let valor = data.image
    return valor
}

const createImg = async () => {

    // Creamos nuestro contenedor de img
    const card = document.createElement("div")
    card.className = "p-4"

    // Creamos nuestra imagen
    const img = document.createElement("img")
    img.dataset.src = await urlImg()
    img.setAttribute("width", "320")
    img.className = "mx-auto"

    //wrapper para la imagen
    const wrapp = document.createElement("div")
    wrapp.className = "lazy"
    wrapp.append(img)

    //agregamos las imagenes a las cards
    card.append(wrapp)
    contar.imgAgreg()
    return card

}

// Con el profesor
// const addImg = async () => {
//     let newImage = await createImg()
//     // //Agregamos imagenes al document
//     idImg.append(newImage)
//     registerImg(newImage)
// }

// Yo solo
const addImg = async () => {
    let newImage = await createImg()
    idImg.append(newImage)
    observeImg(newImage)
}


const cleanDom = () => {
    let arr = idImg.querySelectorAll("div")
    contar.imgDelete()
    arr.forEach(i => {
        i.remove()
    })
}

button.addEventListener("click", addImg)
eraser.addEventListener("click", cleanDom)