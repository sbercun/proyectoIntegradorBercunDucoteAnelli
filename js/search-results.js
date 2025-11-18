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



//BARRA DE BUSQUEDA
let validacionBusqueda = document.querySelector(".buscador");
let inputBusqueda = document.querySelector(".boton_buscar");

validacionBusqueda.addEventListener('submit', function(event) {  //aca agarrato el formulario completo, pero dentro de este me quiero fijar que todo el tema de el if este basado en el input que ingrsa el usuario
	event.preventDefault();  		                                
	if ( inputBusqueda.value == "" ) {	                            
        alert("El campo esta vacio, completarlo")    	
    } else if(inputBusqueda.value.length < 3){
        alert("El campo esta incompleto, debe tener minimo 3 caracteres")
    } else{
        this.submit()        		                                
    }
})



//RESULTADOS DE BUSQUEDA
  //Guardar la busqueda del usuario
let busqueda = location.search;
let resultsBusqueda = new URLSearchParams(busqueda);
let idBusqueda = resultsBusqueda.get('queBusco')

console.log(idBusqueda)

let productosRela = document.querySelector('.seccion.best')

fetch (`https://dummyjson.com/products/search?q=${idBusqueda}`)
  .then(function(busqueda){
    return busqueda.json()
  })

  .then(function(data){
    //cambio el "Resultados para:..."
    let titulo = document.querySelector('.titulo');
    console.log(titulo)
    titulo.innerText = 'Resultados para: ' + idBusqueda 

    //modifico los productos que aparecen
    for (let i = 0; i < data.products.length; i++) {
      let productos = data.products[i]
      productosRela.innerHTML += `
              <article class="producto">
              <img src="${productos.thumbnail}" alt="${productos.title}">
              <h3>${productos.title}</h3>
              <p>${productos.description}</p>
              <p class="precio" >$${productos.price}</p>
              <a class="detalle" href="product.html?id=${productos.id}">Ver detalle</a>
              </article>`
    }
  })

  .catch(function(error) {
    console.log("Error: " + error)
  })
