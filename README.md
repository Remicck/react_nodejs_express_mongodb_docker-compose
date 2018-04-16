# React.js Node.js MongoDB MongoExpress docker-compose

## Installation
### for Mac
- Docker for Mac
- node.js by nvm
``` bash
  nvm install v8.9.4
  nvm use v8.9.4
  nvm alias default v8.9.4
```
- yarn
```bash
  npm install -g yarn
```
- hosts
```bash
sudo vi /etc/hosts
# add line
# 127.0.0.1      api.localhost
```


## Usage
### Frontsite
```bash
cd frontsite
yarn install
yarn run start
```
Access to `http://localhost:8080/`.

### API Server
```bash
docker-compose build # first time only
docker-compose up
```
API Servier will waked up as `http://api.localhost`.  
If you wanna GET Response from API Server, code is...
```javascript
import request from 'superagent';
const url = 'http://api.localhost/';
request
  .get(url)
  .end((err, res) => {
    console.log(res.body);// Json Data
  });
```
More information is on the site of npm, "superagent".

If you wanna add API Endpoints, change `expressDir/app.js` like...
```javascript
var hogeRouter = require('./routes/index');
app.use('/hoge', hogeRouter);
```
and change `expressDir/routes/hoge.js` to
```javascript
router.get('/', function(req, res, next) {
  const params = {data: 'hogehoge data'};
  res.send(params);
}
```

If you access to `http://api.localhost/hoge`, return `{data: 'hogehoge data'}` as json.