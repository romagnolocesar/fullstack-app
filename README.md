
# CRUD CATALOGO (CAIXA DE LEITE)

     - Essa aplicação foi desenvolvida como parte de um desafio para uma
       vaga de FullStack Developer. 
       
     - O Backend e o Frontend estão no mesmo projeto. 
     -  
     - A arquitetura foi desenvolvida para que cada
       aplicação rode modularmente e independente uma da outra, facilitando
       assim a troca, manutenção e evolução do código com o minimo impacto
       possivel.

**BACK-END (API)**
---
***Requisitos Dev***

 - [ ] Apache Maven 3.6.3*
 - [ ] Node Package Manager: '7.5.3'
 - [ ] NodeJs: '15.10.0'

O **Backend** foi desenvolvido em *SpringBoot 2.3.5 com JPA* e *Hibernate* para persistencia dos dados. Rodando em um container com base **`openjdk:8-jdk-alpine`** no **`Docker 20.10.2`**

 **Instalação e empacotamento .JAR**

Entrar na pasta raiz do projeto do Backend **spring-boot-server**

Validar e compilar o projeto, testá-lo através de seus testes unitários (ainda preciso implementar) e gerar o pacote com o código compilado:  

    > mvn install

 **Criação da Imagem Docker**
 

    > docker build -t backendapp-image . 

---
**Rodando a Imagem em um Container Separado *(NÃO RECOMENDADO)***

> A imagem gerada acima deverá subir em um container dentro de um
> container pai usando o ***docker-compose*** para que toda a
> comunicação dentro do padrão **REST FULL** sejá respeitada evitando
> problemas de segurança ou cross-domain, mas para subir a imagem gerada
> acima em um container separado para desenvolvimento ou testes poderá
> rodar o comando  

    > docker run -p 8080:8080 --name backendapp-container backendapp-image


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


# RODAR A APLICAÇÃO COMPLETA

***Requisitos Dev***

 - [ ] Docker Compose : 1.27.4, build 40524192

Com as duas imagens docker ***backendapp-image*** e ***frontendapp-image*** criadas nas etapas anteriores podemos agora criar um container pai para rodar a aplicação completa.

    > docker-compose -f docker-compose.yaml up

Temos nossa aplicação rodando em http://localhost:8081

# ENDPOINTS


**BUSCAR TODOS PRODUTOS**

> **Request URL**: http://localhost:8080/api/milkboxes
> **Request Method:** GET

**BUSCAR PRODUTO PELO ID**

> **Request URL:** http://localhost:8080/api/milkboxes/500 Request Method:
> **Request Method:** GET

**BUSCAR PRODUTO PELO NOME**

> **Request URL:** http://localhost:8080/api/milkboxes?nome=LEITE%20UHT%20INTEGRAL
> **Request Method:** GET

**CADASTRAR NOVO PRODUTO**

> **Request URL:** http://localhost:8080/api/milkboxes/add
> **Request Method:** POST
> **Response** Content-Type: application/json `{"id":2701,"codigo":"1212","nome":"1212"}`
> 
> 
> **ATUALIZAR PRODUTO**
> **Request URL:** http://localhost:8080/api/milkboxes/2651
> **Request Method:** PUT
> **Request Payload:** `{"id":2651,"codigo":"cesarr","nome":"666"}`
> **Response Content-Type:** application/json 
> `{"id":2651,"codigo":"cesarr","nome":"666"}`

**DELETAR PRODUTO PELO ID**

> **Request URL:** http://localhost:8080/api/milkboxes/2651
> **Request Method:** DELETE
