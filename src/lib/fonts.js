import { Pacifico } from 'next/font/google';
import localFont from 'next/font/local'

export const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const rascals = localFont({
  src: '../../public/fonts/rascals.woff2',
  variable: '--font-rascals',
  display: 'swap',
})