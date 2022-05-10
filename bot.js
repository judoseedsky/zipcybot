import T from './confiig.js';
import client from './opensea.js'

console.log("Bot started");

// Tweet
const tweet = async (aTweet) => {
    const { data: createdTweet } = await T.v2.tweet(aTweet);
      console.log('Tweet', createdTweet.id, ':', createdTweet.text);
}

console.log('listening for sales...');

// OpenSea listener
client.onItemSold("supernormalbyzipcy", (event) => {
  // handle event
  console.log(event)
  console.log(event.payload.item.metadata)
  const { name, metadata_url } = event.payloaditem.metadata;
  const { eth_price, usd_price } = event.payload.payment_token;
  const tweetStr = `${name} bought for ${eth_price}Ξ ($${usd_price}) #NFTs ${metadata_url}`;
  tweet(tweetStr);
});

// OpenSea listener
// client.onEvents('supernormalbyzipcy', [EventType.ITEM_RECEIVED_OFFER, EventType.ITEM_TRANSFERRED], (event) => {
//   // handle event
//   console.log(event)
//   const { eth_price, usd_price } = event.payload.payment_token;
//   const { name, metadata_url } = event.payload;
//   const tweetStr = `${name} bought for ${eth_price}Ξ ($${usd_price}) #NFTs ${metadata_url}`;
//   tweet(tweetStr)
// });