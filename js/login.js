//LOGIN FORM
let formLogIn = document.querySelector(".form");
let inputMailContra = document.querySelector(".input_mail_contra");
let inputContra = document.querySelector(".input_mail_contra.contraseña")


formLogIn.addEventListener('submit', function(event) {  //aca agarrato el formulario completo, pero dentro de este me quiero fijar que todo el tema de el if este basado en el input que ingrsa el usuario
	event.preventDefault();  		                                
	if ( inputMailContra.value == "" ) {	                            
        alert("El campo Email esta vacio, completarlo")    	
    } else if (inputContra.value.length < 6 ){
        alert("La contraseña debe tener al menos 6 caracteres")   
    } else {
        this.submit()
        let mail = document.querySelector("#mail")
        let mailValue = mail.value
        console.log((mailValue));       		
        localStorage.setItem("Email del usuario", mailValue)                              
    }
})

console.log(localStorage)  