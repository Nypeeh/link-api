# LinkAPI
🚀 Desenvolvida uma integração entre Pipedrive e Bling em Node.js implementando diversos conceitos do SOLID, arquitetura DDD e TDD.

# Tecnologias utilizadas

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

### Bibliotecas adicionadas ao projeto

- [express](https://expressjs.com/pt-br/): Framework para controle de rotas.
- [express-async-errors](https://www.npmjs.com/package/express-async-errors): Possibilidade de criar e capturar erros personalizados de forma assíncrona.
- [cors](https://www.npmjs.com/package/cors): Controle de entrada de requisições para o endereço.
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata): Habilitar utilização de decorators.
- [tsyringe](https://github.com/microsoft/tsyringe): Injeção de dependências.
- [typeORM](https://typeorm.io/#/): ORM para manipulação de banco de dados.
- [eslint](https://eslint.org/): Auxilia na padronização de código.
- [prettier](https://prettier.io/): Manter o código mais bonito e organizado.
- [cron](https://www.npmjs.com/package/node-cron): Permite fazer o agendamento de tarefas baseado em uma regra de tempo.

## Instruções para excutar o projeto

✔ Aplicação feita com base em regras de negócio flexíveis, para uma melhor implementação de todas as funcionalidades, arquiteturas, fundamentos que pude juntar no projeto em torno dois dias.

## Documentação da API

A documentação foi feita com o Swagger, basta acessar a seguinte rota na aplicação.

- [GET] - /api-docs

# Como executar o projeto

Pré-requisitos: npm / yarn

```bash

# Clonar repositório
git clone https://github.com/Nypeeh/link-api.git

# Entrar na pasta do projeto
cd link-api

# Instalar dependências
yarn / npm install

# Executar o servidor
yarn dev:server / npm run dev:server

# Executar o CRON
yarn dev:cron / npm run dev:cron
```

# Autor

* Leonardo Armejo (Linkedin: https://www.linkedin.com/in/leonardo-armejo-7ab971203/)
