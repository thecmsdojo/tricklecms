FROM node:16

RUN mkdir -p /app

# copy all the files and sub directories to /app foler in the container
COPY app /app/
RUN npm install -g nodemon
RUN cd /app && npm install
