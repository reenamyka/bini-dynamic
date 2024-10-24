#  Official Node.js Base Image (https://hub.docker.com/_/node/)
FROM public.ecr.aws/docker/library/node:18-alpine

# Create App Directory
RUN mkdir web
WORKDIR /web
COPY . /web

# Install Dependencies
RUN rm -rf node_modules
RUN npm cache verify
RUN npm install

# Run Build
RUN npm run build

# Open Port(s)
EXPOSE 3000

# Docker Run Entry
CMD APP_DIR=web PORT=3000 npm start
