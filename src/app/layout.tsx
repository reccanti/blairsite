import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blair Wilcox - Blair Makes Cool Things",
  metadataBase: new URL("https://blairwilcox.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="themeRoot">
      <body>{children}</body>
    </html>
  );
}
