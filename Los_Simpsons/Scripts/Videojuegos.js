let contador = 0;
        
/*funcion que oculta las imagenes de la galeria, y las estrellas segun cuantas imagenes haya*/
function eliminar(num){
    imagen = document.getElementsByClassName('huecos');
    estrellas2 = document.getElementsByClassName('span2');
    estrellas3 = document.getElementsByClassName('span3');
            
    imagen[num].style.display = "none";
            
    contador++;
    /*si elimino una fila completa de imagenes de la galeria, entonces elimino las estrellas que se encuentren mas 
    abajo para que no se salgan del body*/
    if(contador == 3){
        for(let i = 0; i<estrellas3.length; i++){
            estrellas3[i].style.display = "none";
        }
    }
    if(contador == 6){
        for(let j = 0; j<estrellas2.length; j++){
            estrellas2[j].style.display = "none";
        }
    }
}

/*funcion que vuelve a mostrar todas las imagenes de la galeria y las estrellas*/
function resetear(){
    imagen = document.getElementsByClassName('huecos');
    contador = 0;
            
    for(let i = 0; i<imagen.length; i++){
        imagen[i].style.display= '';
    }

    for(let j = 0; j<estrellas3.length; j++){
        estrellas2[j].style.display = '';
        estrellas3[j].style.display = '';
    }
}