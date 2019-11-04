FROM openjdk:8-jre-alpine
COPY target/config*.jar config.jar
CMD ["/usr/bin/java", "-jar", "-Duser.timezone=Asia/Qatar", "-Dspring.profiles.active=default", "config.jar"]
#VOLUME /tmp
#VOLUME /logs
VOLUME /etc/localtime
EXPOSE 8888
