FROM node:13

ENV CHOKIDAR_USEPOLLING=true

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./app

# install project dependencies
RUN yarn install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /app/

EXPOSE 3000

CMD [ "npm", "start" ]