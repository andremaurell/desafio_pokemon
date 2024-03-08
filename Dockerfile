FROM node:18.17.0

WORKDIR /home/desafio_pokemon

COPY package*.json ./

RUN npm install
RUN npm install -g ts-node
RUN npm install -g typescript

COPY . .

EXPOSE 3000

CMD ["npm","run", "dev"]
