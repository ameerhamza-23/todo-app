import type { Metadata } from "next";;
import Navbar from "../components/Navbar"
import "./globals.css";

export const metadata: Metadata = {
  title: "To do",
  description: "A simple to do app that lets you note down tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <header style={{ height: '10vh' }}>
          <Navbar />
        </header>

        <main style={{height:'90vh'}} className="pt-4 md:pt-0">
          {children}
        </main>

      </body>
    </html>
  );
}
