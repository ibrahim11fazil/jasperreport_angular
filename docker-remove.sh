#!/bin/bash
echo "Stoping and removing"
docker-compose  stop
docker-compose down
echo "Stoping and removing done"