# specify the node base image with your desired version node:<version>
#------------------------------> from node 6 image
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

# running port on 4200
#EXPOSE 4200

#CMD ["npm","start"]

# ------------------------------------------>  from mhart/alpine-node:6.11 image

FROM mhart/alpine-node:6.11

ENV NODE_PATH /app/node_modules

ADD package.json /app/package.json

RUN cd /app && npm install
#RUN npm cache clean
ADD . /app/src

WORKDIR /app/src
EXPOSE  4200

CMD ["npm", "start"]
