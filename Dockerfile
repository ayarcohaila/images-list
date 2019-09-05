# base image
FROM node:12

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN yarn install --silent
RUN yarn add react-scripts@3.1.1 global --silent

# start app
CMD ["yarn", "start"]