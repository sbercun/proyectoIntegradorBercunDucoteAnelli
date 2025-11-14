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



//RESULTADOS DE BUSQUEDA
let validacionBusqueda = document.querySelector(".buscador");
let inputBusqueda = document.querySelector(".boton_buscar");

validacionBusqueda.addEventListener('submit', function(event) {
	event.preventDefault();  		                                //Detenemos el comportamiento default del formulario que es enviarse.
	if ( inputBusqueda.value == "" ) {	                            //Chequeamos el contenido.
        alert("El campo esta vacio, completarlo")    	
    } else if(inputBusqueda.value.length < 3){
        alert("El campo esta incompleto, debe tener minimo 3 caracteres")
    } else{
        this.submit()        		                                //Si no hay errores entonces enviamos el formulario con el método submit()

    }
})
