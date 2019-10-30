FROM openjdk:8-jre-alpine
COPY target/training*.jar training.jar
CMD ["/usr/bin/java", "-jar","-Duser.timezone=Asia/Qatar", "-Dspring.profiles.active=default", "training.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /etc/localtime

EXPOSE 9051
