# Dockerfile para MySQL 5.7 personalizado
FROM mysql:5.7

# Copia el archivo SQL al directorio especial de inicialización de MySQL
COPY init.sql /docker-entrypoint-initdb.d/

# Exponer el puerto por si se desea acceder desde fuera del contenedor
EXPOSE 3306
