FROM node:16-buster-slim

COPY . /vistop
WORKDIR /vistop

RUN npm ci --legacy-peer-deps --unsafe-perm
