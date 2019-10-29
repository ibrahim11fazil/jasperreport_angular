FROM openjdk:8-jre-alpine
COPY target/cis*.jar cis.jar
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "cis.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /etc/localtime
EXPOSE 9071
