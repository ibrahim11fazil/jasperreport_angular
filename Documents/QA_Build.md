
## QA Build

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
         