import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const vazirFont = localFont({
  src: '../public/fonts/Vazirmatn-Regular.woff2',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200 ${vazirFont.className}`}>
        <main className='p-5'>
          {children}
        </main>
      </body>
    </html>
  );
}
