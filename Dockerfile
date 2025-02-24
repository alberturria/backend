FROM node:alpine
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
COPY . .
RUN yarn install
CMD [ "yarn", "dev" ]