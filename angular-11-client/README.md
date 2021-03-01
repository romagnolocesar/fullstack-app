**FRONT-END (CLIENTE)**
---
***Requisitos Dev***

 - [ ] Node Package Manager: '7.5.3', 
 - [ ] NodeJs: '15.10.0'.
 - [ ] Angular CLI: 11.0.7  `(npm install -g @angular/cli)`

O Frontend foi desenvolvido em *Angular 11.0.2* com *Bootstrap 4*, utilizando o *Apache Maven 3.6.3*, rodando em um container com base **`node:14`** no **`Docker 20.10.2`**

 **Instalação das dependencias**
 
 Entrar na pasta raiz do projeto do Backend **angular-11-client**
 
    > npm install
 
 **Compilar e Gerar Distribuição**

Compilar TypeScript em JavaScript e gerar o pacote da distribuição na pasta ***dist***.

    > ng build

 **Criação da Imagem Docker**
 
    > docker build -t backendapp-image . 
    
**Rodando a Imagem em um Container Separado *(NÃO RECOMENDADO)***

> A imagem gerada acima deverá subir em um container dentro de um
> container pai usando o ***docker-compose***. Mas para subir a imagem gerada
> acima em um container separado para desenvolvimento ou testes poderá
> rodar o comando  

    > docker run -p 8081:8081 --name frontendapp-container frontendapp-image
