
docker stop $(docker ps -a -q --filter 'name=^/training')

docker rm $(docker ps -a -q --filter 'name=^/training')

docker rmi $(docker images |grep 'training')

echo 'finished cleaning'