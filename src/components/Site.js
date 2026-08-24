"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownLeft, ArrowLeft, Building2, Check, Download, ExternalLink,
  FileText, Instagram, Linkedin, Mail, MapPin, Menu, Phone, Send,
  Sparkles, X,
} from "lucide-react";
import { businessAreas, contact, documents, holding, stats, subsidiaries } from "@/data/holding";

const nav = [
  ["درباره ما", "about"], ["حوزه‌های فعالیت", "areas"],
  ["شرکت‌های زیرمجموعه", "companies"], ["اسناد", "documents"], ["ارتباط با ما", "contact"],
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && node.classList.add("is-visible"), { threshold: .12 });
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` }}>{children}</div>;
}

function SectionHead({ index, eyebrow, title, text }) {
  return <div className="section-head"><span className="section-index">{index}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-intro">{text}</p>}</div></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`header ${scrolled ? "scrolled" : ""}`}>
    <a href="#top" className="brand" aria-label="نکسورا هلدینگ - صفحه اصلی"><span className="brand-mark">N</span><span><b>NEXORA</b><small>HOLDING</small></span></a>
    <nav className="desktop-nav" aria-label="ناوبری اصلی">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "بستن منو" : "باز کردن منو"}>{open ? <X /> : <Menu />}</button>
    <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="mobile-nav-label">فهرست دسترسی</div>
      {nav.map(([label, id], i) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>۰{i + 1}</span>{label}<ArrowDownLeft /></a>)}
      <p>Concept Website Demo</p>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <Image src="/images/nexora-hero.png" alt="ساختمان اداری مدرن در یک منطقه تجاری مفهومی" fill priority sizes="100vw" className="hero-image" />
    <div className="hero-shade" />
    <div className="hero-content">
      <p className="hero-kicker"><span /> آینده، حاصل تصمیم‌های امروز است</p>
      <h1 id="hero-title">ساختن آینده،<br /><em>از امروز</em></h1>
      <p className="hero-copy">{holding.description}</p>
      <div className="hero-actions"><a className="button primary" href="#about">آشنایی با هلدینگ <ArrowDownLeft /></a><a className="button ghost" href="#contact">ارتباط با ما</a></div>
    </div>
    <div className="hero-foot"><span>{holding.englishTagline}</span><a href="#stats" aria-label="رفتن به بخش آمار">پیمایش <ArrowDownLeft /></a></div>
  </section>;
}

function Stats() {
  return <section className="stats" id="stats" aria-label="آمار نمایشی هلدینگ"><div className="stats-label"><Sparkles /><span>در یک نگاه</span><small>داده‌های نمایشی</small></div>{stats.map((item) => <div className="stat" key={item.label}><strong>{item.value}{item.suffix}</strong><span>{item.label}</span></div>)}</section>;
}

function About() {
  return <section className="section about" id="about"><div className="container">
    <Reveal><SectionHead index="۰۱" eyebrow="هویت سازمانی" title="درباره نکسورا" /></Reveal>
    <div className="about-grid">
      <Reveal className="about-image-wrap"><div className="about-image"><Image src="/images/nexora-hero.png" alt="نمای نزدیک معماری دفتر مرکزی مفهومی نکسورا" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><span className="vertical-caption">NEXORA / EST. 2018</span></Reveal>
      <Reveal className="about-copy" delay={100}><p className="lead">ما کسب‌وکارها را برای ساختن ارزشی ماندگار، هم‌مسیر می‌کنیم.</p><p>نکسورا هلدینگ با رویکردی یکپارچه، در حوزه‌های سرمایه‌گذاری، توسعه کسب‌وکار و فناوری فعالیت می‌کند. تمرکز ما بر ایجاد ارزش پایدار، توسعه ظرفیت‌های جدید و همراهی با مجموعه‌های زیرمجموعه در مسیر رشد است.</p>
        <dl className="meta-list"><div><dt>رویکرد</dt><dd>توسعه پایدار</dd></div><div><dt>تمرکز</dt><dd>سرمایه‌گذاری و توسعه کسب‌وکار</dd></div><div><dt>چشم‌انداز</dt><dd>ایجاد ارزش بلندمدت</dd></div></dl>
      </Reveal>
    </div>
  </div></section>;
}

function Areas() {
  return <section className="section areas" id="areas"><div className="container"><Reveal><SectionHead index="۰۲" eyebrow="توانمندی‌های کلیدی" title="حوزه‌های فعالیت" text="ترکیبی هدفمند از سرمایه، تجربه و فناوری برای تبدیل فرصت‌ها به کسب‌وکارهای ماندگار." /></Reveal>
    <div className="area-grid">{businessAreas.map((area, i) => { const Icon = area.icon; return <Reveal key={area.id} delay={i * 70}><article className="area-card"><div className="card-top"><span>{area.id}</span><Icon /></div><div><h3>{area.title}</h3><p>{area.text}</p></div><ArrowDownLeft className="card-arrow" /></article></Reveal>; })}</div>
  </div></section>;
}

function Companies() {
  return <section className="section companies" id="companies"><div className="container"><Reveal><SectionHead index="۰۳" eyebrow="ساختار گروه" title="شرکت‌های زیرمجموعه" /></Reveal>
    <div className="company-list">{subsidiaries.map((company, i) => <Reveal key={company.name} delay={i * 60}><article className="company-row"><span className="company-no">۰{i + 1}</span><div className="company-monogram">{company.code}</div><h3 dir="ltr">{company.name}</h3><p>{company.category}</p><ArrowLeft /></article></Reveal>)}</div>
    <p className="demo-disclaimer">نام‌ها و ساختارهای این بخش صرفاً برای نمایش قابلیت طراحی شده‌اند.</p>
  </div></section>;
}

function Documents() {
  const [active, setActive] = useState(null);
  const download = (doc) => {
    const blob = new Blob([`NEXORA HOLDING\n${doc.name}\n\nConcept demo document - no real company information.`], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `nexora-${doc.id}-demo.txt`; a.click(); URL.revokeObjectURL(url);
  };
  useEffect(() => { const close = (e) => e.key === "Escape" && setActive(null); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <section className="section documents" id="documents"><div className="container"><Reveal><SectionHead index="۰۴" eyebrow="آرشیو سازمانی" title="مرکز اسناد" text="دسترسی سریع به اطلاعات و مستندات هلدینگ" /></Reveal>
    <div className="document-table" role="table" aria-label="اسناد نمونه"><div className="document-header" role="row"><span>عنوان سند</span><span>نوع و حجم</span><span>تاریخ انتشار</span><span>دسترسی</span></div>{documents.map((doc, i) => <Reveal key={doc.id} delay={i * 45}><div className="document-row" role="row"><div className="doc-name"><FileText /><span><b>{doc.name}</b><small>سند نمایشی نکسورا</small></span></div><span className="doc-meta">{doc.type} · {doc.size}</span><span className="doc-meta">{doc.date}</span><div className="doc-actions"><button onClick={() => setActive(doc)} title="مشاهده سند"><ExternalLink /><span>مشاهده</span></button><button onClick={() => download(doc)} title="دانلود نسخه نمونه"><Download /><span>دانلود</span></button></div></div></Reveal>)}</div>
    <div className="documents-note"><span><Check /></span><p><b>آماده توسعه</b> این بخش قابلیت اتصال به سامانه مدیریت اسناد و بارگذاری فایل را دارد.</p></div>
  </div>{active && <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(e) => e.target === e.currentTarget && setActive(null)}><div className="modal-panel"><button className="modal-close" onClick={() => setActive(null)} aria-label="بستن"><X /></button><FileText className="modal-icon" /><p className="eyebrow">پیش‌نمایش سند</p><h3 id="modal-title">{active.name}</h3><p>این یک پیش‌نمایش نمایشی است. در نسخه نهایی، فایل واقعی یا نمایشگر PDF در این بخش قرار می‌گیرد.</p><div className="modal-meta"><span>{active.type}</span><span>{active.size}</span><span>{active.date}</span></div><button className="button primary" onClick={() => download(active)}>دانلود نسخه نمونه <Download /></button></div></div>}</section>;
}

function Vision() {
  return <section className="vision"><Image src="/images/nexora-hero.png" alt="" fill sizes="100vw" /><div className="vision-overlay" /><Reveal className="vision-inner"><p className="eyebrow">نگاه نکسورا</p><blockquote>«رشد پایدار، زمانی شکل می‌گیرد که نگاه امروز، <em>آینده</em> را در نظر گرفته باشد.»</blockquote><span>NEXORA HOLDING / VISION 2030</span></Reveal></section>;
}

function Contact() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const submit = (e) => {
    e.preventDefault(); const data = new FormData(e.currentTarget); const next = {};
    if (!data.get("name")?.trim()) next.name = "نام خود را وارد کنید.";
    if (!/^0\d{9,10}$/.test(data.get("phone")?.replace(/[\s-]/g, ""))) next.phone = "شماره تماس معتبر وارد کنید.";
    if (!/^\S+@\S+\.\S+$/.test(data.get("email"))) next.email = "ایمیل معتبر وارد کنید.";
    if (!data.get("message")?.trim()) next.message = "متن پیام را وارد کنید.";
    setErrors(next); if (!Object.keys(next).length) { setStatus("success"); e.currentTarget.reset(); }
  };
  return <section className="section contact" id="contact"><div className="container"><Reveal><SectionHead index="۰۵" eyebrow="شروع یک گفتگو" title="ارتباط با ما" text="برای بررسی فرصت‌های همکاری و آشنایی بیشتر با مسیر نکسورا، با ما در ارتباط باشید." /></Reveal>
    <div className="contact-grid"><Reveal className="contact-info"><div className="contact-line"><MapPin /><div><span>نشانی دفتر مرکزی</span><p>{contact.address}</p><small>نشانی مفهومی و غیرواقعی</small></div></div><div className="contact-line"><Phone /><div><span>شماره تماس</span><a href="tel:+982188888888">{contact.phone}</a></div></div><div className="contact-line"><Mail /><div><span>پست الکترونیک</span><a dir="ltr" href={`mailto:${contact.email}`}>{contact.email}</a></div></div>
      <div className="map-placeholder" role="img" aria-label="نقشه مفهومی موقعیت نکسورا هلدینگ"><div className="map-roads"><i /><i /><i /><i /></div><div className="map-marker"><span><Building2 /></span><b>NEXORA HOLDING</b><small>موقعیت نمایشی</small></div><div className="map-coords">35.721° N / 51.411° E</div></div>
    </Reveal><Reveal delay={100}><form className="contact-form" onSubmit={submit} noValidate>{status === "success" && <div className="success" role="status"><span><Check /></span><div><b>پیام شما ثبت شد</b><p>این تأیید صرفاً نمایشی است و ایمیلی ارسال نشده است.</p></div><button type="button" onClick={() => setStatus("idle")} aria-label="بستن پیام"><X /></button></div>}
      <div className="form-row"><label>نام و نام خانوادگی<input name="name" aria-invalid={!!errors.name} />{errors.name && <small>{errors.name}</small>}</label><label>شماره تماس<input name="phone" inputMode="tel" dir="ltr" aria-invalid={!!errors.phone} />{errors.phone && <small>{errors.phone}</small>}</label></div>
      <label>ایمیل<input name="email" type="email" dir="ltr" aria-invalid={!!errors.email} />{errors.email && <small>{errors.email}</small>}</label><label>موضوع<select name="subject" defaultValue=""><option value="" disabled>انتخاب موضوع</option><option>فرصت سرمایه‌گذاری</option><option>همکاری سازمانی</option><option>درخواست اطلاعات</option></select></label><label>پیام<textarea name="message" rows="5" aria-invalid={!!errors.message} />{errors.message && <small>{errors.message}</small>}</label><button className="button primary submit" type="submit">ارسال پیام <Send /></button><p className="form-note">این فرم نمایشی است و اطلاعات به سرور ارسال نمی‌شود.</p>
    </form></Reveal></div>
  </div></section>;
}

function Footer() {
  return <footer><div className="footer-main container"><div><a href="#top" className="brand footer-brand"><span className="brand-mark">N</span><span><b>NEXORA</b><small>HOLDING</small></span></a><p>{holding.tagline}</p><span className="concept-label">Concept Website Demo</span></div><div className="footer-links"><b>دسترسی سریع</b>{nav.filter((_, i) => i !== 2).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div className="footer-contact"><b>شبکه‌های اجتماعی</b><div><a href="#top" aria-label="اینستاگرام - لینک نمایشی"><Instagram /></a><a href="#top" aria-label="لینکدین - لینک نمایشی"><Linkedin /></a><a href="#top" aria-label="تلگرام - لینک نمایشی"><Send /></a></div><a dir="ltr" href={`mailto:${contact.email}`}>{contact.email}</a></div></div><div className="footer-bottom container"><span>© 2026 NEXORA HOLDING — Concept Demo</span><span>یک هویت مفهومی، برای نمایش امکان‌ها</span></div></footer>;
}

export default function Site() { return <><Header /><main><Hero /><Stats /><About /><Areas /><Companies /><Documents /><Vision /><Contact /></main><Footer /></>; }
