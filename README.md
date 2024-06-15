# NestJs-RabbitMQ

Este projeto é um exemplo de como usar o NestJS com RabbitMQ para comunicação assíncrona entre microserviços. Com ele você pode simular o cadstro de um Usuario generico no banco de dados e diaprar uma mensagem via RabbitMQ ao concluir o cadastro. 
Ele aborda conceitos importantes como injeção de dependência e utiliza o MongoDB como banco de dados. A linguagem de programação utilizada é TypeScript.

## Descrição

O objetivo deste projeto é demonstrar como configurar e integrar RabbitMQ com NestJS para facilitar a comunicação entre diferentes serviços em um ambiente de microserviços. RabbitMQ é um intermediário de mensagens amplamente utilizado, que permite a comunicação assíncrona entre serviços.

## Conceitos Abordados

### NestJS

NestJS é um framework para construir aplicações Node.js eficientes e escaláveis, usando JavaScript e totalmente suportado por TypeScript. Ele é inspirado em bibliotecas e frameworks como Angular, permitindo um desenvolvimento modular e orientado a dependências.

### RabbitMQ

RabbitMQ é um intermediário de mensagens open-source que implementa o Advanced Message Queuing Protocol (AMQP). Ele é utilizado para enviar e receber mensagens entre sistemas de forma assíncrona, permitindo que diferentes partes de uma aplicação se comuniquem sem estarem diretamente conectadas.

### Injeção de Dependência

A injeção de dependência é um padrão de design usado para implementar a Inversão de Controle (IoC), permitindo que as dependências de uma classe sejam fornecidas externamente em vez de serem criadas dentro da própria classe. No NestJS, a injeção de dependência é nativa e facilita a gestão de dependências entre módulos e serviços.

### Banco de Dados

O projeto utiliza o MongoDB como banco de dados. MongoDB é um banco de dados NoSQL orientado a documentos, que oferece flexibilidade e escalabilidade, sendo uma escolha popular para aplicações modernas.

## Tecnologias Utilizadas

- **NestJS**: Framework para Node.js.
- **RabbitMQ**: Intermediário de mensagens.
- **TypeScript**: Linguagem de programação usada no projeto.
- **MongoDB**: Banco de dados NoSQL.

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/DevGuilhermeSv/NestJs-RabbitMQ.git
   cd NestJs-RabbitMQ```
2. Instale as dependências:
   ```bash
   npm install

3. Configure as variáveis de ambiente no arquivo .env.

4. Inicie o RabbitMQ e o MongoDB.

5. Execute a aplicação:
   ```bash
   npm run start

## Uso

Depois de seguir os passos de instalação, a aplicação estará rodando localmente. Você pode usar um cliente HTTP como Postman ou Insomnia para interagir com os endpoints fornecidos pela aplicação.
## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.



