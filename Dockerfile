FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV HOSTNAME="0.0.0.0"

EXPOSE 8080

CMD ["npm", "start"]
