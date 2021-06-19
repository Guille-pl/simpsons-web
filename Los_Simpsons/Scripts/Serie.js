/*SCRIPT PARA DAR FUNCIONALIDAD AL BUSCADOR DE CAPITULOS*/

/*llamo al input de las busquedas, y le añado un eventListener para que haga un submit cada vez que termine de 
pulsarse una tecla, por lo que coge los valores uno por uno. Ademas al coger cada valor llamo a la funcion 
"filtradorValores"*/
document.getElementById('buscador').addEventListener('keyup', filtradorValores);

function filtradorValores(){

    /*transformo todos los valores a mayusculas*/
    let valor = document.getElementById('buscador').value.toUpperCase();
    var contador = 0;
                
    let tabla = document.getElementsByClassName('lista')[0];
    let tr = tabla.querySelectorAll('tr.episodios');

    for(let i = 0; i < tr.length; i++){
        for(let j = 0; j < 4; j++){
            /*recorro todos los tr con la clase .episodios --> [i]  y para cada uno de ellos recorro todos los td que
            contiene --> [j]*/
            let td = tr[i].getElementsByTagName('td')[j];
                        
            /*si encuentro alguna councidencia en alguno de los td, lo muestro*/
            if(td.innerHTML.toUpperCase().indexOf(valor) > (-1)){
                tr[i].style.display = '';
                break;
            }
            /*si no encuentro ninguna councidencia en las 4 columnas de una fila, elimino esa fila*/
            else{
                contador++;
                            
                if(contador==4){
                    tr[i].style.display = 'none';
                }
            }
        }
        contador=0;
    }
}

/*Esta funcion unicamente la uso para cambiar el placeholder del buscador. Lo necesito ya que no puedo crear dos buscadores y ocultar uno
dependiendo del idioma, porque para llamarlo necesito su id. Por ello, en vez de crear dos, creo uno y uso esta funcion para modificar
su placeholder dependiendo del idioma*/
function buscador(idioma){
    if(idioma){
        document.getElementById('buscador').placeholder='Search an episode...';
    }
    else{
        document.getElementById('buscador').placeholder='Busca un episodio...';
    }
}