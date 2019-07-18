mvn clean install -f gateway-cloud
[ $? -eq 0 ] || exit 1

#mvn clean install -f training
[ $? -eq 0 ] || exit 1

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
    ./build.sh


    echo "Prod version Hot Beans Done "
elif [ "$1" = "qa" ]
then
     #./build.sh
      TAG=gbuild_$(git describe --abbrev=0)_$2
      docker build --file gateway-cloud/Dockerfile gateway-cloud -t 172.16.0.253:5000/gateway-cloud:$TAG
      docker build --file training/Dockerfile training -t 172.16.0.253:5000/training:$TAG
      echo "QA build done"

      echo "Pushing to server "
      docker push 172.16.0.253:5000/gateway-cloud:$TAG
      docker push 172.16.0.253:5000/training:$TAG
      echo "Pushing to server done"

else
    echo "Staring developer version building file"
    #./build.sh
fi
