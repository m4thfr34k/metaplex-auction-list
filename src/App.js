import "./App.css";
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

function App() {
  const auctionHouse = "Hvy8TQ6iuKmLQgWaEHBQksMMYAEH8aaPmD1pD2VMNToZ";

  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  const metaplex = new Metaplex(connection);

  async function listItem() {
    const kinAuctionHouse = await metaplex.auctionHouse().findByAddress({
      address: new PublicKey(auctionHouse),
    });
    console.log("Kin AuctionHouse:", kinAuctionHouse.creatorAddress.toString());
    console.log("Kin auction house is:", kinAuctionHouse.address.toString());
    const listTransaction = metaplex
      .auctionHouse()
      .builders()
      .list({
        auctionHouse: kinAuctionHouse, // Need to update so right AuctionHouse is used depending on currency being used
        mintAccount: new PublicKey(
          "6e6XzDLpyxRF1zBxnx686bY8cwyVpmmZRgNJCte1VWrE"
        ),
        price: 15000000, // Need to update so user selects currency and amount
        tokens: 1,
        printReceipt: true,
      });
  }

  return (
    <div className="App">
      <p>Hello Metaplex</p>
      <button onClick={listItem}>List NFT</button>
    </div>
  );
}

export default App;
