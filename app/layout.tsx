import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@ui";
import { config } from "@constants";

const dmSans = DM_Sans({ subsets: ["latin"] });
const DEFAULT_THEME = "dark";

export const metadata: Metadata = {
  title: "Zeaeye",
  description: "Maritim Tracking og Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const htmlStyle = { fontSize: `${config.scale}px` };
  return (
    <html style={htmlStyle} lang="da">
      <body aria-details={DEFAULT_THEME} className={dmSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
