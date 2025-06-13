import localFont from 'next/font/local';
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

 const Jeko = localFont({
  src: [
    {
      path: '../public/fonts/Jeko/jekoDEMO-ExtraBold.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Jeko/jekoDEMO-ExtraLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Jeko/jekoDEMO-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ]
 })

export const metadata = {
  title: "Chris",
  description: "Mon portfolio personnel pour vous présenter mes compétences en développement web.",
};

export default function RootLayout({children }) {
  return (
    <html lang='en '>
      <body className={`${Jeko.className}`}>
          {children}
      </body>
    </html>
  );
}
