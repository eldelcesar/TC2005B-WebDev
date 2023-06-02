# TC2005B-WebDev
Contenido visto en el módulo de desarrollo web para el bloque TC2005B del Tec de Monterrey.

## Fundamentos
En la [primer parte del bloque](Fundamentos) cubrimos los fundamentos y conceptos básicos del desarrollo web: HTML/CSS/JS, servidores web sencillos, llamadas asíncronas, entre otras cosas. Existen dos prácticas para esta parte: una para revisar las herramientas básicas, y otra para jugar con un servidor web y AJAX.

### 1) HTML/CSS/JS
En [esta practica](Fundamentos/Lab1-HTML-CSS-JS/), vemos el funcionamiento base de una página web. Encontramos los 3 archivos base: HTML, CSS y JS. Dentro de los archivos podemos jugar con las prioridades de CSS. También ver cómo correr funciones de JS desde un botón de HTML.


### 2) AJAX
La [esta practica](Fundamentos/Lab2-AJAX/) realiza una conexión sencilla a través de Asynchronous JavaScript And XML o AJAX. Crea un objeto XMLHttpRequest, configura las partes principales y, al momento de hacer click en un botón, se realiza una conexión asíncrona. Para que funcione este código, es necesario agregarlo a un servidor web (como [XAMPP](https://www.apachefriends.org)).


## Servicios Web
En la [segunda parte del bloque](Servicios-Web), el enfoque es desarrollar una aplicación web de principio a fin. A nivel teórico, veremos qué es REST y cómo implementar una API web utilizando endpoints en Node/ExpressJS. También cubriremos algunas cosas de front-end en ReactJS.

### 3) Back-end
En [esta practica](Servicios-Web/Lab3-Back-end/), nos enfocaremos en crear nuestro primer servicio web y, en particular, nuestro primer endpoint. Para esto, necesitaremos inicializar nuestro servidor web ExpressJS y configurar node.

### 4) Web APIs
En la práctica de [Web APIs](Servicios-Web/Lab4-Web-APIs/), exploraremos cómo trabajar con GET y POST para explorar más a fondo las Web APIs. Vamos a aprender cómo validar nuestra API.

### 5) Front-end
En este laboratorio iniciaremos la exploración del [Front-end](Servicios-Web/Lab5-Front-end/). Crearemos una app de React básica (con [Create-React-App](https://create-react-app.dev)) y lo conectaremos con nuestra API creada en el [Lab 4](Servicios-Web/Lab4-Web-APIs/).

### 6) Componentes
Después de probar cómo conectar front-end y back-end, ahora nos enfocaremos en el desarrollo de componentes en ReactJS. En este lab sobre [Componentes](Servicios-Web/Lab6-Componentes/), crearemos componentes básicos de React que utilicen props, estados y componentes anidados.

### 6) Deploy
Para cerrar el desarrollo de nuestra web app, exploraremos cómo hacer un despliegue (deployment) en Heroku. Este lab de [Deploy](Servicios-Web/Lab7-Deploy/) requiere descargar la carpeta, eliminar el repositorio local y crear uno nuevo en Heroku.