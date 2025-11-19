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



//========================================RESULTADOS DE BUSQUEDA=======================================
//Guardar la busqueda del usuario
let busqueda = location.search; //agarra todo lo que esta despues del ?
let resultsBusqueda = new URLSearchParams(busqueda); //define los metodos para trabajar con los parametros
let idBusqueda = resultsBusqueda.get('queBusco') //busca el valor del parametro que se llama queBusco
console.log(idBusqueda)

// capturamos los contenedores de la sección
let productosRela = document.querySelector('.seccion.best')


fetch (`https://dummyjson.com/products/search?q=${idBusqueda}`)
  .then(function(busqueda){
    return busqueda.json()
  })

  .then(function(data){
    let titulo = document.querySelector('.titulo');
    
    if(!idBusqueda || data.products.length === 0){
       //cambio el "Resultados para:..." si NO existe esa categoria
       titulo.innerText = 'No hay resultados para el término: ' + idBusqueda;

    }else{
      //cambio el "Resultados para:..." si SI existe esa categoria
      titulo.innerText = 'Resultados para: ' + idBusqueda; 

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
    }
  })
  .catch(function(error) {
    console.log("Error: " + error)
  })
