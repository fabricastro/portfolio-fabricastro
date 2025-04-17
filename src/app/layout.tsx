import type { Metadata } from "next"
import { Onest } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fabricio Castro - Frontend Developer",
  description: "Portfolio de Fabricio Castro, Frontend Developer",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={onest.variable}>
      <body className="antialiased ">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
