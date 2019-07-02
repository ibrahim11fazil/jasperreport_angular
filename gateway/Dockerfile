FROM openjdk:8-jre-alpine
COPY target/gateway*.jar gateway.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "gateway.jar"]
#VOLUME /tmp
#VOLUME /logs

EXPOSE 9000
