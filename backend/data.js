const educationHistory = [
  {
    id: 1,
    school: "Universitas Amikom Yogyakarta",
    degree: "S1 Teknik Informatika",
    year: "2023 - Sekarang",
    description: "Mempelajari pengembangan web, basis data, dan UI/UX."
  },
  {
    id: 2,
    school: "SMK Negeri 1 Sukamara",
    degree: "Multimedia",
    year: "2020 - 2023",
    description: "Aktif di Kegiatan Sekolah dan Desain Media Interaktif."
  }
];

const skills = [
  { id: 1, name: "HTML & CSS", level: 90, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { id: 2, name: "Vue.js", level: 90, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { id: 3, name: "Tailwind CSS", level: 80, category: "Frontend", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { id: 4, name: "Figma", level: 95, category: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { id: 5, name: "Git & GitHub", level: 80, category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { id: 6, name: "CorelDRAW", level: 90, category: "Design", icon: "https://cdn.simpleicons.org/coreldraw/47A348" }
];

const projects = [
  {
    id: 1,
    title: "Website Portfolio",
    description: "Website portofolio pribadi interaktif dengan Vue dan Tailwind CSS.",
    tech: ["Vue", "Tailwind", "Node.js"]
  },
  {
    id: 2,
    title: "Aplikasi Booking Wisata",
    description: "Aplikasi untuk pemesanan tempat wisata dan rental mobil.",
    tech: ["Vue", "Firebase"]
  }
];


module.exports = { educationHistory, skills, projects };