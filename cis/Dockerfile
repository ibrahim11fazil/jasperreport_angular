FROM openjdk:8-jre-alpine
COPY target/cis*.jar cis.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "cis.jar"]
VOLUME /tmp
VOLUME /logs

EXPOSE 9071
