const express = require('express');
const { Connection, PublicKey, clusterApiUrl } = require('@solana/web3.js');

const app = express();
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

app.post('/transaction', async (req, res) => {
  // Handle Solana transaction logic here
  // Example: connect to a wallet, process the transaction
  try {
    const walletPublicKey = new PublicKey(req.body.walletAddress);
    const balance = await connection.getBalance(walletPublicKey);
    res.json({ success: true, balance });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
npm run build
npm run deploy
