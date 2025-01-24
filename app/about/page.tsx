import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">About KB Toys and KBTOYS Token</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="/store1.jpg?height=300&width=400"
              alt="KB Toys History"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mb-4"
            />
            <p className="mb-4">
              KB Toys was a beloved toy store chain that brought joy to millions of children from 1922 to 2009. Known
              for its wide selection of toys and exciting store atmosphere, KB Toys was a staple in malls across
              America.
            </p>
            <p>
              Today, we're bringing back the spirit of KB Toys with our KBTOYS token. This Solana-based meme token is
              designed to evoke nostalgia and create a fun community for those who remember the magic of KB Toys.
            </p>
          </div>
          <div className="md:w-1/2 bg-yellow-100 border-2 border-blue-400 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">KBTOYS Token</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Built on the Solana blockchain</li>
              <li>Community-driven project</li>
              <li>No intrinsic value - purely for fun and nostalgia</li>
              <li>Limited supply to maintain collectibility</li>
              <li>Future plans for NFTs and virtual toy collecting game</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

