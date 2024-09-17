FROM node:20-alpine
WORKDIR /app
# copy only package.json & package-lock.json to install the production dependencies
COPY package*.json .
RUN npm install --production
# copy all files in the project
COPY . .
# please modify the port if you wish another PORT
EXPOSE 5000
CMD [ "npm", "start" ]
