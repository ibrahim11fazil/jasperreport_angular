#!/bin/bash
set -a
TAG=dev_$(git describe --abbrev=0)
if [ "$1" = "prod" ]
    then
        TAG=$(git describe --abbrev=0)
        docker push 172.16.0.253:5000/ui:$TAG
        docker push 172.16.0.253:5000/workflow:$TAG
        docker push 172.16.0.253:5000/notification:$TAG
        docker push 172.16.0.253:5000/user:$TAG
        docker push 172.16.0.253:5000/employee:$TAG
        docker push 172.16.0.253:5000/cis:$TAG
        docker push 172.16.0.253:5000/training:$TAG
        docker push 172.16.0.253:5000/config:$TAG
        docker push 172.16.0.253:5000/fileupload:$TAG
        docker push 172.16.0.253:5000/authentication:$TAG
        docker push 172.16.0.253:5000/registry:$TAG
        docker push 172.16.0.253:5000/gateway:$TAG
        echo "prod version pushed"
        echo $TAG
elif [ "$1" = "qa" ]
    then

        TAG=qa_$(git describe --abbrev=0)
        docker push 172.16.0.253:5000/ui:$TAG
        docker push 172.16.0.253:5000/workflow:$TAG
        docker push 172.16.0.253:5000/notification:$TAG
        docker push 172.16.0.253:5000/user:$TAG
        docker push 172.16.0.253:5000/employee:$TAG
        docker push 172.16.0.253:5000/cis:$TAG
        docker push 172.16.0.253:5000/training:$TAG
        docker push 172.16.0.253:5000/config:$TAG
        docker push 172.16.0.253:5000/fileupload:$TAG
        docker push 172.16.0.253:5000/authentication:$TAG
        docker push 172.16.0.253:5000/registry:$TAG
        docker push 172.16.0.253:5000/gateway:$TAG
        echo "QA version pushed"
        echo $TAG
else

    echo "Developer version no need to push use prod or qa"

fi
set +a