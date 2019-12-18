FROM node:10.15.1-alpine

# Create nectar directory
WORKDIR /usr/src/dev-playground

# Install root dependencies
COPY package*.json ./
COPY .npmrc ./
RUN npm install --loglevel error

# Bundle app source
COPY . .

# Build app
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]