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
  description: "Free, open-source hub for collaborative projects.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Vanta Hub",
    description: "Free, open-source hub for collaborative projects.",
    url: "https://vantahub.org",
    siteName: "Vanta Hub",
    images: [
      {
        url: "/logo.svg",
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
    images: ["/logo.svg"],
  },
};
