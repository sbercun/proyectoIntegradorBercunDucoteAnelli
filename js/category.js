let query = location.search // accedo a la querystring del url del documento
let queryObj = new URLSearchParams(query) // convierto la querystring que es un string en js

let categoria = queryObj.get("category") //capturo el parametro "category"

let url =`https://dummyjson.com/products/category/${categoria}`

let productos_categoria = document.querySelector(".seccion")
let titulo = document.querySelector(".titulo")
titulo.innerText = categoria

fetch(url)
.then(function(response) {
  return response.json()
})

.then(function(data) {

    for (let i = 0; i < 10;i++) {
        let producto = data.products[i]
        productos_categoria.innerHTML += `
        <article class="producto">
          <img src="${producto.thumbnail}" alt="${producto.title}">
          <h3>${producto.title}</h3>
          <p>${producto.description}</p>
          <p class="precio" >$${producto.price}</p>
          <a class="detalle" href="product.html">Ver detalle</a>
        </article>`
        
    }
})

.catch(function(error) {
  console.log("Error: " + error);
})