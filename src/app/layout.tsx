import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Afacad, Montserrat, Pixelify_Sans } from "next/font/google";
import NavHeader from "@/components/core/nav-header";
import Footer from "@/components/core/footer";

// import { Navbar } from "@/components/core/Navbar";

const afacad = Afacad({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-afacad",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixelify-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UiTM Blockchain Association",
  description: "UBA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${afacad.variable} ${montserrat.variable} ${pixelifySans.variable}`}>
      <body className="font-sans antialiased text-white" style={{ background: 'radial-gradient(circle, #4759FF 0%, #000000 100%)' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
       
          
          {/* Content Layer */}
          <div className="relative z-10">
            <div className="fixed top-0 sm:top-4 left-0 right-0 z-50">
              <NavHeader />
            </div>
            {/* <Navbar /> */}
            <div className="animate-fade-in opacity-0">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
