
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.  
**This application have part of a card generate system. The other parts can be found on my [GitHub](https://github.com/devguilhermesv)**   
This applicação was developed with Nestjs to receive, validate and send data for consuming with RabbitMQ.
Data can be managed via Web End-points:  
- Create
  - [Post] /api/createCard
- Read  
  - [Get] /api/getCard/{id}
- Delete  
  - [Delete] /api/deleteCard/{id}

## Installation

```bash
$ npm install
```
## Running MongoDb and RabbitMQ

```bash
# Using docker-compose
$ docker compose up

```

this command will up the rabbitMQ and MongoDb containers and expose them to local connections

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

If have any problem, open a issue on repository with the description or send a merge request with your sugest to update.  

NestJS [read more here](https://docs.nestjs.com/support).


## License

Nest is [MIT licensed](LICENSE).
