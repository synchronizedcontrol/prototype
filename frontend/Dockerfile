FROM node

RUN mkdir -p /app/frontend
WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
