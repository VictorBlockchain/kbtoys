import Image from "next/image"

export default function Hero() {
  return (
    <section className="my-8 bg-yellow-100 border-2 border-blue-800 rounded-lg p-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to KB Toys!</h1>
          <p className="text-lg mb-4">Relive the magic of KB Toys with our new KBTOYS token!</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
            Get KBTOYS Now!
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/toy2.jpg?height=300&width=800"
            alt="KB Toys Store"
            width={800}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

