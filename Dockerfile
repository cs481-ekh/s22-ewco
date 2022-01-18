# FROM node:latest as build
# WORKDIR /app
# COPY ./package.json /app/package.json
# COPY ./package-lock.json /app/package-lock.json

# RUN yarn install
# COPY . .
# RUN yarn build

FROM nginx:latest
EXPOSE 80
COPY ./build /usr/share/nginx/html
# COPY --from=build /app/build /usr/share/nginx/html
