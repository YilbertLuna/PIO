FROM node:20.7.0-alpine

RUN apk --no-cache add curl

WORKDIR /app

COPY . .

RUN npm ci

USER node

EXPOSE 6060

CMD [ "node", "index.js" ]