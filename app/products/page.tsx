import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image"
import AddToCartButton from "../components/add-to-cart-button"

const products = [
  {
    name: "KBTOYS Plush Toy",
    price: "$19.99",
    image: "/toy1.jpeg?height=200&width=200",
    description: "Cuddle with our adorable KBTOYS mascot!",
  },
  {
    name: "Vintage KB Toys T-Shirt",
    price: "$24.99",
    image: "/shirt2.png?height=200&width=200",
    description: "Show your love for KB Toys with this retro tee.",
  },
  {
    name: "KBTOYS Vintage Shirt",
    price: "$14.99",
    image: "/toy4.avif?height=200&width=200",
    description: "You can't go wrong with a classic KB Toys shirt.",
  },
  {
    name: "KB Toys Nostalgia Pack",
    price: "$39.99",
    image: "/toy9.webp?height=200&width=200",
    description: "wrestling figures, action figures, and more!",
  },
  {
    name: "KB Toys Nostalgia Pack 2",
    price: "$17.99",
    image: "/toy10.jpg?height=200&width=200",
    description: "Take a trip down memory lane with this pack of KB Toys goodies.",
  },
  {
    name: "KB Toys Race Car",
    price: "$29.99",
    image: "/toy11.jpg?height=200&width=200",
    description: "Radio control race cars where the shit back in the day",
  },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">KB Toys Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="border-2 border-blue-300 rounded-lg p-4 bg-white">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h2 className="text-xl font-bold text-blue-700">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg text-red-600 font-bold">{product.price}</p>
              <AddToCartButton />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

