"use client"

import { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Modal from "../components/modal"

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Contact Us</h1>
        <div className="bg-yellow-100 border-2 border-blue-400 rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Other Ways to Reach Us</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Email: support@kbtoys-token.com</li>
            <li>Twitter: @KBToysToken</li>
            <li>Telegram: t.me/KBToysTokenCommunity</li>
            <li>Discord: discord.gg/KBToysToken</li>
          </ul>
        </div>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

