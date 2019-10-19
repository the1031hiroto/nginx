FROM node
ADD  src/ /usr/src
WORKDIR /usr/src
RUN npm install
EXPOSE 8080
ENTRYPOINT ["npm","start"]