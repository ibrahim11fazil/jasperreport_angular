#!/bin/bash
lsof -t -i:6000 | xargs  kill  
