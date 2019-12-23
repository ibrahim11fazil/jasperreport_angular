#!/bin/bash

set -a
TAG=dev_$(git describe --abbrev=0)
if [ "$1" = "prod" ]
    then
        source env_prod.txt
        TAG=$(git describe --abbrev=0)
elif [ "$1" = "qa" ]
    then
        source env_qa.txt
        TAG=qa_$(git describe --abbrev=0)
else
        source env_dev.txt
fi
set +a
echo $TAG
echo $FILE

if [ "$1" = "prod" ]
then
    echo "Staring production version building file"
        TAG=prod_$(git describe --abbrev=0)

         docker build --file ui/Dockerfile  ui -t 172.16.0.253:5000/ui:$TAG
         docker build --file workflow-camuda/Dockerfile  workflow-camuda -t 172.16.0.253:5000/workflow:$TAG
         docker build --file notification/Dockerfile notification -t 172.16.0.253:5000/notification:$TAG
         docker build --file user/Dockerfile user -t 172.16.0.253:5000/user:$TAG
         docker build --file employee/Dockerfile employee -t 172.16.0.253:5000/employee:$TAG
         docker build --file cis/Dockerfile cis -t 172.16.0.253:5000/cis:$TAG
         docker build --file training/Dockerfile training -t 172.16.0.253:5000/training:$TAG
         docker build --file config/Dockerfile config -t 172.16.0.253:5000/config:$TAG
         docker build --file fileupload/Dockerfile fileupload -t 172.16.0.253:5000/fileupload:$TAG
         docker build --file authentication/Dockerfile authentication -t 172.16.0.253:5000/authentication:$TAG
         docker build --file registry/Dockerfile registry -t 172.16.0.253:5000/registry:$TAG
         docker build --file gateway/Dockerfile gateway -t 172.16.0.253:5000/gateway:$TAG
         #docker build --file gateway-cloud/Dockerfile gateway-cloud -t 172.16.0.253:5000/gateway-cloud:$TAG
         echo "PROD build done"
         echo "Prod version Hot Beans Done "
elif [ "$1" = "qa" ]
then
     #./build.sh
     TAG=qa_$(git describe --abbrev=0)

      docker build --file ui/Dockerfile  ui -t 172.16.0.253:5000/ui:$TAG
      docker build --file workflow-camuda/Dockerfile  workflow-camuda -t 172.16.0.253:5000/workflow:$TAG
      docker build --file notification/Dockerfile notification -t 172.16.0.253:5000/notification:$TAG
      docker build --file user/Dockerfile user -t 172.16.0.253:5000/user:$TAG
      docker build --file employee/Dockerfile employee -t 172.16.0.253:5000/employee:$TAG
      docker build --file cis/Dockerfile cis -t 172.16.0.253:5000/cis:$TAG
      docker build --file training/Dockerfile training -t 172.16.0.253:5000/training:$TAG
      docker build --file config/Dockerfile config -t 172.16.0.253:5000/config:$TAG
      docker build --file fileupload/Dockerfile fileupload -t 172.16.0.253:5000/fileupload:$TAG
      docker build --file authentication/Dockerfile authentication -t 172.16.0.253:5000/authentication:$TAG
      docker build --file registry/Dockerfile registry -t 172.16.0.253:5000/registry:$TAG
      docker build --file gateway/Dockerfile gateway -t 172.16.0.253:5000/gateway:$TAG
      #docker build --file gateway-cloud/Dockerfile gateway-cloud -t 172.16.0.253:5000/gateway-cloud:$TAG
      echo "QA build done"

      echo "Pushing to server "
      #./docker-push.sh qa
      echo "Pushing to server not done"

else
    echo "Staring developer version building file"
    #./build.sh

    echo "Pass -->  qa or prod"
fi