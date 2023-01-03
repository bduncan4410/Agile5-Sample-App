import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <nav>
              <Link href="/">
                Home
              </Link>
              <Link href="/about">
                About
              </Link>
          </nav>
          {children}
        </main>
        
        </body>
    </html>
  )
}
