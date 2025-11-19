//BARRA NAV VERTICAL
let categorias = document.querySelector(".lista")
fetch(('https://dummyjson.com/products/category-list'))

  .then(function(respuesta) {
    return respuesta.json()
  })

  .then(function(data) {

    for (let i = 0; i < data.length; i++) {
        let categoria = data[i];
        categorias.innerHTML += `
                <li class="category">
                <a href="./category.html?category=${categoria}">${categoria}</a>
                </li>`
        
    }
  })
  .catch(function(error) {
    console.log("Error: " + error)
  })

//DETALLE DE PRODUCTO

let query = location.search // accedo a la querystring del url del documento
let queryObj = new URLSearchParams(query) // convierto la querystring que es un string en js

let id = queryObj.get("id") //capturo el parametro "id"

let url = `https://dummyjson.com/products/${id}`

let contenedor = document.querySelector(".info_producto")
let contenedor_reviews = document.querySelector(".padre_review")

fetch(url)

.then(function(respuesta) {
    return respuesta.json()
  })

.then(function(data) {

    contenedor.innerHTML +=
    `<article class="descripcion_prod">
                    <h1 class="titulo_prod">${data.title}</h1>
                    <div class="imagen_prod">
                        <img src="${data.thumbnail}" alt="${data.title}">
                    </div>
                    <div class="datos_prod">
                        <p><strong>Marca:</strong> ${data.brand}</p>
                        <p><strong>Descripción:</strong> ${data.description}</p>
                        <p><strong>Precio:</strong> ${data.price}</p>
                        <p><strong>Categoría:</strong><a href="category.html?category=${data.category}"> ${data.category}</a></p>
                        <p><strong>Stock:</strong> ${data.stock}</p>
                    </div>

                    <ul class="tags"> 
                       <li class="tag">${data.tags[0]}</li>
                       <li class="tag">${data.tags[1]}</li>
                    </ul>
                </article>`
    let lista_reviews = data.reviews
    for (let i = 0; i < 4; i++) {
        let review = lista_reviews[i]
        contenedor_reviews.innerHTML +=`<article class="review">
                    <p><strong>Rating:</strong> ${review.rating}</p>
                    <p> ${review.comment}</p>
                    <p><em>Fecha:${review.date}</em></p>
                    <p><strong>Usuario:</strong> ${review.reviewerName}</p>
                </article>`
        
    }


  })

.catch(function(error) {
    console.log("Error: " + error)
  })