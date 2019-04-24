FROM openjdk:8u171-alpine3.7
RUN apk --no-cache add curl
VOLUME /tmp
VOLUME /log
COPY target/authentication*.jar authentication.jar
CMD java ${JAVA_OPTS} -jar authentication.jar
EXPOSE 9001
