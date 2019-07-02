FROM openjdk:8-jre-alpine
COPY target/user*.jar user.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "user.jar"]
VOLUME /tmp
VOLUME /logs

EXPOSE 9031
