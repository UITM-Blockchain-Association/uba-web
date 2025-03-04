import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
// import { Navbar } from "@/components/core/Navbar";

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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
