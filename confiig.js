import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
    appKey: 'F95hGeEWzEzOfpFhT7cO03O1E',
    appSecret: 'VAq2jriMbPBRGbOFkmGEI4ZRmQrpgBY5pFpVEy0c3mKD14wMPl',
    accessToken: '1523644773063696387-DCv5jo8FK7Jp6JUQeghs8NyAQCYIqz',
    accessSecret: 'aKlLtlaf90OP7g1Dth2CkiWYxiq9BOR5vOCJRlgRbjqlW',
});

const T = client.readWrite;

export default T;