# Funciones Javascript

### Descripción
Repositorio de funciones Javascript.

### Funciones

#### `caracteresRaros(texto)`
**Descripción**

La función permite remplazar una lista de caracteres que existan dentro de una cadena de texto codificando los más comunes.

**Parámetros**

- **texto** *(string)* : cadena de texto que será formateada.

**Resultados**

- La función regresa el texto formateado

```javascript
let miTexto = `
Test. # ()										
\u0000! \u0001" \u0002# \u0003$ \u0004% \u0005& \u0006' \u0007() \u0008* \u0009+ \u000A, \u000B- \u000C/ \u000D0 \u000E1 \u000F2 \u00103 \u00114 \u00125 \u00136 \u00147 \u00158 \u00169 \u0017: \u0018; \u0019< \u001A= \u001B> \u001C? \u001D@  \u001EA \u001FB C D E F G H \u007FI J K L M N O P Q R S T U V W X Y Z [] \ _ ´
a b c d e f g h i j k l m n o p q r s t u v w x y z {} | {} ~
`;
let nuevoTexto = caracteresRaros(miTexto); // resultado sola línea: Test&period; &num; &#40;&#41;&excl; &quot; &num; &dollar; &percnt; & &apos; &#40;&#41; &ast; &plus; &comma; &#45; &sol; 0 1 2 3 4 5 6 7 8 9 &colon; ; &lt; &equals; &gt; &quest; &commat;  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z &lsqb;&rsqb;  &lowbar; ´a b c d e f g h i j k l m n o p q r s t u v w x y z &lcub;&rcub; &verbar; &lcub;&rcub; &tilde;
```

#### `recorrerLista(idLista)`
**Descripción**

La función permite recorrer los elementos de una lista html(`<li><li>`).

**Parámetros**

- **idLista** *(string)* : id del elemento de la lista `<ul>` o `<ol>`.

**Resultados**
```html
<ul id="miId">
	<li id="elItem">Elemento 1</li>
	<li id="loItem">Elemento 2</li>
</ul>
```
```javascript
recorrerLista('miId') // resultados: ItemInfo: id = "elItem", x = 36, y = 65; ItemInfo: id = "loItem", x = 36, y = 65
```