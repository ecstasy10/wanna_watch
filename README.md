# wanna watch?
## deploy: https://wwatch.davidbdev.com

Empecé este proyecto en Vanilla JS, cuando comprendí como funciona Ajax y las funciones asincronas decidí cambiar la forma de trabajo y empezar a usar <b>VUE.js</b> como framework de trabajo sobre el cual desarrollaría la aplicación, para finalmente desplegarla en Firebase. He usado <b>Bootstrap</b> para la interfaz HTML de la Web App.

El proyecto consta de una página web que muestra las películas y series más populares de este mes, además se implementa la opción de busqueda mixta para películas o series de televisión, y el filtrado por categoría.

<b>_El proyecto que realicé de inicio para saber como funciona Ajax esta en el siguiente repositorio: https://github.com/itsnotLonee/Moovie.git (el proyecto quedó a medias)_</b>

#### Requisitos funcionales
  - Como analista querría implementar la funcionalidad de categorías usando la tecnología Ajax y el REST json-server desde un fichero json en github para que funcione de forma asíncrona. :white_check_mark:
  - Como usuario querría una galería de fotos de un banco de imágenes que me permita filtrar por categorías las imágenes para facilitar la búsqueda :white_check_mark:
  - Como usuario querría que la galería de imágenes se mostrará por páginas, mostrando las páginas de imágenes, la página actual y permita avanzar hacia adelante y hacia atrás para que cargue más rápido :white_check_mark:
  - Como analista querría que las peticiones ajax se realizarán mediante promesas o asyn/await utilizando vainilla JavaScript sin frameworks para mejorar el rendimiento y claridad del código y no depender de librerías externas :small_blue_diamond:
#### Requisitos técnicos
  - No puede utilizarse jquery, axios ni fectch, debe utilizarse Vainilla JavaScript :small_blue_diamond:
  - Los Callbacks deben utilizar promesas o Async/await :white_check_mark:
  - Se valorará positivamente la utilización de  frameworks como Vue, Angular o React :white_check_mark:
  - Se valorará positivamente utilizar bootstrap para hacer la galería de imágenes responsive :white_check_mark:
 
:white_check_mark: : Hecho <br>
:small_blue_diamond: : Se utilizó Axios, una vez despues de haber realizado el proyecto en VanillaJS; para su mejor implementación con VUE.js <br>
:wrench: : Trabajando en ello
  
## API utilizada :key:

Se ha usado la BD de https://www.themoviedb.org/ para obtener el JSON con la información necesaria.

## Bootstrap :b:

Se ha utilizado bootstrap para el estilo de la Web App.

  - Versión utilizada: v4.4.1
  - Elementos utilizados:
      - Carousel _(Index.vue)_
      - Cards _(Search.vue)_
      - NavBar
      
## VUE.js :eight_spoked_asterisk:

#### La forma utilizada para la implementación de Vue es la siguiente:

    /
    └─── src/
            └─── assets/
                └─── no_photo.jpg
            └─── components/
                └─── index.vue
                └─── search.vue
            └─── router/
                 └─── index.js
            └─── App.vue
            └─── main.js

Se ha creado una aplicación web con Webpack-cli & Vue-cli. Dentro de la carpeta src/ encontraremos todo el código referido a como funciona la aplicación. El archivo App.vue y main.js definiran la forma de trabajo de nuestra aplicación, dentro de router/ el archivo index.js especificará la ruta de los componentes en la carpeta components/. En esta carpeta se encuentra index.vue y search.vue que son los dos componentes que va a cargar nuestra aplicación dependiendo de lo que le pidamos.

## Firebase :fire:

Se utiliza firebase para soportar el hosting de nuestra aplicación, perminitiendonos desplegarlo sobre una URL propia.
URLs proporcionadas por Firebase:
  - https://wanna-watch-b79a0.web.app/#/
  - https://wanna-watch-b79a0.firebaseapp.com/#/
  

## Build Setup :hammer:

``` bash
# install dependencies
npm install
npm install -g webpack-cli
npm install -g @vue/cli

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
