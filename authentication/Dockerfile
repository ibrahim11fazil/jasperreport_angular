# Alpine Linux with OpenJDK JRE
FROM openjdk:8-jre-alpine
# copy JAR into image
COPY target/authentication*.jar /training/authentication.jar
# run application with this command line
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "/training/authentication.jar"]
VOLUME /tmp
VOLUME /logs

EXPOSE 9001
