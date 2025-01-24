import type { Metadata } from "next"
import Header from "./components/header"
import Hero from "./components/hero"
import FeaturedProducts from "./components/featured-products"
import HowToBuy from "./components/how-to-buy"
import NewsletterSignup from "./components/newsletter-signup"
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "KB Toys - Home of KBTOYS Token",
  description: "Relive the nostalgia with KB Toys and our KBTOYS token",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <FeaturedProducts />
        <HowToBuy />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}

