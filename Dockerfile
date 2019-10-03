# base image
FROM node:alpine

# set working directory
WORKDIR /app

COPY package*.json ./

# install and cache app dependencies
RUN npm install
RUN npm install react-scripts@3.1.1 -g

COPY . .

EXPOSE 3000

CMD ["npm", "start"]