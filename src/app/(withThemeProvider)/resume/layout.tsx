import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blair Wilcox - Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
