import { ThemeProvider } from "@/components/ThemeProvider";
import "@/themes/global.css";
import { Footer } from "./_components/Footer";
// import { AnimatedPageWrapper } from "./_components/AnimatedPageWrapper";
import { SiteHeader } from "./_components/SiteHeader";
import { SkipLink } from "./_components/SkipLink";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <SkipLink />
      <SiteHeader />
      {children}
      {/* <AnimatedPageWrapper>{children}</AnimatedPageWrapper> */}
      <Footer />
    </ThemeProvider>
  );
}
