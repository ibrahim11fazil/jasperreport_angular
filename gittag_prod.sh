#!/bin/bash
source ~/.bash_profile
nvm use v10.15.3
 echo "Current version is "   $(git describe --abbrev=0)
 branch=$(git branch | grep \* | cut -d ' ' -f2)
if [ "$1" != "" ]
    then
     mvn versions:set -DnewVersion=$1
     #git add -A
     #git commit -m "build version $1"
     #git push origin $branch
     git tag -a $1 -m "version $1"
     git push --tags
     mvn versions:commit
     git add -A
     git commit -m "build version $1"
     git push origin $branch
     echo "Version updated to "   $(git describe --abbrev=0)
     git status
     [ $? -eq 0 ] || exit 1
     ./buildJavaAndUI.sh prod
     ./dockerBuild.sh prod
     ./docker-push.sh prod
    else
     echo "Enter the version"
     echo "Enter the git branch to push to server , use current and master"
     echo "Current version is "   $(git describe --abbrev=0)
fi
