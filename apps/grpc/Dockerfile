FROM node:14-alpine As grpcBuilder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build:grpc

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=grpcBuilder /usr/src/app/dist/apps/grpc ./dist

CMD ["node", "dist/main"]
