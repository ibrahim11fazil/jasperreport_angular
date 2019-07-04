#!/bin/bash
set -a
TAG=dev_$(git describe --abbrev=0)
if [ "$1" = "prod" ]
    then
        source env_prod.txt
        TAG=$(git describe --abbrev=0)
    else
        source env_dev.txt
fi
set +a
echo $TAG
echo $FILE

if [ "$1" = "prod" ]
then
    docker-compose  up
    echo "Prod version Hot Beans Done "
else
    echo "Staring developer version building file"
    #./build.sh
    docker-compose -f docker-compose.dev.yml up
    #docker-compose -f docker-compose.test.dev.yml up
    #push to registry
    echo "Dev version  Hot Beans Done"
fi

