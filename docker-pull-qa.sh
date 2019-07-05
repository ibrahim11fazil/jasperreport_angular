#!/bin/bash
set -a
source env_qa.txt
set +a

# this will create network issues when communicating in server
#docker network create --driver=bridge --subnet=172.16.7.0/16 --gateway=172.16.202.202 networktraining

TAG=$1
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 80:80      172.16.0.253:5000/ui:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 9061:9061   172.16.0.253:5000/workflow:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 9041:9041   172.16.0.253:5000/notification:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 9031:9031   172.16.0.253:5000/user:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 9011:9011   172.16.0.253:5000/employee:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 9071:9071   172.16.0.253:5000/cis:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 9051:9051   172.16.0.253:5000/training:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 8888:8888   172.16.0.253:5000/config:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -v  $UPLOAD_PATH:/uploads -p 9021:9021   172.16.0.253:5000/fileupload:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 9001:9001  172.16.0.253:5000/authentication:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 8761:8761  172.16.0.253:5000/registry:$TAG
docker run -d --env-file=./env_qa.txt -v $LOG_PATH:/logs -v  $TMP_PATH:/tmp -p 9000:9000  172.16.0.253:5000/gateway:$TAG