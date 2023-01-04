import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/Tasks">
              Tasks
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}