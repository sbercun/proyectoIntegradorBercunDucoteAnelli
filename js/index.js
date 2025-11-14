//BARRA NAV VERTICAL
let categorias = document.querySelector(".lista")
fetch(('https://dummyjson.com/products/category-list'))

  .then(function(respuesta) {
    return respuesta.json()
  })

  .then(function(data) {

    for (let i = 0; i < data.length; i++) {
        let categoria = data[i];
        if (categoria){
            categorias.innerHTML += `
                <li class="category">
                <a href="./category.html?category=${categoria}">${categoria}</a>
                </li>`
            console.log("CATEGORIAS");
        }
    }
  })
  .catch(function(error) {
    console.log("Error: " + error)
  })

//SECCION MAIN
// capturamos los contenedores de cada sección
let beauty = document.querySelector(".seccion.beauty")
let fragances = document.querySelector(".seccion.fragrances")

//primer fetch (seccion beauty)
fetch(('https://dummyjson.com/products/category/beauty'))

  .then(function(respuesta) {
    return respuesta.json()
  })

  .then(function(data) {

    for (let i = 0; i < data.products.length; i++) {
        let producto = data.products[i]
          beauty.innerHTML += `
                <article class="producto">
                <img src="${producto.thumbnail}" alt="${producto.title}">
                <h3>${producto.title}</h3>
                <p>${producto.description}</p>
                <p class="precio" >$${producto.price}</p>
                <a class="detalle" href="product.html?id=${producto.id}">Ver detalle</a>
                </article>`
    }
  })
  .catch(function(error) {
    console.log("Error: " + error)
  })

//segundo fetch (seccion fragrances)
fetch(("https://dummyjson.com/products/category/fragrances"))

  .then(function(respuesta) {
    return respuesta.json()
  })

  .then(function(data) {

    for (let i = 0; i < data.products.length; i++) {
        let producto = data.products[i]
            fragances.innerHTML += `
                <article class="producto">
                <img src="${producto.thumbnail}" alt="${producto.title}">
                <h3>${producto.title}</h3>
                <p>${producto.description}</p>
                <p class="precio" >$${producto.price}</p>
                <a class="detalle" href="product.html?id=${producto.id}">Ver detalle</a>
                </article>`
    }
  })

  .catch(function(error) {
    console.log("Error: " + error)
  });
