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
    #docker-compose -f docker-compose.dev.yml up
    echo "Prod version Hot Beans Done "
else
    echo "Staring developer version builing file"
    ./build.sh
    #docker-compose up
    echo "Dev version  Hot Beans Done"
fi

