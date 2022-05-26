# Funciones Javascript

### Descripción
Repositorio de funciones Javascript.

### Funciones

#### `caracteresRaros(texto)`
**Descripción**

La función permite remplazar una lista de caracteres que existan dentro de una cadena de texto.

**Parámetros**

- **texto** *(string)* : cadena de texto que será formateada.

**Resultados**

```javascript
let miTexto = `
Test.										
\u0000! \u0001" \u0002# \u0003$ \u0004% \u0005& \u0006' \u0007() \u0008* \u0009+ \u000A, \u000B- \u000C/ \u000D0 \u000E1 \u000F2 \u00103 \u00114 \u00125 \u00136 \u00147 \u00158 \u00169 \u0017: \u0018; \u0019< \u001A= \u001B> \u001C? \u001D@  \u001EA \u001FB C D E F G H \u007FI J K L M N O P Q R S T U V W X Y Z [] \ _ ´
a b c d e f g h i j k l m n o p q r s t u v w x y z {} | {} ~
`;
let nuevoTexto = caracteresRaros(miTexto); // resultado sola línea: Test.! " # $ % & ' () * + , - / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z []  _ ´a b c d e f g h i j k l m n o p q r s t u v w x y z {}  {} ~
```