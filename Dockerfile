# FROM node:alpine as build
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# RUN npm run build

# FROM httpd
# EXPOSE 80
# COPY --from=build /app/dist /usr/local/apache2/htdocs/

FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]

