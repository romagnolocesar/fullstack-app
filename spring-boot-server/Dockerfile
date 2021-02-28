FROM openjdk:8-jdk-alpine

ADD target/spring-boot-jpa-postgresql-0.0.1-SNAPSHOT.jar springbootapp.jar

EXPOSE 8080

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /springbootapp.jar" ]