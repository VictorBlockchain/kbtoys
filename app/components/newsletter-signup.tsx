"use client"

import { useState } from "react"
import Modal from "./modal"

export default function NewsletterSignup() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <section className="my-8 bg-blue-100 border-2 border-blue-400 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Sign up for KB Toys Updates!</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 border-2 border-blue-300 rounded"
          required
        />
        <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
          Subscribe
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

