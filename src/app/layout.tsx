import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Afacad, Montserrat } from "next/font/google";
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
          {/* <Navbar /> */}
          <div className="animate-fade-in opacity-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
