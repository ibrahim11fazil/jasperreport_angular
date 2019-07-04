#!/bin/bash
set -a
source env_qa.txt
set +a

docker network create --driver=bridge --subnet=172.16.7.0/16 --gateway=172.16.202.202 networktraining

TAG=$1
docker run -d --env-file=./env_qa.txt  -p 9071:9071 --ip=$TRAINING_UI_IP  --network=networktraining  172.16.0.253:5000/ui:$TAG
docker run -d --env-file=./env_qa.txt  -p 9061:9061 --ip=WORKFLOW_IP --network=networktraining  172.16.0.253:5000/workflow:$TAG
docker run -d --env-file=./env_qa.txt  -p 9041:9041 --ip=NOTIFICATION_IP --network=networktraining  172.16.0.253:5000/notification:$TAG
docker run -d --env-file=./env_qa.txt  -p 9031:9031 --ip=USER_IP --network=networktraining  172.16.0.253:5000/user:$TAG
docker run -d --env-file=./env_qa.txt  -p 9011:9011 --ip=EMPLOYEE_IP --network=networktraining  172.16.0.253:5000/employee:$TAG
docker run -d --env-file=./env_qa.txt  -p 9071:9071 --ip=CIS_INTEGRATION_IP --network=networktraining  172.16.0.253:5000/cis:$TAG
docker run -d --env-file=./env_qa.txt  -p 9051:9051 --ip=TRAINING_IP --network=networktraining  172.16.0.253:5000/training:$TAG
docker run -d --env-file=./env_qa.txt  -p 8888:8888 --ip=CONFIG_IP --network=networktraining  172.16.0.253:5000/config:$TAG
docker run -d --env-file=./env_qa.txt  -p 9021:9021 --ip=FILE_UPLOAD_IP --network=networktraining  172.16.0.253:5000/fileupload:$TAG
docker run -d --env-file=./env_qa.txt  -p 9001:9001 --ip=OAUTH_IP --network=networktraining  172.16.0.253:5000/authentication:$TAG
docker run -d --env-file=./env_qa.txt  -p 8761:8761 --ip=REGISTRY_IP --network=networktraining  172.16.0.253:5000/registry:$TAG
docker run -d --env-file=./env_qa.txt  -p 9000:9000 --ip=GATEWAY_IP --network=networktraining  172.16.0.253:5000/gateway:$TAG