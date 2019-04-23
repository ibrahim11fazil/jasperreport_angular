#!/bin/bash
lsof -i :6000 | awk 'FNR==2{if ($1=="java") print "6000 port is up"}'
lsof -i :6000 | awk 'END { if (NR==0) print "6000 port is down"}' 
