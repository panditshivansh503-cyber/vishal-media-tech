import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Vishal Media Tech | Data-Driven Digital Marketing",
  description: "Vishal Media Tech helps businesses generate leads, increase sales and build a powerful online presence.",
  keywords: ["digital marketing agency","Meta Ads","Google Ads","SEO","website development","lead generation"],
  robots: { index:true, follow:true }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><Providers>{children}</Providers></body></html>;
}
