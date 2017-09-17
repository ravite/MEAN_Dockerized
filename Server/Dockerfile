# specify the node base image with your desired version node:<version>
#FROM node:6
# create a app directory
#RUN mkdir -p /usr/src/app

# changing wornikg directory
#WORKDIR /usr/src/app

# copy package.json into directory
#copy package.json /usr/src/app

# cleaning cache of npm
#RUN npm cache clean

# running npm install 
#RUN npm install

# copying code to app directory
#COPY . /usr/src/app

#using another image(ficusio/node-alpine:5)
#FROM ficusio/node-alpine:5-onbuild 

# running port on 3000
#EXPOSE 3000

#CMD ["npm","start"]


FROM mhart/alpine-node:5.4

ENV NODE_PATH /app/node_modules

ADD package.json /app/package.json
RUN cd /app && npm install

ADD . /app/src

WORKDIR /app/src
EXPOSE  3000

CMD ["npm", "start"]
