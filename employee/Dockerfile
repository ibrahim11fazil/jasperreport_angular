FROM openjdk:8-jre-alpine
COPY target/employee*.jar employee.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "employee.jar"]
VOLUME /tmp
VOLUME /logs

EXPOSE 9011
