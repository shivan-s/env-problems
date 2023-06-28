FROM node:16-alpine

WORKDIR /src

COPY ./index.js ./package*.json /src/

RUN npm install

ENTRYPOINT ["node", "index.js"]
