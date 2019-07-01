FROM openjdk:8-jre-alpine
COPY target/fileupload*.jar fileupload.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "fileupload.jar"]
#VOLUME /tmp
#VOLUME /logs

EXPOSE 9021
