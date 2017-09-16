# specify the node base image with your desired version node:<version>
FROM node:6

# create a app directory
RUN mkdir -p /usr/src/app

# changing wornikg directory
WORKDIR /usr/src/app

# copy package.json into directory
copy package.json /usr/src/app

# cleaning cache of npm
RUN npm cache clean

# running npm install 
RUN npm install

# copying code to app directory
COPY . /usr/src/app

# running port on 4200
EXPOSE 4200

CMD ["npm","start"]
