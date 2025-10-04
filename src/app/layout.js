import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const dancing = Dancing_Script({ 
  subsets: ['latin'], weight: ['400'], variable: '--font-hand' 
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Loja VanHalen",
  description: "Landing Page da Loja VanHalen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
