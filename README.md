# Desafio Pokemon!

## Descrição

Esta aplicação tem como objetivo cumprir o desáfio do processo seletivo de estágio da empresa Triágil. Ve-se como objetivo principal ter uma API utilizavel a partir da API [pokeapi.co](https://pokeapi.co/), possibilitando com que o usuário crie times pokemon, verifique todos os times existentes no banco de dados e verifique todos os times de cada um dos treinadores pokemon.

## Rotas:

1. **GET /api/teams**
   - Deverá listar todos os times registrados

2. **GET /api/teams/{user}**
   - Busca um time registrado por usuário

3. **POST /api/teams**
   - Rota para criação de um time a partir de um .JSON

**OBS: na branch "pokedex" existem outras duas rotas adicionais implementadas, cada uma delas com um objetivo específico escrito no readme da mesma!!**
   - Troque de branch:
     ```bash
     git checkout pokedex
     ```
## Como usar:

1. **Instalação**
   - Clone o repositorio:
     ```bash
     git clone https://github.com/andremaurell/desafio_pokemon.git
     ```
   - Entre no diretório correto:
     ```bash
     cd desafio_pokemon
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
2. **Execute Docker:**
   - Necessita do Docker Desktop instalado!

   - Construa o container.
    ```bash
      docker-compose up --build -d
     ```
   - Execute o docker:
    ```bash
      docker-compose up
     ```
   - Para deletar os containers:
    ```bash
      docker-compose down
     ```
## Tecnologias utilizadas:

- **Backend:**
   - Docker
   - Docker-compose
   - Typescript
   - Node.js
   - Express
   - PostgreSQL
   - dotenv

## Estrutura do projeto
- `./index.ts`: Codigo do servidor
- `src/routes.ts`: Codigo das rotas
- `src/types.ts`: Onde defino o tipo da PokemonDetails (detalhes dos pokemons)!
- `src/utils.ts`: Codigo para verificar se exsite a tabela e criar uma no formato correto caso não exista!
