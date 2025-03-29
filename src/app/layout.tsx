import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Afacad, Montserrat } from "next/font/google";
import NavHeader from "@/components/core/nav-header";
import LiquidChrome from "@/components/ui/background-theme";
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
    <html lang="en" suppressHydrationWarning className={`${afacad.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background Layer */}
          <div className="fixed inset-0 z-0">
            <LiquidChrome
              baseColor={[0.001, 0, 0.03]}
              speed={0.5}
              amplitude={0.1}
              interactive={true}
            />
          </div>
          
          {/* Content Layer */}
          <div className="relative z-10">
            <div className="fixed top-0 sm:top-4 left-0 right-0 z-50">
              <NavHeader />
            </div>
            {/* <Navbar /> */}
            <div className="animate-fade-in opacity-0">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
