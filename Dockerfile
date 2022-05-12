FROM node:16.10
ARG BACKEND_HOST
WORKDIR /app
COPY . .
RUN npm install
CMD npm start