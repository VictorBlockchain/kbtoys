import Image from "next/image"

export default function Hero() {
  return (
    <section className="my-8 bg-yellow-100 border-2 border-blue-800 rounded-lg p-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
        <div className="px-4">
            <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center md:text-left">
              Welcome to KB Toys!
            </h1>
            <p className="text-lg mb-4 break-words">
              Relive the magic of KB Toys with our new KBTOYS token! <br />
              contract: <span className="break-all">6jNgUrT3GU5gKGfvepPCJ6oz2b1W6ELBjhpj4cSdpump</span>
            </p>
          </div>
          <a href="https://pump.fun/coin/6jNgUrT3GU5gKGfvepPCJ6oz2b1W6ELBjhpj4cSdpump" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
            Get KBTOYS Now!
          </a>
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

