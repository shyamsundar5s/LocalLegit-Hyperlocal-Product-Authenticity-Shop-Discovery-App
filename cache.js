const redis = require('redis');

const client = redis.createClient({ url: process.env.REDIS_URL });

client.on('error', (err) => console.error('Redis error:', err));

const getCachedShops = async (key, fetchFunction) => {
  return new Promise((resolve, reject) => {
    client.get(key, async (err, data) => {
      if (err) return reject(err);
      if (data) return resolve(JSON.parse(data));

      const freshData = await fetchFunction();
      client.setex(key, 3600, JSON.stringify(freshData));
      resolve(freshData);
    });
  });
};

module.exports = { client, getCachedShops };
