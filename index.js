import T from './confiig.js';
import client from './opensea.js';

console.log("Bot started");

// Tweet
const tweet = async (aTweet) => {
  const { data: createdTweet } = await T.v2.tweet(aTweet);
  console.log('Tweet', createdTweet.id, ':', createdTweet.text);
}

console.log('listening for sales...');

// OpenSea listener
client.onItemSold("supernormalbyzipcy", (event) => {
  // Handle event
  console.log(event); // log event
  console.log(event.payload.item); // log item sold
  const { name, metadata_url } = event.payload.item.metadata; // take metadata from item sold (destructer info from it)
  const { eth_price, usd_price } = event.payload.payment_token; // take price from payment info response
  const tweetStr = `${name} bought for ${eth_price}Ξ ($${usd_price}) #NFTs ${metadata_url}`; // string together info
  tweet(tweetStr); // tweet out our string
});