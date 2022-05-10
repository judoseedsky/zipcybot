import T from './confiig.js';
import client from './opensea.js'

console.log("Bot started");


// Tweet
const tweet = async (_tweet) => {
    const { data: createdTweet } = await T.v2.tweet(_tweet);
      console.log('Tweet', createdTweet.id, ':', createdTweet.text);
}

// OpenSea listener
console.log('listening for sales...');

client.onItemSold("Zipcy's SuperNormal", (event) => {
  // handle event
  console.log(event)

  tweet(event)
});