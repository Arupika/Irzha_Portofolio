// src/config/site.js
/**
 * Satu sumber kebenaran untuk identitas, tautan, dan navigasi.
 * Ganti email/nomor/tautan di sini saja — navbar, hero, contact, dan footer ikut.
 */

export const profile = {
  name: 'Irzha Fahrizaldy',
  role: 'Full Stack Developer',
  greeting: 'Hello, I am',
  headline: 'Building functional, maintainable, and user-focused web applications.',
  summary:
    'I am an Informatics Engineering student passionate about building modern web applications, developing backend systems, designing intuitive user interfaces, and creating reliable software solutions.',
  educationLabel: 'S1 Teknik Informatika — Universitas Amikom Yogyakarta',
  location: 'Yogyakarta, Indonesia',
  // Belum ada berkas CV yang valid di frontend/public, jadi tombol Download CV tidak ditampilkan.
  cvFile: null,
}

export const contact = {
  email: 'irzhafahri354@gmail.com',
  whatsapp: '6281348680937',
  whatsappDisplay: '+62 813-4868-0937',
}

export const socials = [
  { key: 'github', label: 'GitHub', href: 'https://github.com/Arupika' },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/irzha-fahrizaldy-2254a0305/',
  },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/_irzha_/' },
]

export const repositories = {
  portfolio: 'https://github.com/Arupika/Irzha_Portofolio',
}

export const heroRotatingRoles = [
  'Full Stack Developer',
  'Backend & API Developer',
  'Vue + Laravel Developer',
]

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

/** Paragraf pembuka section About. */
export const aboutIntro = [
  'I build web applications from the side that decides whether a product works: the data flow in the database, the API contract, and the interface people use every day.',
  'My approach is simple — code must be readable by other people, testable, and easy to extend. That is why I separate responsibilities per layer, keep one source of truth for configuration, and remove duplication early.',
]

/** Kartu informasi "Primary Focus" / "Main Technology" di layout bento About. */
export const aboutInterests = [
  {
    icon: 'layers',
    title: 'Full Stack Web Development',
    text: 'Connecting the Vue interface and the backend service into one consistent product flow.',
  },
  {
    icon: 'server',
    title: 'Backend Engineering',
    text: 'Building REST APIs with Laravel and Express: authentication, authorization, and queued events.',
  },
  {
    icon: 'database',
    title: 'Database Management',
    text: 'Designing clean MySQL schemas for transactions, inventory, and branch-level data access.',
  },
  {
    icon: 'code',
    title: 'Software Architecture',
    text: 'Applying patterns that keep data reliable: idempotency, transactional outbox, and audit logs.',
  },
  {
    icon: 'layout',
    title: 'UI/UX Implementation',
    text: 'Turning designs into responsive, accessible interfaces that cashiers and admins can use quickly.',
  },
  {
    icon: 'sparkles',
    title: 'Development Philosophy',
    text: 'Clean, tested code is worth more than many features that are hard to maintain.',
  },
]

export const aboutCards = [
  { label: 'Education', value: profile.educationLabel, icon: 'graduation' },
  {
    label: 'Primary Focus',
    value: 'Web apps end to end — database, API, interface.',
    icon: 'target',
  },
  { label: 'Main Technology', value: 'Vue 3 · Laravel · Node.js · MySQL', icon: 'stack' },
  { label: 'Career Target', value: profile.role, icon: 'rocket' },
]
