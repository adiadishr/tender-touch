import { Geist, Give_You_Glory, Pacifico } from 'next/font/google';

export const sans = Geist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-sans',
});

export const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const giveYouGlory = Give_You_Glory({
  variable: "--font-give-you-glory",
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
