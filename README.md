#Desafio#
### 1. Testes API
 ## **Frameworks Utilizados:**

```
joi 
chai
mocha 
supertest
joi-assert 
mochawesome 
```

 ## Para Iniciar ##

 ## **Dependências:**
```
Node.js v18 ou superior
```
## **Atualizando o Projeto:**

Executar o comando na pasta API:
```
sudo npm install --safe
```
O comando vai instalar ou atualizar todos os frameworks utilizados no projeto, caso falhe instale manualmente:

```
sudo npm install supertest -g
sudo npm install mocha -g
sudo npm install chai -g
sudo npm install joi -g
sudo npm install joi-assert -g
sudo npm install mochawesome -g
```


## **Execução dos testes:**
Executar o comando na raiz do projeto:
```
npm run exec_teste
```

Cada Execução gera um relatório HTML, que pode ser acessado em:
```
mochawesome-report/mochawesome.html
```

 ______________________________________

 ### 2. Teste Perfomance
 ## **Frameworks Utilizados:**

```
K6 
```
[Doc para instalação](https://k6.io/docs/get-started/installation/)


## **Execução dos testes:**
Executar o comando dentro da raiz do projeto:
```
npm run exec_teste_perfomance
```

Esse comando vai executar o arquivo test_perfomance.js que está dentro da pasta k6.

Ele está configurado para 5VU's (usuarios virtuais) por 15 segundos, esses parametros podem ser alterados.

## **Relatório de Execução:**

```
Checks: Porcentagem de sucesso das requisiçoes  
```
```
Http_req_failed: Porcentagem de falhas das requisiçoes  
```
```
Http_req_duration: O tempo de ponta a ponta de todas as solicitações, a latência total
```
```
Iterations: Numero total de interações  
```