ng build
 
docker build -t frontendapp-image .

docker run -p 8081:8081 --name frontendapp-container frontendapp-image


