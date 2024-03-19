import { ThemeProvider } from "@/components/ThemeProvider";
import "@/themes/global.css";
import { Footer } from "./_components/Footer";
// import { AnimatedPageWrapper } from "./_components/AnimatedPageWrapper";
import { SiteHeader } from "./_components/SiteHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <SiteHeader />
      {children}
      {/* <AnimatedPageWrapper>{children}</AnimatedPageWrapper> */}
      <Footer />
    </ThemeProvider>
  );
}
