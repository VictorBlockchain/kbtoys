"use client"

import { useState } from "react"
import Modal from "./modal"

const funMessages = [
  "Out of stock because we've been out of business since 2009!",
  "Yeah bro, we've been out of business for years. We're just a meme coin now!",
  "Sorry, our time machine to 2008 is broken. Can't add to cart!",
  "404: Cart not found. But our nostalgia is always in stock!",
  "Plot twist: You can't buy toys from the past. But you can buy our token!",
  "Oops! Looks like our inventory is as empty as an abandoned mall.",
  "We're as out of stock as KB Toys is out of business. Coincidence? I think not!",
  "Error: Cannot add physical items to a virtual meme coin cart.",
  "Great choice! ...if this were 2005. Wanna buy some KBTOYS instead?",
  "Our toys are now collectors' items. Try eBay maybe?",
]

export default function AddToCartButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleClick = () => {
    const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)]
    setMessage(randomMessage)
    setIsModalOpen(true)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="mt-4 bg-yellow-400 text-blue-800 px-4 py-2 rounded hover:bg-yellow-500 transition-colors w-full"
      >
        Add to Cart
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="text-lg mb-4">{message}</p>
        <p className="text-sm text-gray-600">But hey, you can still get our KBTOYS token!</p>
      </Modal>
    </>
  )
}

