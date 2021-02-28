**BACKEND**

mvn install

docker build -t backendapp-image .

**FRONTEND**

ng build

docker build -t frontendapp-image .

**SUBIR APLICAÇÃO**

docker-compose -f docker-compose.yaml up
