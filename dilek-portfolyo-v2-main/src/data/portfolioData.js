export const portfolioData = {
  tr: {
    profile: {
      name: "Dilek",
      role: "Frontend Developer",
      location: "Kocaeli, Türkiye",
      motto: "Temiz kod, kullanıcı dostu arayüzler ve sürekli öğrenme tutkusu.",
      about: "Yazılım dünyasına olan tutkumla, modern web teknolojilerini kullanarak kullanıcı deneyimini ön planda tutan, estetik ve performanslı web uygulamaları geliştiriyorum. Yoğunlaştırılmış yazılım akademisi eğitimlerimi (SoftITo bünyesinde 140 saatlik Online ve 180 saatlik Yüz Yüze Frontend Development programları) başarıyla tamamlayarak teorik bilgimi güçlü pratik projelerle pekiştirdim. Arayüz geliştirmede bileşen tabanlı mimarileri (React) kullanmayı, modern CSS framework'leri (Tailwind CSS) ile esnek tasarımlar üretmeyi seviyorum. Ayrıca Linux sunucu yönetimi ve sistem altyapılarına olan ilgim sayesinde projelerin yayına alınma ve yönetim süreçlerine de hakimim.",
      goals: "Modern frontend ekosistemindeki en iyi pratikleri (Best Practices) uygulayarak, büyük ölçekli ve kullanıcı odaklı projelerde değer üretmek; kendimi sürekli güncel tutarak frontend yetkinliklerimi derinleştirmek.",
      email: "dilek.developer@outlook.com",
      github: "https://github.com/Dilek-Matrix",
      linkedin: "https://www.linkedin.com/in/dilek-ince-a93446272"
    },
    skills: {
      frontend: [
        { name: "HTML5", level: "95%" },
        { name: "CSS3", level: "90%" },
        { name: "JavaScript (ES6+)", level: "90%" },
        { name: "React.js", level: "85%" },
        { name: "Vite", level: "80%" },
        { name: "Tailwind CSS", level: "90%" },
        { name: "Bootstrap", level: "85%" },
        { name: "Responsive Design", level: "95%" }
      ],
      systems: [
        { name: "Linux (Ubuntu, Rocky Linux, Mint, Pardus)", level: "85%" },
        { name: "Terminal / Bash Komutları", level: "90%" },
        { name: "Paket Yöneticileri (apt, dnf)", level: "80%" },
        { name: "Sanal Makine (VM) Yönetimi", level: "75%" }
      ],
      tools: [
        { name: "Git & GitHub / GitLab", level: "90%" },
        { name: "VS Code", level: "95%" },
        { name: "npm / yarn", level: "85%" },
        { name: "GitHub Desktop", level: "85%" }
      ],
      quality: [
        { name: "Erişilebilirlik (Accessibility / a11y)", level: "80%" },
        { name: "Temel SEO (Meta tags, Semantic HTML)", level: "85%" },
        { name: "Performans (Lazy Loading, Görsel Opt.)", level: "80%" }
      ],
      professional: [
        "Takım çalışması ve ortak repo yönetimi (Git iş akışları)",
        "Detay odaklı arayüz analizi ve UI/UX duyarlılığı",
        "Problem çözme ve dokümantasyon okuma alışkanlığı"
      ]
    },
    education: [
      {
        title: "Frontend Development (Yüz Yüze)",
        organization: "SoftITo Yazılım Akademisi",
        hours: "180 Saat",
        details: "Sınıf içi yüz yüze yoğunlaştırılmış eğitim programı. React.js, Tailwind CSS ve responsive web geliştirme pratikleri."
      },
      {
        title: "Frontend Development (Online)",
        organization: "SoftITo Yazılım Akademisi",
        hours: "140 Saat",
        details: "Temel ve ileri seviye JavaScript, HTML5, CSS3, modern web mimarileri üzerine online akademi programı."
      }
    ],
    projects: [
      {
        id: "rosalia",
        title: "Rosalia - Güzellik Salonu Web Projesi",
        description: "Bir güzellik salonu için geliştirilmiş, modern ve şık tasarıma sahip kurumsal web sitesi.",
        role: "Frontend Geliştirici (Sınıf içi iş birliği projesi)",
        technologies: ["React", "Tailwind CSS", "Vite"],
        features: [
          "Modüler bileşen mimarisi (Header, Hero, Services bileşenleri)",
          "Tam uyumlu (responsive) mobil uyumlu tasarım",
          "Dinamik hizmet listeleme arayüzü"
        ],
        github: "https://github.com/Dilek-Matrix/rosalia-ana",
        demo: "https://rosalia-ana.vercel.app"
      },
      {
        id: "n11clone",
        title: "n11Clone - E-Ticaret Platformu Klonu",
        description: "Türkiye'nin önde gelen e-ticaret sitelerinden n11'in arayüz arayüz mimarisini ve kullanıcı akışını deneyimlemek için geliştirilmiş kapsamlı bir klon projesi.",
        role: "Frontend Geliştirici",
        technologies: ["React", "Tailwind CSS", "Vite", "JavaScript (ES6+)"],
        features: [
          "Gelişmiş Header ve Sidebar filtreleme navigasyonu",
          "Dinamik ürün grid yapısı ve listeleme",
          "State yönetimi ile mock veri simülasyonu"
        ],
        github: "https://github.com/Dilek-Matrix/n11clone",
        demo: "https://n11-clone.vercel.app"
      },
      {
        id: "guvenlibank",
        title: "GüvenliBank - Dijital Bankacılık Giriş Arayüzü",
        description: "Güvenlik ve kullanıcı deneyimi odaklı, modern bir dijital bankacılık giriş (login) paneli tasarımı ve form validasyonu çalışması.",
        role: "Frontend Geliştirici",
        technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
        features: [
          "Güvenli form doğrulama (validation) kontrolleri",
          "Erişilebilirlik (accessibility) standartlarına uygun yapı",
          "Temiz ve kurumsal UI/UX tasarımı"
        ],
        github: "https://github.com/Dilek-Matrix/guvenlibank",
        demo: "https://guvenlibank-login.vercel.app"
      }
    ]
  },
  en: {
    profile: {
      name: "Dilek",
      role: "Frontend Developer",
      location: "Istanbul, Turkey",
      motto: "Clean code, user-friendly interfaces, and a passion for continuous learning.",
      about: "Driven by my passion for the software world, I develop aesthetic and high-performance web applications using modern web technologies, placing user experience at the forefront. I have reinforced my theoretical knowledge with strong practical projects by successfully completing intensive software academy trainings (140 hours Online and 180 hours Face-to-Face Frontend Development programs at SoftITo). I enjoy using component-based architectures (React) in UI development and building flexible designs with modern CSS frameworks (Tailwind CSS). Additionally, my interest in Linux server management and system infrastructure gives me solid control over project deployment and management processes.",
      goals: "To generate value in large-scale, user-oriented projects by implementing best practices in the modern frontend ecosystem; and to constantly deepen my frontend competencies by keeping myself up to date.",
      email: "dilek.developer@outlook.com",
      github: "https://github.com/Dilek-Matrix",
      linkedin: "https://www.linkedin.com/in/dilek-ince-a93446272"
    },
    skills: {
      frontend: [
        { name: "HTML5", level: "95%" },
        { name: "CSS3", level: "90%" },
        { name: "JavaScript (ES6+)", level: "90%" },
        { name: "React.js", level: "85%" },
        { name: "Vite", level: "80%" },
        { name: "Tailwind CSS", level: "90%" },
        { name: "Bootstrap", level: "85%" },
        { name: "Responsive Design", level: "95%" }
      ],
      systems: [
        { name: "Linux (Ubuntu, Rocky Linux, Mint, Pardus)", level: "85%" },
        { name: "Terminal / Bash Commands", level: "90%" },
        { name: "Package Managers (apt, dnf)", level: "80%" },
        { name: "Virtual Machine (VM) Management", level: "75%" }
      ],
      tools: [
        { name: "Git & GitHub / GitLab", level: "90%" },
        { name: "VS Code", level: "95%" },
        { name: "npm / yarn", level: "85%" },
        { name: "GitHub Desktop", level: "85%" }
      ],
      quality: [
        { name: "Accessibility (a11y) Standards", level: "80%" },
        { name: "SEO Basics (Meta tags, Semantic HTML)", level: "85%" },
        { name: "Performance Opt. (Lazy Loading, Image Opt.)", level: "80%" }
      ],
      professional: [
        "Teamwork and joint repository management (Git workflows)",
        "Detail-oriented interface analysis and UI/UX sensitivity",
        "Problem solving and habit of reading documentation"
      ]
    },
    education: [
      {
        title: "Frontend Development (Face-to-Face)",
        organization: "SoftITo Software Academy",
        hours: "180 Hours",
        details: "In-class face-to-face intensive training program. Hands-on experience with React.js, Tailwind CSS, and responsive web development."
      },
      {
        title: "Frontend Development (Online)",
        organization: "SoftITo Software Academy",
        hours: "140 Hours",
        details: "Online academy program covering basic and advanced JavaScript, HTML5, CSS3, and modern web architectures."
      }
    ],
    projects: [
  {
    id: "rosalia",
    title: "Rosalia - Beauty Salon Web Project",
    description: "A corporate website developed for a beauty salon, featuring a modern and elegant design.",
    role: "Frontend Developer (In-class collaboration project)",
    technologies: ["React", "Tailwind CSS", "Vite"],
    features: [
      "Modular component architecture (Header, Hero, Services components)",
      "Fully responsive, mobile-first design",
      "Dynamic services listing interface"
    ],
    github: "https://github.com/Dilek-Matrix/rosalia-ana", // <-- "rosalia-ana" olarak güncelledik
    demo: "https://rosalia-ana.vercel.app"               // <-- "rosalia-ana.vercel.app" olarak güncelledik
  },
      {
        id: "n11clone",
        title: "n11Clone - E-Commerce Platform Clone",
        description: "A comprehensive clone project developed to experience the UI architecture and user flow of n11, one of Turkey's leading e-commerce websites.",
        role: "Frontend Developer",
        technologies: ["React", "Tailwind CSS", "Vite", "JavaScript (ES6+)"],
        features: [
          "Advanced Header and Sidebar filtering navigation",
          "Dynamic product grid layout and listing",
          "Mock data simulation with React state management"
        ],
        github: "https://github.com/Dilek-Matrix/n11clone",
        demo: "https://n11-clone.vercel.app"
      },
      {
        id: "guvenlibank",
        title: "GüvenliBank - Digital Banking Login Interface",
        description: "A modern digital banking login panel design and form validation project focusing on security and user experience.",
        role: "Frontend Developer",
        technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
        features: [
          "Secure form validation checks",
          "Structure complying with accessibility (a11y) standards",
          "Clean and corporate UI/UX design"
        ],
        github: "https://github.com/Dilek-Matrix/guvenlibank",
        demo: "https://guvenlibank-login.vercel.app"
      }
    ]
  }
};

export const uiTranslations = {
  tr: {
    about: "Hakkımda",
    skills: "Yetenekler",
    education: "Eğitim",
    projects: "Projeler",
    contact: "İletişim",
    terminal: "Terminal",
    statusShell: "Konsol: Aktif",
    statusOs: "İşletim Sistemi: Linux-x86_64",
    statusLoc: "Konum: İstanbul, Türkiye",
    badgeText: "Keşfe Hazır",
    welcome: "Merhaba, Ben",
    roleSubtitle: "Frontend Developer",
    systemsSubtitle: "Linux Sistem Yöneticisi Adayı",
    ctaProjects: "Projelerimi Gör",
    ctaContact: "İletişime Geç",
    ctaCv: "Özgeçmiş İndir",
    aboutTitle: "Dilek Kimdir?",
    aboutGoals: "Kariyer Hedefim",
    aboutStatsTitle: "Öne Çıkan Özellikler",
    statHours: "Eğitim Süresi",
    statHoursVal: "320+ Saat SoftITo",
    statFocus: "Linux Odağı",
    statFocusVal: "Terminal, VM, Paketler",
    statLocLabel: "Lokasyon",
    skillsSubtitle: "Frontend geliştirme pratikleri ve Linux sistem yönetimi yetkinliklerim.",
    skillsFront: "Frontend Geliştirme",
    skillsSys: "Sistem & Sunucu Yönetimi",
    skillsTools: "Araçlar & Metodolojiler",
    skillsQuality: "Kalite, Optimizasyon & Sosyal",
    skillsProfessional: "Çalışma Disiplini",
    educationTitle: "Eğitim & Deneyim",
    projectsSubtitle: "SoftITo Yazılım Akademisi bünyesinde geliştirdiğim örnek web uygulamaları.",
    projectsFilterAll: "Hepsi",
    projectsFilterReact: "React & Vite",
    projectsFilterVanilla: "JS & Vanilla",
    projectsFeatures: "Özellikler",
    projectsDemo: "Canlı Demo",
    projectsDemoRepo: "Depo üzerinden incelenebilir",
    terminalTitle: "Sistem Konsolu",
    terminalSubtitle: "Linux sistem adminliği ve terminal yetkinliklerimi test etmek için bu mini terminali kullanabilirsiniz.",
    terminalTip: "İpucu: Komut listesini görmek için 'help', sistem panelini açmak için 'neofetch' yazın.",
    contactTitle: "İletişime Geç",
    contactInfoTitle: "Ulaşım Bilgileri",
    contactInfoDesc: "Fikirleriniz, projeleriniz ya da sadece frontend/Linux üzerine sohbet etmek için bana ulaşabilirsiniz.",
    contactEmailLabel: "E-Posta",
    contactLocLabel: "Konum",
    contactSocialLabel: "Sosyal Medya",
    formName: "İsim *",
    formEmail: "E-Posta *",
    formSubject: "Konu",
    formMessage: "Mesaj *",
    formNamePlaceholder: "Adınız Soyadınız",
    formEmailPlaceholder: "ornek@mail.com",
    formSubjectPlaceholder: "Mesajınızın konusu",
    formMessagePlaceholder: "Mesajınızı buraya yazın...",
    formSuccess: "Mesajınız başarıyla iletildi! En kısa sürede dönüş sağlayacağım.",
    formError: "Lütfen zorunlu alanları doldurun.",
    formSubmit: "Mesaj Gönder",
    formSubmitting: "Gönderiliyor...",
    footerRights: "Tüm Hakları Saklıdır.",
    footerBuilt: "React, Vite & Tailwind CSS v4 ile geliştirilmiştir."
  },
  en: {
    about: "About",
    skills: "Skills",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
    terminal: "Terminal",
    statusShell: "Shell: Online",
    statusOs: "OS: Linux-x86_64",
    statusLoc: "Loc: Istanbul, Turkey",
    badgeText: "Ready to Explore",
    welcome: "Hello, I'm",
    roleSubtitle: "Frontend Developer",
    systemsSubtitle: "Linux System Administrator Candidate",
    ctaProjects: "See My Projects",
    ctaContact: "Get in Touch",
    ctaCv: "Download CV",
    aboutTitle: "Who is Dilek?",
    aboutGoals: "Career Goal",
    aboutStatsTitle: "Key Highlights",
    statHours: "Training Duration",
    statHoursVal: "320+ Hours SoftITo",
    statFocus: "Linux Focus",
    statFocusVal: "Terminal, VM, Packages",
    statLocLabel: "Location",
    skillsSubtitle: "My frontend development practices and Linux system administration skills.",
    skillsFront: "Frontend Development",
    skillsSys: "System & Server Administration",
    skillsTools: "Tools & Methodologies",
    skillsQuality: "Quality, Optimization & Social",
    skillsProfessional: "Work Ethics",
    educationTitle: "Education & Experience",
    projectsSubtitle: "Sample web applications I developed within SoftITo Software Academy.",
    projectsFilterAll: "All",
    projectsFilterReact: "React & Vite",
    projectsFilterVanilla: "JS & Vanilla",
    projectsFeatures: "Features",
    projectsDemo: "Live Demo",
    projectsDemoRepo: "Inspect via Repo",
    terminalTitle: "System Console",
    terminalSubtitle: "You can use this mini terminal to test my Linux system administration and command line skills.",
    terminalTip: "Tip: Type 'help' to see the command list, or 'neofetch' to open the system panel.",
    contactTitle: "Get in Touch",
    contactInfoTitle: "Contact Info",
    contactInfoDesc: "You can reach out to me for ideas, projects, or just to chat about frontend and Linux.",
    contactEmailLabel: "E-mail",
    contactLocLabel: "Location",
    contactSocialLabel: "Social Media",
    formName: "Name *",
    formEmail: "E-mail *",
    formSubject: "Subject",
    formMessage: "Message *",
    formNamePlaceholder: "Your Full Name",
    formEmailPlaceholder: "example@mail.com",
    formSubjectPlaceholder: "Subject of your message",
    formMessagePlaceholder: "Write your message here...",
    formSuccess: "Your message has been sent successfully! I will get back to you as soon as possible.",
    formError: "Please fill in the required fields.",
    formSubmit: "Send Message",
    formSubmitting: "Sending...",
    footerRights: "All Rights Reserved.",
    footerBuilt: "Built with React, Vite & Tailwind CSS v4."
  }
};
