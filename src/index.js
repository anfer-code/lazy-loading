/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//Usaremos async / await para este proyecto.

// la url traerá un dato random
const baseUrl = "https://randomfox.ca/floof/"
const idImg = document.querySelector("#images")
const button = document.querySelector("#button")

const createImg = async () => {
    // Petición Asincrona a nuestra url
    let imgUrl = await fetch(baseUrl)
    let data = await imgUrl.json()
    let valor = data.image
    console.log(valor)
    imgTemplate(valor)
}

const imgTemplate = (url) => {

    // Creamos nuestro contenedor de img
    const card = document.createElement("div")
    card.className = "p-4"

    // Creamos nuestra imagen
    const img = document.createElement("img")
    img.src = url
    img.setAttribute("width", "320")
    img.setAttribute("alt", "fox")
    img.className = "mx-auto"

    //agregamos las imagenes a las cards
    card.append(img)

    //Agregamos valores a un array o al document
    idImg.append(card)

}

button.addEventListener("click", createImg)
