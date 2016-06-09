# registration
User Registration - proof of concept with React, Redux

## Prerequisites
1. Install Git
2. Install NodeJS & NPM

## Getting started
1. Clone project to local directory (this directory will be referred to as `$project.root`)
2. Go into `$project.root`
3. Run `npm install`
4. Run `npm start` to start the server

## Testing with Nightwatch
1. Install Nightwatch `npm install -g nightwatch`
2. Install Selenium `npm install selenium-standalone@latest -g`
3. Install Selenium Server `selenium-standalone install`
4. Edit `nightwatch.json` and update paths to `server_path` and `webdriver.chrome.driver` (replace `%username%` with your user name)
  1. `server_path` = `C:/Users/%username%/AppData/Roaming/npm/node_modules/selenium-standalone/.selenium/selenium-server/2.53.0-server.jar`
  2. `webdriver.chrome.driver` = `C:/Users/%username%/AppData/Roaming/npm/node_modules/selenium-standalone/.selenium/chromedriver/2.21-x64-chromedriver`
5. Run `nightwatch`
