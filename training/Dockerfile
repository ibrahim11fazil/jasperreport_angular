FROM openjdk:8-jre-alpine
COPY target/training*.jar training.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "training.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /etc/localtime

RUN echo "Asia/Qatar" > /etc/timezone


EXPOSE 9051
