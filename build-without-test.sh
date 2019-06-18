mvn clean install -f utils -DskipTests
[ $? -eq 0 ] || exit 1

mvn clean install -f config -DskipTests
[ $? -eq 0 ] || exit 1

mvn clean install -f registry -DskipTests
[ $? -eq 0 ] || exit 1

mvn clean install -f gateway -DskipTests
[ $? -eq 0 ] || exit 1

mvn clean install -f authentication -DskipTests
[ $? -eq 0 ] || exit 1

mvn clean install -f training -DskipTests
[ $? -eq 0 ] || exit 1

mvn clean install -f employee -DskipTests
[ $? -eq 0 ] || exit 1

mvn clean install -f notification -DskipTests
[ $? -eq 0 ] || exit 1

mvn clean install -f fileupload  -DskipTests
[ $? -eq 0 ] || exit 1

mvn clean install -f workflow-camuda -DskipTests
[ $? -eq 0 ] || exit 1

npm install -g @angular/cli
[ $? -eq 0 ] || exit 1

npm install --prefix ./ui
[ $? -eq 0 ] || exit 1

pushd ui
ng build
[ $? -eq 0 ] || exit 1
popd
