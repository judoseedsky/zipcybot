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
  // Handle Event below

  // log event
  console.log(event); 

  // log item sold
  console.log(event.payload.item);

  // Take metadata from item sold (destructer info from it)
  const { name, image } = event.payload.item.metadata; 

  // Take prices from payment info response
  const { eth_price, usd_price } = event.payload.payment_token;

  // Make ETH price string truncate to 2 decimal places
  const eth = eth_price.slice(0, (eth_price.indexOf("."))+3); 

  // Make ETH price string truncate to 2 decimal places
  const usd = usd_price.slice(0, (usd_price.indexOf("."))+3);

  // Creat image link from name
  const imageNum = name.slice(6);
  console.log("imageNum" + imageNum)

  // string together info
  const tweetStr = `${name} bought for ${eth}Ξ ($${usd}) https://opensea.io/assets/0xd532b88607b1877fe20c181cba2550e3bbd6b31c/${imageNum}`; 

  // Tweet out our string
  tweet(tweetStr); 
});