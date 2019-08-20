## Resumo: 

  

Esse projeto está dividido em 2 microserviços: Serviço web (Angular) + Serviço Api (Spring Boot). 


## Requisitos: 

1. Postgres 9.6 ou superior

2. Jdk 8 ou superior 

3. angular 6 + 

4. angular cli

Para rodar esse projeto localmente e necessário ter uma jvm configurada, uma base de dados postgres instalado e por fim ter em sua maquina o angular cli ou alguma forma de simular um http serve para o front. 
    
  
## Rum: 
  

1. Clonar o repositório localmente. 

2. Configurar a base de dados (postgres). (exemplo abaixo)

3. obter e executar o jar do serviço java e-commerce 

4. executar o serviço angular. (exemplo abaixo)
  

### Configurar a base de dados (postgres) 

Para configurar o acesso a base na API e-commerce, altere o arquivo application.yml. Seu arquivo de se parecer com o código abaixo. 

  

spring:  

  datasource: 

    url: jdbc:postgresql://localhost:5432/e-commerce 

    username: postgres 

    password: postgres 

    driver-class-name: org.postgresql.Driver 

## Executar o jar do serviço e-commerce 

Após configurar a base dados basta utilizar uma jvm para executar o .jar. Com a jvm devidamente configurada na máquina execute o comando “java -jar <nome-do-jar>”  

## Executar o serviço angular. 

Para executar o serviço angular basta utilizar o comando ng serve do angular cli ou usar outro servidor http, como por exemplo http-serve. 

1. Entre na pasta do front/e-commerce:
  
  - cd <path-local>front/e-commerce.
  
2. Execute o install do npm:

  - npm install

3. E por fim start o serve
  
  - ng serve


 
