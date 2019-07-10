FROM openjdk:8-jre-alpine
COPY target/gateway-cloud.jar gateway-cloud.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "gateway-cloud.jar"]
VOLUME /tmp
VOLUME /logs

EXPOSE 7777
