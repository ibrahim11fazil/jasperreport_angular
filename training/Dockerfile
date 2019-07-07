FROM openjdk:8-jre-alpine
COPY target/training*.jar training.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "training.jar"]
VOLUME /tmp
VOLUME /logs

EXPOSE 9051
