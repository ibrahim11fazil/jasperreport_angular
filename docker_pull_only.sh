#!/bin/bash
TAG=$1
docker pull    172.16.0.253:5000/authentication:$TAG
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
docker pull    172.16.0.253:5000/gateway-cloud:$TAG
docker pull    172.16.0.253:5000/gateway:$TAG

./docker-update.sh  $1