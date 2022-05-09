const { TwitterApi } = require('twitter-api-v2');

const T = new TwitterApi({
    appKey: 'QRHcwOZuh9y3nWpHGFrphs2sn',
    appSecret: 'wHyOLXz35UNN8Dw8TqTTW647Vh9o5GK0LESmtfOIh9MAt4si1l',
    accessToken: '1523644773063696387-3QUj22JWZPXDLoJIlN3BombFnx5P8T',
    accessSecret: 'wsHQWFDjR01F6I0IdzOQHnNc5zisc9WfXivYVjSjOHmlo',
});

module.exports = T;