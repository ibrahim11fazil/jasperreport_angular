#!/bin/bash
 echo "Current version is "   $(git describe --abbrev=0)
if [ "$1" != "" ] && [ "$2" != "" ]
    then
     mvn versions:set -DnewVersion=$1
     git add -A
     git commit -m "build version $1"
     git push origin $2
     git tag -a $1 -m "version $1"
     git push --tags
     mvn versions:commit
     echo "Version updated to "   $(git describe --abbrev=0)
    else
     echo "Enter the version"
     echo "Enter the git branch to push to server , use current and master"
     echo "Current version is "   $(git describe --abbrev=0)
fi