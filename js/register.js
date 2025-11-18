let formReg = document.querySelector(".form")
let inputMail = document.querySelector("#mail")
let inputContra = document.querySelector("#contra")
let repetirContra = document.querySelector("#repetir")

formReg.addEventListener('submit', function(event) {  
    event.preventDefault();
	if ( inputMail.value === "" ) {	                            
        alert("El campo Email esta vacio, completarlo")    	
    } 
    else if(inputContra.value === ""){
        alert("El campo Contraseña esta vacio, completarlo")    	
    }
    else if (inputContra.value.length < 6 ){
        alert("La contraseña debe tener al menos 6 caracteres")   
    } 
    else if (inputContra.value !== repetirContra.value){
        alert("Las contraseñas no coinciden")
    }
    else {	
        location.href = "./login.html"                            
    }
})

