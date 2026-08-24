import { Building2, ChartNoAxesCombined, Cpu, Landmark } from "lucide-react";

export const holding = {
  name: "NEXORA HOLDING",
  faName: "نکسورا هلدینگ",
  tagline: "ساختن آینده، از امروز",
  englishTagline: "Building Tomorrow, Today",
  description: "نکسورا هلدینگ با تمرکز بر سرمایه‌گذاری، توسعه کسب‌وکار و ایجاد ارزش پایدار، مسیر رشد مجموعه‌های خود را هموار می‌کند.",
};

export const stats = [
  { value: 12, suffix: "+", label: "شرکت زیرمجموعه" },
  { value: 8, suffix: "+", label: "سال تجربه" },
  { value: 24, suffix: "", label: "پروژه فعال" },
  { value: 5, suffix: "", label: "حوزه فعالیت" },
];

export const businessAreas = [
  { id: "01", title: "سرمایه‌گذاری", text: "شناسایی و توسعه فرصت‌های سرمایه‌گذاری با رویکرد بلندمدت.", icon: ChartNoAxesCombined },
  { id: "02", title: "توسعه کسب‌وکار", text: "توسعه مدل‌های کسب‌وکار و ایجاد مسیرهای جدید رشد.", icon: Landmark },
  { id: "03", title: "فناوری", text: "به‌کارگیری فناوری برای افزایش بهره‌وری و ایجاد مزیت رقابتی.", icon: Cpu },
  { id: "04", title: "توسعه پروژه", text: "مدیریت و توسعه پروژه‌های استراتژیک در حوزه‌های مختلف.", icon: Building2 },
];

export const subsidiaries = [
  { name: "NEXORA CAPITAL", category: "سرمایه‌گذاری", code: "NC" },
  { name: "NEXORA TECH", category: "فناوری", code: "NT" },
  { name: "NEXORA DEVELOPMENT", category: "توسعه پروژه", code: "ND" },
  { name: "NEXORA INDUSTRIES", category: "صنعت", code: "NI" },
];

export const documents = [
  { id: "intro", name: "معرفی هلدینگ", type: "PDF", size: "۲.۴ مگابایت", date: "مرداد ۱۴۰۵" },
  { id: "profile", name: "پروفایل شرکت", type: "PDF", size: "۴.۱ مگابایت", date: "تیر ۱۴۰۵" },
  { id: "services", name: "کاتالوگ خدمات", type: "PDF", size: "۳.۸ مگابایت", date: "خرداد ۱۴۰۵" },
  { id: "activity", name: "گزارش فعالیت", type: "PDF", size: "۱.۹ مگابایت", date: "اردیبهشت ۱۴۰۵" },
  { id: "annual", name: "گزارش سالانه", type: "PDF", size: "۵.۲ مگابایت", date: "اسفند ۱۴۰۴" },
];

export const contact = {
  address: "تهران، خیابان ولیعصر، بالاتر از پارک ساعی، ساختمان نکسورا",
  phone: "۰۲۱-۸۸۸۸۸۸۸۸",
  email: "info@nexoraholding.example",
};
