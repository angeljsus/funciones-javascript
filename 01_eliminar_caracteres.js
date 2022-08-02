function caracteresRaros(texto){
	texto = texto.replace(/[\u0000-\u0019|\u001A|\u001B|\u001C|\u001D|\u001E|\u001F|\u007F]/g, '')
	return texto;
}