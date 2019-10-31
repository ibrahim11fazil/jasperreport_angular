FROM openjdk:8-jre-alpine
COPY target/employee*.jar employee.jar
CMD ["/usr/bin/java", "-jar","-Duser.timezone=Asia/Qatar", "-Dspring.profiles.active=default", "employee.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /etc/localtime
EXPOSE 9011
