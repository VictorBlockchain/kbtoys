import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 KB Toys Token. All rights reserved.</p>
            <p>Inspired by KB Toys (not affiliated)</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-sm text-center mt-4">
          <p>
            Disclaimer: KBTOYS token is a meme token with no intrinsic value. It is not an investment product and should
            be treated as a collectible for entertainment purposes only. Always do your own research before
            participating in any token sale.
          </p>
        </div>
      </div>
    </footer>
  )
}

