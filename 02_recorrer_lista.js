/* 
  La funcioón recorre cada elemento de la lista, imprimiendo la posición x,y,id
  Recibe como parametro el string del id de la etiqueta ul,ol
*/
function recorrerLista(idLista){
  let lista = document.getElementById(idLista);
  if (lista){
    let items = lista.getElementsByTagName('li');
    let props = {};
    let itemId = ''; 
    for(let i = 0; i < items.length; i++){
      props = items[i].getBoundingClientRect();
      itemId = items[i].id;
      console.log('ItemInfo: id = "%s", x = %s, y = %s', itemId, props.x, props.y);
    }
  } else {
    console.warn('El elemento: %s NO fue encontrado dentro del HTML', idLista)
  }
}