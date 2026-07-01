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
    title: "API de Autenticação com JWT",
    description:
      "API REST desenvolvida com Java e Spring Boot, implementando autenticação via JWT e Spring Security, controle de acesso com Spring Security, persistência utilizando JPA/Hibernate e integração com banco de dados PostgreSQL.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA/Hibernate", "PostgreSQL"],
    githubUrl: "https://github.com/eufrnz",
    icon: "🔐",
    accentColor: "#60a5fa",
    featured: true,
  },
  {
    id: 2,
    title: "VanRoute",
    description:
      "Desenvolvimento de uma plataforma Full Stack para gestão de transporte escolar, com monitoramento em tempo real, otimização de rotas, autenticação de usuários, dashboard administrativo, controle financeiro, notificações automáticas e comunicação entre pais, motoristas e empresas.",
    tags: ["Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "APIs REST"],
    githubUrl: "https://github.com/eufrnz",
    icon: "🚌",
    accentColor: "#93c5fd",
    featured: true,
  },
  {
    id: 3,
    title: "Labor",
    description:
      "Plataforma web desenvolvida em equipe para conectar profissionais freelancers a oportunidades em eventos, como monitores de brinquedos, copeiros, garçons e manobristas. Atuei no desenvolvimento utilizando Laravel, PHP, JavaScript e SQL, além de participar da modelagem do sistema, documentação técnica e organização do projeto.",
    tags: ["Laravel", "PHP", "JavaScript", "SQL"],
    githubUrl: "https://github.com/eufrnz",
    icon: "🎫",
    accentColor: "#c4b5fd",
    featured: false,
  },
  {
    id: 4,
    title: "E-commerce de Bewear",
    description:
      "Plataforma de comércio eletrônico desenvolvida com Next.js, React, TypeScript e Node.js, contendo catálogo de produtos, carrinho de compras, gerenciamento de pedidos e integração de pagamentos via Stripe em ambiente de testes.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Stripe"],
    githubUrl: "https://github.com/eufrnz",
    icon: "🛍️",
    accentColor: "#bae6fd",
    featured: false,
  },
];
