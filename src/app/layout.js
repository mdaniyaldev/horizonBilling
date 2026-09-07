import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Billing Horizon | AI Enabled Medical Billing Operations",
  description: "AI Enabled Medical Billing Operations — The Revenue Cycle, Managed From the Inside Out.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans text-charcoal-primary bg-neutral-white selection:bg-brand-light selection:text-neutral-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
