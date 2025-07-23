Integrantes: Julisa Figueroa, Paula Veloso y Antonia Yévenes

El repositorio se encuentra en la siguiente ruta:
https://github.com/PaulaMilla/CriticO-On.git

El drive del proyecto está en:
https://drive.google.com/drive/folders/1vY8eJ-nlw-x9H5CsvljAgGE_bklQCpcz?usp=sharing

El repositorio en GitHub tiene el despliegue hecho en GKE con manifestos Kubernetes y 
el Drive tiene el proyecto para poder ejecutarse de manera local.

Link página en GC: http://34.27.96.165/

Para la carpeta backend-server hay que crearle su node_modules:
> cd backend-server
/backend-server > npm install

Lo mismo para el frontend:
> cd CriticO-On
CriticO-On > npm install

Para ejecutarlo de manera local, ejecutar el docker-compose.yaml:
> docker-compose up --build

La página estará en localhost:8011, para detener el docker-compose:
> docker-compose down -v