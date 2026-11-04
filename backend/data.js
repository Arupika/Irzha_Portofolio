/**
 * Satu sumber kebenaran untuk data portofolio.
 * Frontend hanya membaca lewat API, jadi menambah proyek/sertifikat baru tidak menyentuh komponen.
 */

const educationHistory = [
  {
    id: 1,
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 Teknik Informatika',
    period: '2023 - Sekarang',
    description:
      'Mempelajari Pengembangan Website, Basis Data, UI/UX, dan Artificial Intelligence.',
  },
  {
    id: 2,
    institution: 'SMA BUDI UTOMO PERAK JOMBANG',
    major: 'MIPA',
    period: '2019 - 2022',
    description: '',
  },
  { id: 3, institution: 'SMPN 2 PALANGKARAYA', major: 'SMP', period: '2016 - 2019' },
  { id: 4, institution: 'SDN 4 MENTENG PALANGKARAYA', major: 'SD', period: '2010 - 2016' },
]

// Hanya teknologi yang benar-benar dipakai. `level` dihapus karena tidak ada pengukuran objektif.
const skills = [
  { name: 'HTML', category: 'Frontend', icon: 'html5' },
  { name: 'CSS', category: 'Frontend', icon: 'css3' },
  { name: 'JavaScript', category: 'Frontend', icon: 'javascript' },
  { name: 'Vue.js', category: 'Frontend', icon: 'vuejs' },
  { name: 'Bootstrap', category: 'Frontend', icon: 'bootstrap' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwindcss' },
  { name: 'PHP', category: 'Backend', icon: 'php' },
  { name: 'Laravel', category: 'Backend', icon: 'laravel' },
  { name: 'Node.js', category: 'Backend', icon: 'nodejs' },
  { name: 'Express.js', category: 'Backend', icon: 'express' },
  { name: 'REST API', category: 'Backend', icon: null },
  { name: 'MySQL', category: 'Database', icon: 'mysql' },
  { name: 'PostgreSQL', category: 'Database', icon: 'postgresql' },
  { name: 'Git', category: 'Tools', icon: 'git' },
  { name: 'GitHub', category: 'Tools', icon: 'github' },
  { name: 'Postman', category: 'Tools', icon: 'postman' },
  { name: 'Figma', category: 'Tools', icon: 'figma' },
]

const projects = [
  {
    id: 1,
    title: 'Mytra POS',
    tagline: 'Multi-Branch Point of Sale System',
    categories: ['Full Stack', 'Backend'],
    status: 'In Progress',
    role: 'Full Stack Developer / Project Developer',
    image: null, // Screenshot belum tersedia — jangan memakai gambar palsu untuk perangkat lunak nyata.
    repository: null, // Isi saat repositori boleh dipublikasikan.
    liveDemo: null,
    description:
      'Mytra POS is a multi-branch Point of Sale application designed to support retail sales operations, cashier activities, transaction management, and branch-based access control.',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'REST API', 'Laravel Sanctum'],
    contribution:
      'I develop the POS system end to end: the Laravel API and database schema, cashier and transaction flows, branch-level access control, and the integration architecture for payment and accounting services.',
    features: [
      'Multi-branch management with branch-level data access',
      'Role-based access control for owner, manager, and cashier',
      'Sales transaction management and cash payment processing',
      'Product and inventory management',
      'Cashier session management',
    ],
    inDevelopment: [
      'QRIS Mandiri dynamic payment — awaiting merchant API integration and verification',
      'Accounting application integration — under development with a separate Laravel Accounting app',
    ],
    highlights: [
      'Laravel REST API architecture with Laravel Sanctum authentication',
      'Transactional Outbox Pattern and Inbox Pattern for reliable event delivery',
      'Idempotency keys so a retried request never creates a duplicate transaction',
      'Integration audit logs and queue-based event delivery',
      'Payment status management across pending, paid, and failed states',
    ],
  },
  {
    id: 2,
    title: 'Dewiji',
    tagline: 'Yogyakarta Tourism Platform',
    categories: ['Full Stack'],
    status: 'Completed',
    role: 'Team Developer (university group project, 6 members)',
    image: '/Dewiji logo.png',
    repository: 'https://github.com/Arupika/Dewiji',
    liveDemo: null,
    description:
      'Dewiji is a tourism platform designed to help visitors discover tourist destinations, holiday packages, and car rental services in Yogyakarta. Built as a university group project with six members.',
    tech: ['Vue 3', 'Bootstrap', 'Laravel', 'MySQL', 'REST API'],
    // contribution sengaja kosong: isi dengan bagian kerja yang benar-benar kamu kerjakan,
    // jangan mengklaim hasil kerja seluruh tim.
    contribution: null,
    features: [
      'Tourist destination catalog',
      'Holiday packages and car rental catalog',
      'WhatsApp ordering integration',
      'User authentication',
      'Admin dashboard',
      'Backend REST API integration',
    ],
    inDevelopment: [],
    highlights: ['Single-page Vue frontend consuming a Laravel REST API'],
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    tagline: 'This website',
    categories: ['Full Stack', 'Frontend'],
    status: 'Completed',
    role: 'Solo Developer',
    image: '/PortofolioIMG.png',
    repository: 'https://github.com/Arupika/Irzha_Portofolio',
    liveDemo: 'https://irzha-portofolio.vercel.app/',
    description:
      'A personal portfolio website developed to showcase my technical skills, educational background, certifications, and software development projects.',
    tech: ['Vue 3', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST API'],
    contribution:
      'Designed and built the whole site alone: the Vue 3 + Tailwind frontend, the Express REST API that serves portfolio data, and the Vercel deployment for both parts.',
    features: [
      'Separate frontend and backend',
      'REST API integration for dynamic portfolio data',
      'Project, skills, education, and certificate presentation',
      'Responsive dark layout with scroll reveal animations',
    ],
    inDevelopment: [],
    highlights: [
      'Centralized API client and design tokens instead of duplicated markup',
      'Serverless Express deployment with SPA routing fallback on Vercel',
    ],
  },
]

const certificates = [
  {
    id: 1,
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    image: '/Sertifikat 1.jpg',
    link: 'https://drive.google.com/file/d/1BprrYT9tI3aZVqXs4bdLTT3u6mo0jp4A/view?usp=sharing',
    // Tambahkan sertifikat baru di sini — komponen Certificates langsung menampilkannya.
  },
]

module.exports = { educationHistory, skills, projects, certificates }
