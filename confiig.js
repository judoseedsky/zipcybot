const { TwitterApi } = require('twitter-api-v2');

const T = new TwitterApi({
    appKey: 'QRHcwOZuh9y3nWpHGFrphs2sn',
    appSecret: process.env.APP_SECRET,
    accessToken: '1523644773063696387-ABC2SI4wy72N3eEsrWpXk2r8SeO72S',
    accessSecret: process.env.ACCESS_SECRET,
});

module.exports = T;