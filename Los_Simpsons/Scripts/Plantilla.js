/*funcion para ocultar y desocultar el menu vertical*/
function menu_vertical() {
    var x = document.getElementById("menuV");
    var y = document.getElementById("boton_menuV");
    
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.transform = "rotate(-180deg)";
    } else {
        x.style.display = "block";
        y.style.transform = "rotate(0deg)";
    }
}

/*funcion para ocultar y desocultar el menu de ajustes*/
function ajustes() {
    var x = document.getElementById("contenedor_Ajustes");
    
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/*funcion para cambiar entre modo nocturno y modo dia, al igual que los elementos*/
function modoNyD(){
    var icono = document.getElementById("icono_NyD");
    var body = document.getElementsByTagName("body");
    var estrellas = document.getElementsByTagName("section");
    var parrafos = document.getElementsByClassName("parrafo");
    var cartas = document.getElementsByClassName("contenido");
    var hr = document.getElementsByTagName("hr");
    var td = document.getElementsByTagName("td");

    if (icono.className === "fa fa-moon-o") {
        icono.className = "fa fa-sun-o";
        icono.style.color = "#ffa600";

        body[0].style.backgroundImage = "linear-gradient(#090a0f 0%, #2f374a 130%)";

        estrellas[0].style.display = "block";

        /*cambio de color de la letra*/
        for (var i = 0; i < parrafos.length; i++) {
            parrafos[i].style.color = "white";
        }

        /*cambio de los divs contenedores*/
        for (var i = 0; i < cartas.length; i++) {
            cartas[i].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }

        /*cambio de los hr*/
        for (var i = 0; i < hr.length; i++) {
            hr[i].style.border = "1px solid white";
        }

        /*cambio de color de los td de las tablas*/
        for (var i = 0; i < td.length; i++) {
            td[i].style.border = "1px solid white";
        }
        
    } else {
        icono.className = "fa fa-moon-o";
        icono.style.color = "#54ccff";

        body[0].style.backgroundImage = "linear-gradient(#264182 0%, #99e9ff 100%)";

        estrellas[0].style.display = "none";

        /*cambio de color de la letra*/
        for (var i = 0; i < parrafos.length; i++) {
            parrafos[i].style.color = "black";
        }

        /*cambio de los divs contenedores*/
        for (var i = 0; i < cartas.length; i++) {
            cartas[i].style.backgroundColor = "rgba(225, 225, 225, 0.5)";
        }

        /*cambio de los hr*/
        for (var i = 0; i < hr.length; i++) {
            hr[i].style.border = "1px solid black";
        }

        /*cambio de color de los td de las tablas*/
        for (var i = 0; i < td.length; i++) {
            td[i].style.border = "1px solid black";
        }
    }
}

/*funcion para cambiar de idioma*/
function cambioIdioma(aux){
    var traduccion_ESP = document.getElementsByClassName("ESP");
    var traduccion_EN = document.getElementsByClassName("EN");

    if(aux){
        /*oculto todos los parrafos que contengan la etiqueta ESP y desoculto los que tengan la etiqueta EN*/
        for (var i = 0; i < traduccion_ESP.length; i++) {
            traduccion_ESP[i].style.display = "none";
            traduccion_EN[i].style.display = "inline-block";
        }
    }
    else{
        /*oculto todos los parrafos que contengan la etiqueta EN y desoculto los que tengan la etiqueta ESP*/
        for (var i = 0; i < traduccion_EN.length; i++) {
            traduccion_EN[i].style.display = "none";
            traduccion_ESP[i].style.display = "inline-block";
        }
    }
}