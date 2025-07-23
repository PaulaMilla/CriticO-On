# Dockerfile para MySQL 5.7 personalizado
FROM mysql:5.7

# Establece variables de entorno (puedes sobrescribirlas al ejecutar con -e)
ENV MYSQL_ROOT_PASSWORD=rootpass
ENV MYSQL_DATABASE=criticoon-db
ENV MYSQL_USER=criticuser
ENV MYSQL_PASSWORD=criticpass

# Copia el archivo SQL al directorio especial de inicialización de MySQL
COPY db-init.sql /docker-entrypoint-initdb.d/

# Exponer el puerto por si se desea acceder desde fuera del contenedor
EXPOSE 3306
