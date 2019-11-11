
## QA Build

# Change the version in UI constants to the same version of backend if required
    
       eg: qa_0.5.9  -- its a qa version
 
      git checkout master
      git merge origin current
       
# 1. Check the current version 

./gittag.sh 

Current version is  0.5.8
Enter the version
Enter the git branch to push to server , use current and master
Current version is  0.5.8

# 2. Update the current version to new version and 

   eg: set the new version 
    
    ./gittag.sh 0.5.9


The above command will clean ,build ,docker package and push to server

#3 go to the server pull and update the application

    ./docker_pull_only.sh   qa_0.5.9   
         
         
#4 Check all services are running in docker 

 docker service ls
 
 ID                  NAME                MODE                REPLICAS            IMAGE                                       PORTS
 
 8dub8kw77zs1        authentication      replicated          1/1                 172.16.0.253:5000/authentication:qa_0.5.8   *:9001->9001/tcp
 
 g6t6dmjl0xyl        cis                 replicated          1/1                 172.16.0.253:5000/cis:qa_0.5.8              *:9071->9071/tcp
 
 ohcdh4c3y6dw        config              replicated          1/1                 172.16.0.253:5000/config:qa_0.5.8           *:8888->8888/tcp
 
 d1zd6bp2kk40        employee            replicated          1/1                 172.16.0.253:5000/employee:qa_0.5.8         *:9011->9011/tcp
 
 rva76l0edmk2        fileupload          replicated          1/1                 172.16.0.253:5000/fileupload:qa_0.5.8       *:9021->9021/tcp
 
 yt9jiuyxp1d6        gateway             replicated          1/1                 172.16.0.253:5000/gateway:qa_0.5.7          *:9000->9000/tcp
 
 epj531s74snc        gateway-cloud       replicated          1/1                 172.16.0.253:5000/gateway:qa_0.5.8          *:7777->7777/tcp
 
 ka35ozzqbaja        notification        replicated          0/1                 172.16.0.253:5000/notification:qa_0.5.8     *:9041->9041/tcp
 
 xw7ry7llyu31        registry            replicated          1/1                 172.16.0.253:5000/registry:qa_0.5.8         *:8761->8761/tcp
 
 ubvyg3y4k9ia        training            replicated          1/1                 172.16.0.253:5000/training:qa_0.5.8         *:9051->9051/tcp
 
 vgt3fnoo9zrx        ui                  replicated          1/1                 172.16.0.253:5000/ui:qa_0.5.8               *:80->80/tcp
 
 javfint0d176        user                replicated          1/1                 172.16.0.253:5000/user:qa_0.5.8             *:9031->9031/tcp
 
 wv8sulec94wk        workflow            replicated          0/1                 172.16.0.253:5000/workflow:qa_0.5.8         *:9061->9061/tcp  
 
 
 #4 Check all applications  are running in eureka registry
 
 
 http://172.16.0.254:8761/
 
         