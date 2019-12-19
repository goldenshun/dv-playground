FROM node:10.15.1-alpine

# Create directory
WORKDIR /usr/src/dev-playground

# Initialize env variables
ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN
ARG CONTENTFUL_PREVIEW_ACCESS_TOKEN

RUN echo "CONTENTFUL_SPACE_ID $CONTENTFUL_SPACE_ID"

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