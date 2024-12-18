const redis = require('redis');

const client = redis.createClient({
  host: process.env.REDIS_HOST || 'redis', 
  port: process.env.REDIS_PORT || 6379,    
});

client.on('connect', () => {
  console.log('Connected to Redis successfully');
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

client.connect(); 
 

module.exports = client;
