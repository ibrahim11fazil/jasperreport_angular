# Add the user 

    sudo useradd -m docusr
    sudo Passwd


# Adding user to  docker 

    sudo usermod -a -G docker $USER




# Label the nodes for production setup 

    sudo docker node update --label-add nodename=master master-node
 
    sudo docker node update --label-add nodename=node1 child-node-one
 
    sudo docker node update --label-add nodename=node2 child-node-two

# Viewing the details of the node 

    sudo docker node inspect --pretty master-node


# Use the below constraint in running the service (optional)

    --constraint 'node.labels.nodename == master'
    --constraint 'node.labels.nodename == node1’
    --constraint 'node.labels.nodename == node2’
    

# Production SWARM  create the network for docker swarm 

       docker network create --driver overlay mybridge

# Setup the registry location in all nodes

To add an insecure docker registry, add the file /etc/docker/daemon.json with the following content:

    {
    "insecure-registries" : [ "172.16.0.253:5000" ]
    }

    sudo service docker restart

# Services up and running 

## 1) Rabbit mq service setup 

    docker pull 172.16.0.253:5000/rabbitmq:3-management

    docker service create  -d  --network mybridge  --replicas 1   --hostname rabbitmq  -e RABBITMQ_DEFAULT_USER=guest -e RABBITMQ_DEFAULT_PASS=guest -p 15672:15672  -p 5672:5672 --name rabbitmq  172.16.0.253:5000/rabbitmq:3-management

    http://172.16.0.137:15672/#/
    
## 2) rabbitmq  add admin user and set password same as enviroment file from the above url

    http://172.16.0.137:15672/#/

## 3 copy and set permission for below files 


    -rw-rw-r-- 1 docusr docusr 3513 Dec 23 10:07 docker-pull-prod.sh
    -rw-rw-r-- 1 docusr docusr 1564 Dec 23 10:08 docker-update.sh
    -rw-rw-r-- 1 docusr docusr  644 Dec 23 10:07 docker_pull_only.sh
    -rw-r--r-- 1 docusr docusr 2428 Dec 23 10:05 env_prod.txt


    $ chmod +x docker-pull-prod.sh
    $ chmod +x docker-update.sh
    $ chmod +x docker_pull_only.sh
    $ chmod +x env_prod.txt    
    
    
## 4 create the services or update the services ( depends )

      ./docker-pull-prod.sh <version>
      

##   update the application only 
    
        ./docker_pull_only.sh   <version>  



## Docker logs  
 
 
 
 sudo journalctl -fu docker.service
 
 
## Application logs 

/swarm/volumes/data/logs 


## SWARM PIT 

   docker pull gcr.io/google-containers/cadvisor:latest
   
   docker  tag gcr.io/google-containers/cadvisor:latest  172.16.0.253:5000/cadvisor:latest
   
   docker push 172.16.0.253:5000/cadvisor:latest
   
   https://github.com/swarmpit/swarmpit#installation
   
   https://swarmpit.io/
   
   docker pull swarmpit/install:1.8
   
   docker  tag gswarmpit/install:1.8  172.16.0.253:5000/swarmpit:1.8
   
   docker push 172.16.0.253:5000/swarmpit:1.8
   
   docker pull  172.16.0.253:5000/swarmpit:1.8
   
   docker run -it --rm --name swarmpit-installer --volume /var/run/docker.sock:/var/run/docker.sock 172.16.0.253:5000/swarmpit:1.8


