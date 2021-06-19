/*esta variable la utilizo para recorrer los arrays que contienen las diferentes imagenes de captcha, el cual se actualiza
para cambiar de imagenes, hasta llegar al maximo de imagenes. en ese momento se reseteara a 0*/
let aux = 0;
/*pongo fuera la variable del codigo captcha que corresponda a cada imagen porque necesito que se actualice cada vez que 
se cambia de imagen, para luego poder cogerla en otra funcion. en un principio le doy el codigo del captcha que aparece cuando
se carga la pagina, pero este se actualiza al cambiar las imagenes*/
let codCaptcha = "E5HB";

/*funcion para cambiar las imagenes del captcha*/
function imgCaptcha(){
    let imgCaptchas = ["url('../Imagenes/contacto/captcha1.jpg')", "url('../Imagenes/contacto/captcha2.jpg')", "url('../Imagenes/contacto/captcha3.jpg')"];
    let codCaptchas = ["E5HB", "FH2DE", "6NE3"];
    let imagen = document.getElementsByClassName('contenedorImg')[0];

    aux++;
    if(aux == imgCaptchas.length){
        aux = 0;
    }

    imagen.style.backgroundImage = imgCaptchas[aux];
    codCaptcha = codCaptchas[aux];
}


/*funcion que lee lo que hay escrito en el input del captcha cada vez que pulsa el intro en el mismo. si el codigo del captcha
es correcto, muestra el boton de enviar formulario, si no cambia el captcha*/
document.getElementById('captcha').addEventListener('keyup', function onEvent(e) {

    let botonEnviar = document.getElementsByClassName('enviar')[0];
    let captcha = document.getElementsByClassName('pruebaCaptcha')[0];
    let codigo = document.getElementById('captcha').value;
    
    if (e.keyCode === 13) {
        if(codigo.toUpperCase() == codCaptcha){
            captcha.style.display = "none";
            botonEnviar.style.display = "block";
        }else{
            imgCaptcha();
        }
    }
});


/*funcion que es llamada cuando se pulsa el boton de enviar. esta funcion comprueba si los campos obligatorios han sido
rellenados, y en el caso de que no lo hayan sido, se hace visible la alerta del campo que no este rellenado. Ademas, antes de
hacer visible la alerta, comprueba el idioma (segun el texto que se encuentre en el boton) y luego pone el texto de alerta
en su idioma correspondiente*/
function capturarFormulario(){
    let inputsObligatorios = document.getElementsByClassName('obligatorio');
    let boton = document.getElementsByClassName('enviar')[0].value;
    let alertas = document.getElementsByClassName('alerta');
    
    for(let i = 0; i<inputsObligatorios.length; i++){

        if(inputsObligatorios[i].value == ""){
            
            alertas[i].style.display = 'block';
            
            if(boton == "Enviar"){
                alertas[i].innerHTML = "Este campo es obligatorio";
            }else{
                alertas[i].innerHTML = "This field is required";
            }
        }
        else{
            alertas[i].style.display = 'none';
        }
    }
}

/*funcion para cambiar los placeholders de idioma. Necesito una funcion porque los placeholders son atributos de la propia 
etiqueta de los imputs, y no lo que hay dentro de ellos. No puedo tampoco duplicarlos y ocultarlos y desocultarlos porque 
no podria detectar bien el texto que entra por ellos*/
function idiomaInputs(bool){
    let inputs = document.getElementsByClassName('input');
    let boton = document.getElementsByClassName('enviar')[0];
    let placeholdersESP = ["Nombre...", "Apellidos...", "Correo...", "Telefono...", "Escribe tu sugerencia aqui..."];
    let placeholdersEN = ["Name...", "Surnames...", "Email...", "Phone number...", "Type your suggestion here..."];
    
    if(bool){
        for(let i = 0; i<inputs.length; i++){
            inputs[i].placeholder = placeholdersEN[i];
        }

        /*boton de enviar. lo cambio por separado porque de este input no quiero cambiar el praceholder (ya que no tiene), si
        no la propiedad de value*/
        boton.value = "Send";
    }
    else{
        for(let i = 0; i<inputs.length; i++){
            inputs[i].placeholder = placeholdersESP[i];
        }

        boton.value = "Enviar";
    }
}