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

**ATUALIZAR PRODUTO**
> **Request URL:** http://localhost:8080/api/milkboxes/2651
> **Request Method:** PUT
> **Request Payload:** `{"id":2651,"codigo":"cesarr","nome":"666"}`
> **Response Content-Type:** application/json 
> `{"id":2651,"codigo":"cesarr","nome":"666"}`

**DELETAR PRODUTO PELO ID**

> **Request URL:** http://localhost:8080/api/milkboxes/2651
> **Request Method:** DELETE
