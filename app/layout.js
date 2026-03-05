import { Cormorant_Garamond, Libre_Baskerville } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const baskerville = Libre_Baskerville({
  variable: '--font-baskerville',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: 'Fab — fabfabfabfabfab.com',
  description:
    'Fabrice-Édouard La Roche-Francoeur — filmmaker, comedian, and performer from Quebec, based in London.',
  openGraph: {
    title: 'Fab — fabfabfabfabfab.com',
    description:
      'Filmmaker. Comedian. Performer. From Quebec, based in London.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${baskerville.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
