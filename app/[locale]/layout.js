

import localFont from 'next/font/local';
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { I18nProviderClient } from '../../locales/client'

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: "swap",
 });

 const Jeko = localFont({
  src: [
    {
      path: '../../public/font/Jeko/jekoDEMO-ExtraBold.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/font/Jeko/jekoDEMO-ExtraLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/Jeko/jekoDEMO-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ]
 })

export const metadata = {
  title: "Chris",
  description: "Mon portfolio personnel pour vous présenter mes compétences en développement web.",
};

export default function RootLayout({params, children }) {
  const { locale } = params;
  return (
    <html lang={locale}>
      <body className={`${Jeko.className}`}>
        <I18nProviderClient locale={locale}>
          {children}
        </I18nProviderClient>
      </body>
    </html>
  );
}
