FROM openjdk:8-jre-alpine
COPY target/authentication*.jar authentication.jar
CMD ["/usr/bin/java", "-jar", "-Duser.timezone=Asia/Qatar",  "-Djava.security.egd=file:/dev/./urandom", "-Dspring.profiles.active=default", "authentication.jar"]
VOLUME /tmp
VOLUME /logs
VOLUME /etc/localtime
EXPOSE 9001



#COPY entrypoint.sh /usr/local/bin/

#ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
