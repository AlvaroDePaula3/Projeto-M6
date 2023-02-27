
# Projeto do módulo 5 Programadores Cariocas    

A ideia desse projeto é criar uma API no padrão REST com CRUD, para integrar o front end com o banco de dados, visando assim executar todas a operações necessárias.

Para executar essa API é necessário instalar os seguintes módulos e o framework Express, seguindo os comandos abaixo dentro do terminal.

npm init
npm install express

npm install sequelize sqlite3

<!-- Nodemon é opcional, porém recomendado para não ser preciso fechar e abrir o servidor para mostrar as alterações feitas no código do projeto -->

npm install -g nodemon
npm install --save-dev nodemon 

Depois executar o script createTable.js que está na pasta src/utils com o comando abaixo, para criar as tabelas no banco de dados.

node crateTable.js

Para executar a API é só dar o seguinte comando abaixo no arquivo server.js que está dentro da pasta src.

node server.js


Autor Fabiano Almeida.