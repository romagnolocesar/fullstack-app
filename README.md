**BACKEND**

Criar JAR e Imagem Docker

docker build -t springbootapp-image .

**FRONTEND**

ngbuild

docker build -t frontendapp-image .

**SUBIR APLICAÇÃO**

docker-compose -f docker-compose.yaml up
