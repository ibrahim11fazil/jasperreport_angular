FROM openjdk:8-jre-alpine
COPY target/notification*.jar notification.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "notification.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /etc/localtime
EXPOSE 9041
