import type { Metadata } from "next";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Covenant LX Wedding Photography",
  description: "CSRA Wedding Photographer",
  keywords: ["wedding photography", "Augusta, GA wedding photographer", "csra wedding photographer"],
  openGraph: {
    title: "Covenant LX Wedding Photography",
    description: "Browse and explore high-quality photography.",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script async src="https://cdn.jsdelivr.net/npm/flowbite@3.0.0/dist/flowbite.min.js"></script>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            { children }
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
