import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../themes/global.css";
import { Footer } from "./_components/Footer";
// import { AnimatedPageWrapper } from "./_components/AnimatedPageWrapper";
import "../themes/global.css";
import { SiteHeader } from "./_components/SiteHeader";

export const metadata: Metadata = {
  title: "Blair Wilcox | Blair Makes Cool Things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SiteHeader />
          {children}
          {/* <AnimatedPageWrapper>{children}</AnimatedPageWrapper> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
