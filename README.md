# LinkAPI
🚀 Desenvolvida uma integração entre Pipedrive e Bling em Node.js implementando diversos conceitos do SOLID, arquitetura DDD e TDD.

# Tecnologias utilizadas

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

### Bibliotecas adicionadas ao projeto

- [Express](https://expressjs.com/pt-br/): Framework para controle de rotas.
- [Express-async-errors](https://www.npmjs.com/package/express-async-errors): Possibilidade de criar e capturar erros personalizados de forma assíncrona.
- [Cors](https://www.npmjs.com/package/cors): Controle de entrada de requisições para o endereço.
- [Reflect-metadata](https://www.npmjs.com/package/reflect-metadata): Habilitar utilização de decorators.
- [Tsyringe](https://github.com/microsoft/tsyringe): Injeção de dependências.
- [TypeORM](https://typeorm.io/#/): ORM para manipulação de banco de dados.
- [Eslint](https://eslint.org/): Auxilia na padronização de código.
- [Prettier](https://prettier.io/): Manter o código mais bonito e organizado.
- [Cron](https://www.npmjs.com/package/node-cron): Permite fazer o agendamento de tarefas baseado em uma regra de tempo.
- [Bull](https://github.com/OptimalBits/bull): Execução de filas para trabalhos em segundo plano afins de melhorar a performance na visão do usuário e proteger uma lista de execução em caso do encerramento do servidor.

#

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

# Executar o Bull (Background Jobs)
yarn dev:queue / npm run dev:queue
```

# Autor

* Leonardo Armejo (Linkedin: https://www.linkedin.com/in/leonardo-armejo-7ab971203/)
