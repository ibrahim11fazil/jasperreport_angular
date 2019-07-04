#!/bin/bash

set -a
TAG=dev_$(git describe --abbrev=0)
if [ "$1" = "prod" ]
    then
        source env_prod.txt
        TAG=$(git describe --abbrev=0)
        echo "Stoping and removing"
        docker-compose  stop
        docker-compose down
        echo "Stoping and removing done"
elif [ "$1" = "qa" ]
    then
        source env_qa.txt
        TAG=qa_$(git describe --abbrev=0)
        echo "Stoping and removing"
        docker-compose  stop
        docker-compose down
        echo "Stoping and removing done"
else
        source env_dev.txt
        echo "Stoping and removing"
        docker-compose  stop
        docker-compose down
        echo "Stoping and removing done"
fi
set +a