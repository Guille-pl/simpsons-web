/*Esta funcion modifica el tamaño de la linea del timeline dependiendo del idioma del texto y de la anchura del navegador.
La necesito debido a que el texto no ocupa el mismo espacio en ambos los idiomas ni en diferentes anchuras de navegador*/
function heightLinea(aux){
    var linea = document.querySelector('.linea');
    /*cojo la anchura del navegador y la guardo en w*/
    var w = window.innerWidth;

    if(aux){
        if(w < '600'){
            linea.style.height = '2990' + 'px';
        }
        else{
            linea.style.height = '2400' + 'px';
        }
    }
    else{
        if(w < '600'){
            linea.style.height = '3400' + 'px';
        }
        else{
            linea.style.height = '2700' + 'px';
        }
    }
}