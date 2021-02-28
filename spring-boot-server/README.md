mvn install

docker build -t backendapp-image .

docker run -p 8081:8081 --name backendapp-container backendapp-image


