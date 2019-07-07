
DOCKER_CONTAINER_IDS=$(docker ps -a -q --filter 'name=^/training')

if [ -z "$DOCKER_CONTAINER_IDS" -o "$DOCKER_CONTAINER_IDS" == " " ]; then
    echo "---- No containers available for deletion ----"
  else
     docker stop  $DOCKER_CONTAINER_IDS
     docker rm  $DOCKER_CONTAINER_IDS
fi

DOCKER_IMAGE_IDS=$(docker images |grep 'training')

if [ -z "$DOCKER_IMAGE_IDS" -o "$DOCKER_IMAGE_IDS" == " " ]; then
    echo "---- No images available for deletion ----"
  else
     docker rmi  $DOCKER_IMAGE_IDS
fi

#docker stop $(docker ps -a -q --filter 'name=^/training')

#docker rm  $(docker ps -a -q --filter 'name=^/training')

#docker rmi $(docker images |grep 'training')

echo 'finished cleaning'