






**REQUISITOS**
 - [ ] Maven
 - [ ] NodeJs e NodePackageManager
 - [ ] Docker
 - [ ] Angular CLI (npm install -g @angular/cli)

  
**RODAR A APLICAÇÃO**  
  
**Empacotar a Distribuição**  
  (fullstack-app/angular-11-client): 

>   mvn install

  
**Criar a Imagem Docker**  
  
(fullstack-app/angular-11-client): 

> docker build -t backendapp-image .

  
**Rodar o Container (separado da aplicação)**  
  
(fullstack-app/angular-11-client): 

> docker run -p 8081:8081 --name backendapp-container backendapp-image