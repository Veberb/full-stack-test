<p align="center">
  <img width="260" src="https://github.com/myTapp/front-end-test/blob/master/mytapp.png?raw=true">
</p>

- Ambiente

  - Node - v10.15.0
  - Vue - 2.6.10
  - PostgreSQL 10.6

- Banco

  - Adicionar as configurações do seu banco no arquivo: [Database](server/config/database.js).
  - Feito isso, rodar o comando **node_modules/.bin/sequelize db:migrate** para executar o script de migração.

- API:

  - Api pública para criação do usuário inicial: **Post** http://localhost:3000/api/users
  - Exemplo:
    `curl 'http://localhost:3000/api/users/' \ -H 'Accept: application/json, text/plain, /' \ -H 'Origin: http://localhost:8080' \ -H 'Content-Type: application/json;charset=UTF-8' \ --data-binary '{ "name": "Lucas", "email": "lucasveberdebrida@gmail.com", "password": "123123" }' --compressed`

- Rodando o projeto

  - Na raiz do projeto, rodar comando `npm install` para instalar as dependencias do front e backend.
  - Ainda na raiz, rodar o comando `npm run client` para subir o frontend no endereço http://localhost:8080
  - Rodar o comando `npm run server` para subir o backend disponível no endereço http://localhost:3000
