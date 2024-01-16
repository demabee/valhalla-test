FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/refactor-this ./src/refactor-this

EXPOSE 3001

CMD ["npm", "start"]
