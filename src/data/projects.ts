export interface Project {
  id: number;
  title: string;
  description: string;
  /** Tech stack badges */
  tags: string[];
  githubUrl: string;
  /** Optional live demo */
  demoUrl?: string;
  /** Emoji or icon identifier for visual identity */
  icon: string;
  /** Highlight color for the card accent */
  accentColor: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Gerenciamento de Tasks - API REST",
    description:
      "API REST desenvolvida em Java com Spring Boot para cadastro de usuários com autenticação JWT. Integração com banco de dados relacional e persistência via JPA/Hibernate.",
    tags: ["Java", "Spring Boot", "JPA/Hibernate", "MySQL", "PostgreSQL"],
    githubUrl: "https://github.com/danfornazeiro/acadfy-backend",
    icon: "📝",
    accentColor: "#7c3aed",
    featured: true,
  },
  {
    id: 2,
    title: "ViaCep - API de Consulta de CEP",
    description:
      "API REST em Java com Spring Boot para consulta de endereços a partir do CEP. Integração com serviço externo ViaCep, tratamento de erros e resposta estruturada em JSON.",
    tags: ["Java", "Spring Boot", "JWT", "JPA/Hibernate", "MySQL"],
    githubUrl: "https://github.com/danfornazeiro/viaCep",
    icon: "📍",
    accentColor: "#06b6d4",
    featured: true,
  },
  {
    id: 3,
    title: "HackTeen Venturus - L.A.R",
    description: "Um plataforma guia frontend para refugiados no Brasil.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "hackateen-tawny.vercel.app/",
    icon: "📍",
    accentColor: "#3A376B",
    featured: false,
  },
  {
    id: 4,
    title: "E-commerce beweare",
    description: "Um eccomerce fullstack de uma loja de items esportivos.",
    tags: ["Next.js", "React", "Tailwind CSS", "Drizzle ORM", "Neon DB"],
    githubUrl: "beweare-ecommerce-frnzdev.vercel.app",
    icon: "📍",
    accentColor: "#681982",
    featured: false,
  },
];
