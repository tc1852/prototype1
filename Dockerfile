FROM node:10

# Create app directory
WORKDIR /var/www/prototype1

# Install app dependencies
# If you are building your code for production
# RUN npm ci --only=production
COPY package*.json ./
RUN npm install

#Bundle app source
COPY . .

#Copy .env.docker to workdir/.env (use docker env)
COPY .env.docker ./.env

#expose ports (4300 for api, 4301 for front end)
EXPOSE 4300 4301

# RUN npm run build
# CMD [ "node", "server"]

