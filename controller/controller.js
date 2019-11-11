// const redisClient = require('../lib/redis-client');

function home(req, res) {
  res.send('Hello World! - Prototype5'); 
}

function healthCheck(req, res) {
  res.sendStatus(200);
}

// async function setRedis(req, res) {
//   const { key, value } = req.query;
//   if (!key || !value) {
//     return res.send('key and value should be passed in!');
//   }
//   await redisClient.setAsync(key, JSON.stringify(value));
//   res.send('Success!');
// }

// async function getRedis(req, res) {
//   const { key } = req.query;
//   if (!key) {
//     res.send('key should be passed in!');
//   }
//   const data = await redisClient.getAsync(key);
//   res.send(JSON.parse(data));
// }

module.exports = {
  home,
  healthCheck,
  // setRedis,
  // getRedis
}