FROM node:16 AS build

ARG PRODUCTION
ARG API_URL

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm ci

COPY setEnv.ts angular.json tsconfig*.json ./
COPY ./src ./src

RUN npm run build-prod

FROM nginx:latest

RUN mkdir /app

COPY --from=build /src/dist/mail-client /app
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
