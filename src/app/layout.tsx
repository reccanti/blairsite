import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
