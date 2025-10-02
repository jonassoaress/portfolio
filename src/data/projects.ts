import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin",
    longDescription:
      "Sistema fullstack com Next.js, Node.js, PostgreSQL e Stripe para pagamentos. Inclui autenticação, gerenciamento de produtos, carrinho de compras e dashboard administrativo.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/seuusuario/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    type: "fullstack",
    featured: true,
  },
  {
    id: "2",
    title: "Task Manager API",
    description:
      "API RESTful para gerenciamento de tarefas com autenticação JWT",
    longDescription:
      "API robusta construída com Node.js, Express e MongoDB. Implementa autenticação, autorização, validação de dados e documentação Swagger.",
    image: "/images/projects/api.jpg",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    githubUrl: "https://github.com/seuusuario/task-api",
    type: "backend",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Dashboard",
    description:
      "Dashboard interativo para visualização de dados de portfólio de investimentos",
    longDescription:
      "Interface moderna e responsiva com gráficos interativos, dark mode e animações suaves.",
    image: "/images/projects/dashboard.jpg",
    tags: ["React", "Chart.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/seuusuario/dashboard",
    liveUrl: "https://portfolio-dashboard.vercel.app",
    type: "frontend",
  },
  // Adicione mais projetos aqui
];

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByTpe = (type: Project["type"]) => {
  return projects.filter((project) => project.type === type);
};
