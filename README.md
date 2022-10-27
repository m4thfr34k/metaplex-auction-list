# Example repo for Auction House List error

## Steps to reproduce  

Build repo  
Click List NFT button  
View error in console  

## Error received is

Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'toArrayLike')  
at AuctionHousePdasClient.tradeState (AuctionHousePdasClient.ts:131:1)  
at createListingBuilder (createListing.ts:332:1)  
at AuctionHouseBuildersClient.list (AuctionHouseBuildersClient.ts:100:1)  
at listItem (App.js:17:1)  

