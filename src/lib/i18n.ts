import { cookies, headers } from "next/headers";

const dictionaries = {
  pt: {
    locale: "pt-BR",
    site: {
      title: "Jonas Soares - Desenvolvedor Full Stack",
      description:
        "Portfólio de Desenvolvedor Full Stack especializado em React, Next.js e Node.js",
      footerText: "© {year} Jonas Soares. Todos os direitos reservados.",
    },
    header: {
      nav: {
        home: "Home",
        projects: "Projetos",
        about: "Sobre",
        contact: "Contato",
      },
      actions: {
        github: "GitHub",
      },
      menu: {
        open: "Abrir menu",
        close: "Fechar menu",
        title: "Navegação",
      },
    },
    themeToggle: {
      label: "Alternar tema",
    },
    hero: {
      badge: "Desenvolvedor Full Stack",
      greeting: "Olá, eu sou",
      name: "Jonas Soares dos Santos",
      description:
        "Construindo experiências web modernas e escaláveis com React, Next.js e Node.js. Apaixonado por código limpo e soluções criativas.",
      primaryCta: "Ver Projetos",
      secondaryCta: "Entre em Contato",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      avatarAlt: "Avatar do GitHub de {username}",
    },
    home: {
      featured: {
        badge: "Projetos em Destaque",
        title: "Alguns dos meus trabalhos mais recentes",
        description:
          "Seleção de projetos que demonstram minha experiência em frontend, backend e soluções full stack.",
        viewAll: "Ver Todos os Projetos",
      },
      skills: {
        badge: "Habilidades & Tecnologias",
        title: "Ferramentas que impulsionam meus projetos",
        description:
          "Um panorama das stacks que domino para entregar soluções completas.",
        frontendDescription: "Interfaces modernas, responsivas e acessíveis.",
        backendDescription: "APIs robustas, escaláveis e seguras.",
      },
      cta: {
        title: "Vamos trabalhar juntos?",
        description:
          "Estou sempre aberto a discutir novos projetos, ideias e oportunidades. Vamos construir algo incrível?",
        button: "Entre em Contato",
      },
    },
    projectsGallery: {
      filterTitle: "Filtrar por categoria",
      filterDescription: "Explore os projetos por área de atuação.",
      filters: {
        all: "Todos",
        frontend: "Frontend",
        backend: "Backend",
        fullstack: "Full Stack",
      },
      emptyTitle: "Nenhum projeto encontrado",
      emptyDescription:
        "Ajuste os filtros ou volte mais tarde para ver novos projetos.",
    },
    projectCard: {
      updatedOn: "Atualizado em {date}",
      github: "GitHub",
      liveDemo: "Ver Demo",
      noDescription: "Projeto sem descrição fornecida no GitHub.",
    },
    projectsPage: {
      badge: "Portfólio",
      title: "Meus projetos favoritos",
      description:
        "Uma coleção dos meus trabalhos mais recentes, destacando soluções em frontend, backend e aplicações completas.",
      ctaTitle: "Quer ver mais?",
      ctaDescription:
        "Confira meu GitHub para descobrir outros projetos, estudos e contribuições open source.",
      ctaButton: "Visitar @{username}",
    },
    aboutPage: {
      badge: "Sobre mim",
      title: "Construindo minha jornada no desenvolvimento de software",
      description:
        "Conheça minha trajetória como desenvolvedor iniciante, meus aprendizados e as tecnologias que estudo e aplico nos meus projetos.",
      story: {
        title: "Minha história",
        description:
          "Os primeiros passos na minha carreira como desenvolvedor.",
        paragraphs: [
          "Sou estudante do curso de Análise e Desenvolvimento de Sistemas na FATEC Mogi Mirim, no 6.º semestre.",
          "Atualmente, estou estagiando no departamento de desenvolvimento de software da Infonacci.",
          "Sou apaixonado por tecnologia e programação, e gosto de transformar ideias em soluções práticas por meio da programação.",
          "Tenho conhecimentos em várias linguagens de programação, facilidade para trabalhar em equipe, resolver problemas rapidamente e adaptar-me a novos desafios.",
        ],
      },
      metrics: {
        title: "Em números",
        description: "Indicadores das minhas entregas e experiências recentes.",
        items: [
          {
            value: "{projectCount}",
            description:
              "Projetos no GitHub entre iniciativas pessoais e de estudo.",
          },
          {
            value: "2020",
            description: "Ano em que comecei minha jornada na programação.",
          },
          {
            value: "<1",
            description:
              "Ano de experiência profissional como estagiário em desenvolvimento.",
          },
        ],
      },
      skills: {
        badge: "Habilidades técnicas",
        title: "Soluções ponta a ponta",
        description:
          "Do design de interfaces ao deploy, construo experiências completas com foco em resultados.",
        frontendTitle: "Frontend",
        frontendDescription:
          "Interfaces ricas, responsivas e acessíveis para diferentes dispositivos.",
        backendTitle: "Backend",
        backendDescription:
          "APIs escaláveis, arquitetura modular e foco em observabilidade.",
        toolsTitle: "Ferramentas & DevOps",
        toolsDescription:
          "Automação, monitoramento e entrega contínua para acelerar ciclos de produto.",
      },
      interests: {
        title: "Interesses",
        description: "O que me inspira a continuar evoluindo diariamente.",
        items: [
          {
            icon: "📚",
            title: "Aprendizado contínuo",
            description: "Sempre explorando novas tecnologias e boas práticas.",
          },
          {
            icon: "🌐",
            title: "Open source",
            description:
              "Compartilhando conhecimento e colaborando com a comunidade.",
          },
          {
            icon: "🎨",
            title: "UI/UX",
            description:
              "Criando interfaces intuitivas com foco na experiência.",
          },
          {
            icon: "⚡",
            title: "Performance",
            description:
              "Otimizando aplicações para serem rápidas e escaláveis.",
          },
        ],
      },
      nextSteps: {
        title: "Próximos passos",
        description: "Sempre buscando colaborar em projetos desafiadores.",
        body: "Curto o processo de transformar ideias em produtos reais. Se você tem um desafio e acredita que minha experiência pode ajudar, vamos conversar.",
        button: "Entre em contato",
      },
    },
    contactPage: {
      badge: "Vamos conversar",
      title: "Tem um projeto em mente?",
      description:
        "Fale comigo sobre ideias, oportunidades e desafios. Estou pronto para colaborar.",
      info: {
        title: "Informações de contato",
        description:
          "Estou sempre aberto a discutir novos projetos e parcerias.",
        emailLabel: "E-mail",
        locationLabel: "Localização",
        locationValue: "São Paulo, Brasil",
        socialLabel: "Redes sociais",
        projectPreferencesTitle: "Preferências de projeto",
        projectPreferencesDescription:
          "Trabalhos remotos, times distribuídos, aplicações web modernas (React/Next.js) e APIs escaláveis em Node.js.",
      },
      form: {
        title: "Envie uma mensagem",
        description: "Respondo normalmente dentro de 1 a 2 dias úteis.",
        fields: {
          nameLabel: "Nome",
          namePlaceholder: "Seu nome",
          emailLabel: "Email",
          emailPlaceholder: "seu@email.com",
          messageLabel: "Mensagem",
          messagePlaceholder: "Descreva seu projeto ou dúvida",
        },
        submitIdle: "Enviar mensagem",
        submitLoading: "Enviando...",
        successMessage: "Mensagem enviada com sucesso! Responderei em breve.",
        errorMessage:
          "Ocorreu um erro. Por favor, tente novamente em alguns instantes.",
      },
    },
  },
  en: {
    locale: "en",
    site: {
      title: "Jonas Soares - Full Stack Developer",
      description:
        "Full Stack Developer Portfolio specialized in React, Next.js, and Node.js",
      footerText: "© {year} Jonas Soares. All rights reserved.",
    },
    header: {
      nav: {
        home: "Home",
        projects: "Projects",
        about: "About",
        contact: "Contact",
      },
      actions: {
        github: "GitHub",
      },
      menu: {
        open: "Open menu",
        close: "Close menu",
        title: "Navigation",
      },
    },
    themeToggle: {
      label: "Toggle theme",
    },
    hero: {
      badge: "Full Stack Developer",
      greeting: "Hi, I'm",
      name: "Jonas Soares dos Santos",
      description:
        "Building modern and scalable web experiences with React, Next.js, and Node.js. Passionate about clean code and creative solutions.",
      primaryCta: "View Projects",
      secondaryCta: "Get in Touch",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      avatarAlt: "GitHub avatar of {username}",
    },
    home: {
      featured: {
        badge: "Featured Projects",
        title: "Some of my latest work",
        description:
          "A curated selection of projects showcasing my experience in frontend, backend, and full-stack solutions.",
        viewAll: "See All Projects",
      },
      skills: {
        badge: "Skills & Technologies",
        title: "Tools powering my projects",
        description:
          "An overview of the stacks I master to deliver complete solutions.",
        frontendDescription: "Modern, responsive, and accessible interfaces.",
        backendDescription: "Robust, scalable, and secure APIs.",
      },
      cta: {
        title: "Want to work together?",
        description:
          "I'm always open to new projects, ideas, and opportunities. Let's build something amazing!",
        button: "Get in Touch",
      },
    },
    projectsGallery: {
      filterTitle: "Filter by category",
      filterDescription: "Browse the projects by focus area.",
      filters: {
        all: "All",
        frontend: "Frontend",
        backend: "Backend",
        fullstack: "Full Stack",
      },
      emptyTitle: "No projects found",
      emptyDescription:
        "Adjust the filters or come back later to see new projects.",
    },
    projectCard: {
      updatedOn: "Updated on {date}",
      github: "GitHub",
      liveDemo: "View Demo",
      noDescription: "Project without a description provided on GitHub.",
    },
    projectsPage: {
      badge: "Portfolio",
      title: "My favorite projects",
      description:
        "A collection of my latest work, highlighting frontend, backend, and full-stack solutions.",
      ctaTitle: "Want to see more?",
      ctaDescription:
        "Check out my GitHub to discover other projects, experiments, and open-source contributions.",
      ctaButton: "Visit @{username}",
    },
    aboutPage: {
      badge: "About me",
      title: "Building my journey in software development",
      description:
        "Get to know my path as an early-career developer, what I'm learning, and the technologies I study and apply in my projects.",
      story: {
        title: "My story",
        description: "The first steps in my journey as a developer.",
        paragraphs: [
          "I'm a student in the Systems Analysis and Development program at FATEC Mogi Mirim, currently in the 6th semester.",
          "I'm currently interning in the software development department at Infonacci.",
          "I'm passionate about technology and programming, and I love turning ideas into practical solutions through code.",
          "I have experience with several programming languages, enjoy teamwork, solve problems quickly, and adapt to new challenges.",
        ],
      },
      metrics: {
        title: "By the numbers",
        description: "Highlights from my recent work and experience.",
        items: [
          {
            value: "{projectCount}",
            description:
              "Projects on GitHub including personal initiatives and study cases.",
          },
          {
            value: "2020",
            description: "The year I started my programming journey.",
          },
          {
            value: "<1",
            description:
              "Year of professional experience as a software development intern.",
          },
        ],
      },
      skills: {
        badge: "Technical skills",
        title: "End-to-end solutions",
        description:
          "From interface design to deployment, I build complete experiences focused on results.",
        frontendTitle: "Frontend",
        frontendDescription:
          "Rich, responsive, and accessible interfaces for different devices.",
        backendTitle: "Backend",
        backendDescription:
          "Scalable APIs, modular architecture, and observability in focus.",
        toolsTitle: "Tools & DevOps",
        toolsDescription:
          "Automation, monitoring, and continuous delivery to accelerate product cycles.",
      },
      interests: {
        title: "Interests",
        description: "What keeps me motivated to grow every day.",
        items: [
          {
            icon: "📚",
            title: "Continuous learning",
            description:
              "Always exploring new technologies and best practices.",
          },
          {
            icon: "🌐",
            title: "Open source",
            description:
              "Sharing knowledge and collaborating with the community.",
          },
          {
            icon: "🎨",
            title: "UI/UX",
            description:
              "Designing intuitive interfaces with a focus on experience.",
          },
          {
            icon: "⚡",
            title: "Performance",
            description: "Optimizing applications to be fast and scalable.",
          },
        ],
      },
      nextSteps: {
        title: "Next steps",
        description: "Always looking to collaborate on challenging projects.",
        body: "I enjoy turning ideas into real products. If you have a challenge and believe my experience can help, let's talk.",
        button: "Get in touch",
      },
    },
    contactPage: {
      badge: "Let's talk",
      title: "Got a project in mind?",
      description:
        "Reach out to me with ideas, opportunities, and challenges. I'm ready to collaborate.",
      info: {
        title: "Contact information",
        description:
          "I'm always open to discussing new projects and partnerships.",
        emailLabel: "Email",
        locationLabel: "Location",
        locationValue: "São Paulo, Brazil",
        socialLabel: "Social networks",
        projectPreferencesTitle: "Project preferences",
        projectPreferencesDescription:
          "Remote work, distributed teams, modern web apps (React/Next.js), and scalable Node.js APIs.",
      },
      form: {
        title: "Send a message",
        description: "I usually reply within 1 to 2 business days.",
        fields: {
          nameLabel: "Name",
          namePlaceholder: "Your name",
          emailLabel: "Email",
          emailPlaceholder: "you@example.com",
          messageLabel: "Message",
          messagePlaceholder: "Describe your project or question",
        },
        submitIdle: "Send message",
        submitLoading: "Sending...",
        successMessage: "Message sent successfully! I'll get back to you soon.",
        errorMessage: "Something went wrong. Please try again in a moment.",
      },
    },
  },
} as const;

type Dictionaries = typeof dictionaries;

export type SupportedLocale = keyof Dictionaries;

export type Dictionary = Dictionaries[SupportedLocale];

export async function detectLocale(): Promise<SupportedLocale> {
  const headersList = await headers();
  const cookieStore = await cookies();

  // 1) Dev/override via cookie
  const forced =
    cookieStore.get("NEXT_LOCALE")?.value || cookieStore.get("locale")?.value;
  if (forced) {
    const norm = forced.toLowerCase();
    if (norm.startsWith("pt")) return "pt";
    if (norm.startsWith("en")) return "en";
  }

  const countryHeader =
    headersList.get("x-vercel-ip-country") ??
    headersList.get("x-geo-country") ??
    headersList.get("cf-ipcountry");

  if (countryHeader && countryHeader.toUpperCase() === "BR") {
    return "pt";
  }

  const acceptLanguage = headersList.get("accept-language");
  if (acceptLanguage) {
    const locales = acceptLanguage
      .split(",")
      .map((part: string) => part.split(";")[0]?.trim().toLowerCase())
      .filter((value): value is string => Boolean(value));

    if (locales.some((locale) => locale.startsWith("pt"))) {
      return "pt";
    }
  }

  return "en";
}

export function getDictionary(locale: SupportedLocale): Dictionary {
  return dictionaries[locale];
}

export async function getDictionaryForCurrentRequest(): Promise<Dictionary> {
  const locale = await detectLocale();
  return getDictionary(locale);
}

export function getSupportedLocales(): SupportedLocale[] {
  return Object.keys(dictionaries) as SupportedLocale[];
}
