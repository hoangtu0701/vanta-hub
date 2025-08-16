import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Vanta Hub",
  description: "Free, open-source hub for banger projects.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Vanta Hub",
    description: "Free, open-source hub for collaborative projects.",
    url: "https://vantahub.org",
    siteName: "Vanta Hub",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Vanta Hub Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vanta Hub",
    description: "Free, open-source hub for collaborative projects.",
    images: ["/android-chrome-192x192.png"],
  },
};
