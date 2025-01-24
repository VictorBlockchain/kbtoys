import Image from "next/image"
import AddToCartButton from "./add-to-cart-button"

const products = [
  { name: "KBTOYS Plush Toy", price: "$19.99", image: "/toy1.jpeg?height=200&width=200" },
  { name: "Vintage KB Toys T-Shirt", price: "$24.99", image: "/shirt1.webp" },
  { name: "KBTOYS Piggy Bank", price: "$14.99", image: "/toy8.jpeg" },
  { name: "KB Toys Nostalgia Pack", price: "$39.99", image: "/toy5.webp?height=200&width=200" },
]

export default function FeaturedProducts() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border-2 border-blue-300 rounded-lg p-4 bg-white">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-blue-700">{product.name}</h3>
            <p className="text-lg text-red-600 font-bold">{product.price}</p>
            <AddToCartButton />
          </div>
        ))}
      </div>
    </section>
  )
}

