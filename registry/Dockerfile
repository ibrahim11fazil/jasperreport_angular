FROM openjdk:8-jre-alpine
COPY target/registry*.jar registry.jar
CMD ["/usr/bin/java", "-jar", "-Djava.security.egd=file:/dev/./urandom" , "-Dspring.profiles.active=default", "registry.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /etc/localtime
EXPOSE 8761
