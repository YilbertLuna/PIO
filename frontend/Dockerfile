FROM node:20.7.0-alpine

WORKDIR /app

COPY . .

RUN chown -R node:node /app

RUN npm ci

USER node

EXPOSE 3000

CMD [ "npm", "run", "start" ]