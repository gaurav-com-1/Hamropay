import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "900"] });

// This layout provides the root <html> and <body> tags for our standalone page.
export default function BuyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}