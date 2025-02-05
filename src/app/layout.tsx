import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import Link from "next/link"
import type React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe | Creative Developer Portfolio",
  description: "Innovative full-stack developer specializing in Next.js and React",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black text-white flex flex-col min-h-screen`}>
        <header className="border-b border-pink-500">
          <nav className="container mx-auto px-6 py-4">
            <ul className="flex justify-center space-x-6">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Skills", path: "/skills" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-pink-300 hover:text-purple-400 transition-colors duration-300 text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-12 flex-grow">{children}</main>
        <footer className="border-t border-pink-500 py-6 mt-auto">
          <div className="container mx-auto px-6 text-center text-sm text-pink-300">
            © 2025 Neelum. Crafted with passion and pixels.
          </div>
        </footer>
      </body>
    </html>
  )
}

