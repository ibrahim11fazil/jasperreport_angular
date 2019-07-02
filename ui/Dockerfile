FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/ng build --prod
COPY dist/ .

#docker build -t training-ui:v1 .
#docker run -d -p 80:80 training-ui:v1