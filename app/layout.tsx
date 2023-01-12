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
        <nav>
          <ButtonAppBar>
          </ButtonAppBar>
        </nav>
        <div className='main'>
          {children}
        </div>
      </body>
    </html>
  );
}