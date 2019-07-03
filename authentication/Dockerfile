FROM openjdk:8-jre-alpine
COPY target/authentication*.jar authentication.jar
CMD ["/usr/bin/java", "-jar","-Djava.security.egd=file:/dev/./urandom", "-Dspring.profiles.active=default", "authentication.jar"]
VOLUME /tmp
VOLUME /logs

EXPOSE 9001
