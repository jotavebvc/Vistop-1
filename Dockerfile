FROM node:16-buster-slim

COPY . /opt/vistop
WORKDIR /opt/vistop

RUN npm ci --legacy-peer-deps
