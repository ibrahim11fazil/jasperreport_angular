FROM openjdk:8-jre-alpine
COPY target/workflow*.jar workflow.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "workflow.jar"]
VOLUME /tmp
VOLUME /logs

EXPOSE 9061
