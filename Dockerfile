FROM node:16

RUN mkdir -p /app

# copy all the files and sub directories to /app foler in the container
COPY app /app/
RUN cd /app && npm install
# CMD cd /app && npm start
