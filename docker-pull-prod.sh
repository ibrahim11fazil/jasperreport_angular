#!/bin/bash
set -a
source env_prod.txt
set +a

#docker network create --driver=bridge --subnet=172.16.7.0/16 --gateway=172.16.202.202 networktraining


# --constraint 'node.labels.nodename == master'
# --constraint 'node.labels.nodename == node-one'
# --constraint 'node.labels.nodename == node-two'

#  --constraint 'node.hostname == child-node-one'

TAG=$1

# docker network create --driver overlay mybridge


TAG=$1
docker pull   172.16.0.253:5000/registry:$TAG
docker pull    172.16.0.253:5000/ui:$TAG
docker pull   172.16.0.253:5000/workflow:$TAG
docker pull   172.16.0.253:5000/notification:$TAG
docker pull   172.16.0.253:5000/user:$TAG
docker pull   172.16.0.253:5000/employee:$TAG
docker pull  172.16.0.253:5000/cis:$TAG
docker pull  172.16.0.253:5000/training:$TAG
docker pull    172.16.0.253:5000/config:$TAG
docker pull    172.16.0.253:5000/fileupload:$TAG
docker pull    172.16.0.253:5000/authentication:$TAG
docker pull    172.16.0.253:5000/gateway:$TAG
#docker pull    172.16.0.253:5000/gateway-cloud:$TAG


TAG=$1
VOLUME="--mount type=bind,source=$LOG_PATH,destination=/logs --mount type=bind,source=$TMP_PATH,destination=/tmp"
UPLOAD_VOLUME="--mount type=bind,source=$UPLOAD_PATH,destination=/uploads"
TIMEZONE_FILE="--mount type=bind,source=$LOCALTIME_PATH,destination=/etc/localtime"
docker service create  -d --network mybridge    --replicas 1    --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE   -p 8761:8761 --name registry  172.16.0.253:5000/registry:$TAG
docker service create  -d --network mybridge    --replicas 1    --env-file=./env_prod.txt   $VOLUME $TIMEZONE_FILE  -p 80:80  --name ui     172.16.0.253:5000/ui:$TAG
docker service create  -d --network mybridge  --replicas 1  --constraint 'node.hostname == child-node-one'   --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 9061:9061 --name workflow  172.16.0.253:5000/workflow:$TAG
docker service create  -d --network mybridge  --replicas 1  --constraint 'node.hostname == child-node-one'  --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 9041:9041  --name notification  172.16.0.253:5000/notification:$TAG
docker service create  -d --network mybridge  --replicas 1   --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 9031:9031 --name user  172.16.0.253:5000/user:$TAG
docker service create  -d --network mybridge   --replicas 1  --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 9011:9011 --name employee  172.16.0.253:5000/employee:$TAG
docker service create  -d --network mybridge  --replicas 1  --constraint 'node.hostname == child-node-one'   --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 9071:9071  --name cis 172.16.0.253:5000/cis:$TAG
docker service create  -d --network mybridge   --replicas 1    --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 9051:9051  --name training 172.16.0.253:5000/training:$TAG
docker service create  -d --network mybridge  --replicas 1   --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 8888:8888 --name config   172.16.0.253:5000/config:$TAG
docker service create  -d --network mybridge   --replicas 1  --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  $UPLOAD_VOLUME --name fileupload  -p 9021:9021   172.16.0.253:5000/fileupload:$TAG
#docker service create  -d  --network mybridge  --replicas 1  --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 7777:7777 --name gateway-cloud   172.16.0.253:5000/gateway-cloud:$TAG
docker service create  -d  --network mybridge --replicas 1     --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 9001:9001 --name authentication   172.16.0.253:5000/authentication:$TAG
docker service create  -d  --network mybridge  --replicas 1    --env-file=./env_prod.txt $VOLUME $TIMEZONE_FILE  -p 9000:9000 --name gateway   172.16.0.253:5000/gateway:$TAG
