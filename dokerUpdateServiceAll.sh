#!/bin/bash

if [ "$1" != "" ]
then
TAG=$1
docker service update --image    172.16.0.253:5000/gateway-cloud:$TAG gateway-cloud
#docker service update --image    172.16.0.253:5000/gateway:$TAG gateway
docker service update --image    172.16.0.253:5000/registry:$TAG registry
docker service update --image     172.16.0.253:5000/ui:$TAG ui
docker service update --image    172.16.0.253:5000/workflow:$TAG workflow
docker service update --image    172.16.0.253:5000/notification:$TAG notification
docker service update --image    172.16.0.253:5000/user:$TAG user
docker service update --image    172.16.0.253:5000/employee:$TAG employee
docker service update --image   172.16.0.253:5000/cis:$TAG cis
docker service update --image   172.16.0.253:5000/training:$TAG training
docker service update --image     172.16.0.253:5000/config:$TAG config
docker service update --image     172.16.0.253:5000/fileupload:$TAG fileupload
docker service update --image     172.16.0.253:5000/authentication:$TAG authentication
echo "done"
fi