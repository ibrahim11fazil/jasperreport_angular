FROM openjdk:8-jre-alpine
COPY target/notification*.jar notification.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "notification.jar"]
VOLUME /tmp
VOLUME /logs

EXPOSE 9041
