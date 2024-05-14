import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/home/header";
import Footer from "@/app/ui/home/footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
