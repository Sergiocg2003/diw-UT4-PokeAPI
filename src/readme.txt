Dos formas de añadir css de forma directa son las siguientes.

1.      Podemos ir añadiendo el atributo style en cada línea de html como podemos ver en el siguiente ejemplo en el cual a
un h2 le damos estilo.

Ejemplo:
<h2 style:"color: red; background: black;">Esto muestra el texto en color rojo en un fondo negro</h2>

Esto no es recomendable porque hace que aumente mucho el tamaño que ocupa la página lo que hace que el tiempo de carga sea mayor, además
de que esto hace más complicado el hecho de cambiar el estilo de nuestra página.

2.      Otra forma es añadir el contenido del css dentro de la etiqueta style.

Ejemplo:
<style type="text/css" media="screen">
    h2{
        color: red;
        background: black;
    }
</style>

Esto no es recomendable porque estamos cargando en exceso nuestro html y puede dificultar su lectura además de que nos tendremos que descargar
los estilos con cada entrada a la página
