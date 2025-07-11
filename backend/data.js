    const educationHistory = [
      {
        id: 1,
        institution: "Universitas Amikom Yogyakarta",
        major: "S1 Teknik Informatika",
        period: "2023 - Sekarang",
        description: "Mempelajari pengembangan web, basis data, dan UI/UX."
      },
      {
        id: 2,
        institution: "SMA BUDI UTOMO PERAK JOMBANG",
        major: "MIPA",
        period: "2019 - 2022",
        description: "Mondok sambil sekolah."
      },
      {
        id: 3,
        institution: "SMPN 2 PALANGKARAYA",
        major: "SMP",
        period: "2016 - 2019",
      },
      {
        id: 3,
        institution: "SDN 4 MENTENG PALANGKARAYA",
        major: "SD",
        period: "2010 - 2016",
      }
    ];

    const skills = [
      { id: 1, name: "HTML", level: 90, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { id: 2, name: "Vue.js", level: 90, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { id: 3, name: "Bootstrap", level: 85, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { id: 4, name: "GitHub", level: 80, category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { id: 5, name: "Laravel", level: 85, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { id: 6, name: "MySQL", level: 85, category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { id: 7, name: "JavaScript", level: 85, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { id: 8, name: "Node.js", level: 75, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { id: 9, name: "Tailwind CSS", level: 80, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
      { id: 10, name: "Figma", level: 80, category: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { id: 11, name: "Firebase", level: 70, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { id: 12, name: "Postman", level: 75, category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
    ];


    const projects = [
      {
        id: 1,
        title: "Website Portfolio",
        description: "Website portofolio pribadi interaktif dengan Vue dan Tailwind CSS.",
        tech: ["Vue", "Tailwind", "Node.js"],
        image : "/src/assets/PortofolioIMG.png",
        link: "https://github.com/Arupika/Irzha_Portofolio"
      },
      {
        id: 2,
        title: "Website Wisata Kota Yogyakarta Dewiji",
        description: "Aplikasi untuk pemesanan tempat wisata dan rental mobil.",
        tech: ["Vue","Bootstrap", "Laravel", "MySQL"],
        image : "/src/assets/Dewiji logo.png",
        link: "https://github.com/Arupika/Dewiji"
      }
    ];

    const certificates = [
      {
        id: 1,
        title: "CCNA: Introduction to Networks",
        issuer: "Network 1 Cisco",
        image: "/src/assets/Sertifikat 1.jpg",
        link: "https://drive.google.com/file/d/1BprrYT9tI3aZVqXs4bdLTT3u6mo0jp4A/view?usp=sharing"
      },
      // Tambahkan sertifikat lainnya di sini
    ];

    module.exports = { educationHistory, skills, projects,certificates};