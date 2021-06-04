FROM node:14-alpine As clientBuilder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY src .

RUN npm run build:restapi

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY src .

COPY --from=clientBuilder /usr/src/app/dist/apps/test-client ./dist

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

CMD ["sh", "-c", "/wait && node dist/main"]

