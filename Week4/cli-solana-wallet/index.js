const {
  Connection,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  PublicKey,
  Keypair,
} = require("@solana/web3.js")
require("dotenv").config()

// const publicKey = process.env.PUBLIC_KEY

const connection = new Connection(clusterApiUrl("devnet"))

const generateWallet = async () => {
  const keypair = Keypair.generate()
  const privateKey = keypair.secretKey.toString()
  const publicKey = keypair.publicKey.toString()
  console.log("Wallet generated:")
  console.log("Public Key:", publicKey)
  // console.log("Private Key:", privateKey)
  return keypair
}

const checkBalance = async (publicKey) => {
  try {
    const balance = await connection.getBalance(new PublicKey(publicKey))
    console.log(`Balance for ${publicKey}:`, balance / LAMPORTS_PER_SOL, "SOL")
    return balance / LAMPORTS_PER_SOL // Return balance in SOL
  } catch (error) {
    console.log("Error checking balance:", error)
  }
}

const airdropSelf = async (pubKey, amount) => {
  try {
    const airdropSignature = await connection.requestAirdrop(
      new PublicKey(pubKey),
      amount,
    )
    await connection.confirmTransaction({ signature: airdropSignature })
    return airdropSignature
  } catch (error) {
    console.log("Error:", error)
  }
}

async function main() {
  try {
    const wallet = await generateWallet()

    await checkBalance(wallet.publicKey)

    console.log("Getting airdrop.....")
    const signature = await airdropSelf(wallet.publicKey, LAMPORTS_PER_SOL)
    console.log("Airdrop signature:", signature)
  } catch (error) {
    console.log("Error during airdrop:", error)
  }
}

main()
