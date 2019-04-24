mvn clean install -f utils
[ $? -eq 0 ] || exit 1

mvn clean install -f config
[ $? -eq 0 ] || exit 1

mvn clean install -f registry
[ $? -eq 0 ] || exit 1

mvn clean install -f gateway
[ $? -eq 0 ] || exit 1

mvn clean install -f authentication
[ $? -eq 0 ] || exit 1

mvn clean install -f training
[ $? -eq 0 ] || exit 1

mvn clean install -f employee
[ $? -eq 0 ] || exit 1

mvn clean install -f maward
[ $? -eq 0 ] || exit 1

mvn clean install -f notification
[ $? -eq 0 ] || exit 1

mvn clean install -f fileupload
[ $? -eq 0 ] || exit 1

mvn clean install -f workflow-camuda
[ $? -eq 0 ] || exit 1

npm install -g @angular/cli
[ $? -eq 0 ] || exit 1

npm install --prefix ./ui
[ $? -eq 0 ] || exit 1

npm run prod-build --prefix  ./ui
[ $? -eq 0 ] || exit 1