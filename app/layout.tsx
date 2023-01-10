import Link from 'next/link';
import './globals.css';
import ButtonAppBar from './navButtonBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
      <ButtonAppBar>
      </ButtonAppBar>
        <main>
          <nav>
          
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}