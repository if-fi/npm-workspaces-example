#npm-workspaces-example

## run `npm install` in root folder
npm install

## compile all workspaces at once
npm run build -ws

## compile `common` workspace upon change
npm run build -w=@myproj/common

## run core `start` script
npm run start -w=core

