FROM openjdk:8-jre-alpine
COPY target/user*.jar user.jar
CMD ["/usr/bin/java", "-jar","-Duser.timezone=Asia/Qatar", "-Dspring.profiles.active=default", "user.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /etc/localtime
EXPOSE 9031
