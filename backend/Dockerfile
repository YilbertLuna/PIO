FROM node:20.7.0-alpine

WORKDIR /devs

COPY . .

RUN npm install

USER node

EXPOSE 6060

CMD [ "node", "index.js" ]