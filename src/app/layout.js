import localFont from "next/font/local";
import "./globals.css";

const vazirmatn = localFont({
  src: [
    { path: "../../node_modules/@fontsource/vazirmatn/files/vazirmatn-arabic-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/vazirmatn/files/vazirmatn-arabic-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../node_modules/@fontsource/vazirmatn/files/vazirmatn-arabic-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../node_modules/@fontsource/vazirmatn/files/vazirmatn-arabic-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const metadata = {
  title: "NEXORA HOLDING | ساختن آینده، از امروز",
  description: "وب‌سایت معرفی هلدینگ نکسورا با تمرکز بر سرمایه‌گذاری، توسعه کسب‌وکار، فناوری و ایجاد ارزش پایدار.",
  metadataBase: new URL("https://nexoraholding.example"),
  openGraph: {
    title: "NEXORA HOLDING | ساختن آینده، از امروز",
    description: "مفهوم نمایشی یک وب‌سایت حرفه‌ای برای هلدینگ نکسورا.",
    type: "website",
    locale: "fa_IR",
    images: [{ url: "/images/nexora-hero.png", width: 1664, height: 936, alt: "معماری مدرن نکسورا" }],
  },
  robots: { index: false, follow: false },
  other: { "concept-demo": "fictional portfolio project" },
};

export default function RootLayout({ children }) {
  return <html lang="fa" dir="rtl" className={vazirmatn.variable}><body>{children}</body></html>;
}
