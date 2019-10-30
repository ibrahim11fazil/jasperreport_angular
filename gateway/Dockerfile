FROM openjdk:8-jre-alpine
COPY target/gateway*.jar gateway.jar
CMD ["/usr/bin/java", "-jar","-Duser.timezone=Asia/Qatar", "-Dspring.profiles.active=default", "gateway.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /etc/localtime
EXPOSE 9000
