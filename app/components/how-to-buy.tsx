export default function HowToBuy() {
  return (
    <section className="my-8 bg-blue-100 border-2 border-blue-400 rounded-lg p-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">How to Buy KBTOYS Token</h2>
      <ol className="list-decimal list-inside space-y-4">
        <li>Set up a Solana wallet (like Phantom or Solflare)</li>
        <li>Purchase SOL in Phantom wallet if you don't already have some</li>
        <li>Click the last tab on the bottom of your mobile device</li>
        <li>Type pump.fun in the url bar and connect your wallet</li>
        <li>Paste our contract address, to trade KBTOYS</li>
      </ol>
      <p className="mt-6 text-sm text-gray-600">
        Disclaimer: KBTOYS token is a meme token with no intrinsic value. It is not an investment product and should be
        treated as a collectible for entertainment purposes only. Always do your own research before participating in
        any token sale.
      </p>
    </section>
  )
}

