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
  const { name, image } = event.payload.item.metadata; // take metadata from item sold (destructer info from it)
  const { eth_price, usd_price } = event.payload.payment_token; // take price from payment info response
  eth_price = eth_price.slice(0, (eth_price.indexOf("."))+3); // make Eth price string truncate to 2 decimal places
  usd_price = usd_price.slice(0, (usd_price.indexOf("."))+3); // make Eth price string truncate to 2 decimal places
  const tweetStr = `${name} bought for ${eth_price}Ξ ($${usd_price}) #NFTs ${image}`; // string together info
  tweet(tweetStr); // tweet out our string
});