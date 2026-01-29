import "../styles/globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "عم الفل | كتالوج رقمي فاخر",
  description: "منصة عم الفل لعرض أفخم أنواع الفل في اليمن.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-white text-emerald-950 antialiased`}> 
        {children}
      </body>
    </html>
  );
}