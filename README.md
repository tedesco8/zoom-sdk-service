# api-rest-express
_RESTful API implementando Clean Architecture

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
Lo primero que necesitas para comenzar a usar el software es tener Node.js instalado en tu sistema y una base de datos Mongodb.
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes hacer para tener un entorno de desarrollo ejecutandose_

_Instala las dependencias del proyecto_

```
npm install
```

_Agrega un archivo .env a la raiz y pon tus credenciales_

```
touch .env

PORT=<PORT>
MONGO_URI=<MONGO_URI>
APPLICATION_NAME=<APPLICATION_NAME>
JWT_SECRET=<JWT_SECRET>
CACHE_KEY=<CACHE_KEY>
SWAGGER_DOC=swaggerDEV
ZOOM_API_KEY=<ZOOM_API_KEY>
ZOOM_API_SECRET=<ZOOM_API_SECRET>
```

_Ejecuta el proyecto_

```
npm run dev
```
## Construido con 🛠️

* [Node](https://nodejs.dev/) - Entorno de ejecución
* [Express](https://expressjs.com/es/) - Framework Backend
* [mongoose](https://mongoosejs.com/) - ORM
* [Awilix](https://github.com/jeffijoe/awilix) - Inyección de dependencias
* [compression](https://www.npmjs.com/package/compression) - compresor de respuestas
* [helmet](https://helmetjs.github.io/) - Seguridad en cabeceras HTTP
* [jest](https://jestjs.io/) - Testing

* [swagger-ui-express](http://raw.githack.com/MrRio/jsPDF/master/docs/index.html) - documentación
## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

* **Pablo Tedesco** - *Trabajo Inicial* - [tedesco8](https://github.com/tedesco8)



---
⌨️ con ❤️ por [Vu Security](https://www.vusecurity.com/es) 😊