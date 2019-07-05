#!/bin/bash
 echo "Current version is "   $(git describe --abbrev=0)
if [ "$1" != "" ]
    then
     mvn versions:set -DnewVersion=$1
     git tag -a $1 -m "version $1"
     git push --tags
     mvn versions:commit
     echo "Version updated to "   $(git describe --abbrev=0)
    else
     echo "Enter the version"
     echo "Current version is "   $(git describe --abbrev=0)
fi