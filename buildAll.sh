#!/bin/bash
set -a
TAG=dev_$(git describe --abbrev=0)
if [ "$1" = "prod" ]
    then
        source env_prod.txt
        TAG=$(git describe --abbrev=0)
elif [ "$1" = "qa" ]
    then
        source env_prod.txt
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
    docker-compose  up
    echo "Prod version Hot Beans Done "
elif [ "$1" = "qa" ]
then
     docker-compose  up
     echo "Staring qa version building file"
     #docker-compose -f docker-compose.dev.yml up
else
    echo "Staring developer version building file"
    #./build.sh
    docker-compose  up
    #docker-compose -f docker-compose.dev.yml up
    #docker-compose -f docker-compose.test.dev.yml up
    echo "Dev version  Hot Beans Done"
fi

