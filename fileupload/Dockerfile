FROM openjdk:8-jre-alpine
COPY target/fileupload*.jar fileupload.jar
CMD ["/usr/bin/java", "-jar","-Duser.timezone=Asia/Qatar", "-Djava.security.egd=file:/dev/./urandom" , "-Dspring.profiles.active=default", "fileupload.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /uploads
VOLUME /etc/localtime
EXPOSE 9021
