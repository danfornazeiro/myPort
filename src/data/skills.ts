export interface Skill {
  name: string;
  /** URL of the logo — sourced from devicons CDN */
  logo: string;
  /** Brand color used for the glow/badge accent */
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  /** When true, renders this entry visually nested under the previous category */
  isSubcategory?: boolean;
  /** Label shown as the subcategory subtitle */
  subcategoryLabel?: string;
}

const DEVICONS = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens & Back-end",
    skills: [
      {
        name: "Java",
        logo: `${DEVICONS}/java/java-original.svg`,
        color: "#f89820",
      },
      {
        name: "Spring Boot",
        logo: `${DEVICONS}/spring/spring-original.svg`,
        color: "#6db33f",
      },
      {
        name: "Spring Security",
        logo: `${DEVICONS}/spring/spring-original.svg`,
        color: "#6db33f",
      },
      {
        name: "JPA/Hibernate",
        logo: `${DEVICONS}/hibernate/hibernate-original.svg`,
        color: "#bcae79",
      },
      {
        name: "Node/Express",
        logo: `${DEVICONS}/nodejs/nodejs-original.svg`,
        color: "#808080",
      },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      {
        name: "MySQL",
        logo: `${DEVICONS}/mysql/mysql-original.svg`,
        color: "#00618a",
      },
      {
        name: "PostgreSQL",
        logo: `${DEVICONS}/postgresql/postgresql-original.svg`,
        color: "#336791",
      },
      {
        name: "SQL",
        logo: `${DEVICONS}/azuresqldatabase/azuresqldatabase-original.svg`,
        color: "#cc2927",
      },
    ],
  },
  {
    title: "ORM & Cloud DB",
    isSubcategory: true,
    subcategoryLabel: "ORM & Cloud DB",
    skills: [
      {
        name: "JPA / Hibernate",
        logo: `${DEVICONS}/hibernate/hibernate-original.svg`,
        color: "#bcae79",
      },
      {
        name: "Prisma",
        logo: `${DEVICONS}/prisma/prisma-original.svg`,
        color: "#e2e8f0",
      },
      {
        name: "Drizzle ORM",
        logo: "https://avatars.githubusercontent.com/u/108468352?s=64&v=4",
        color: "#c5f74f",
      },
      {
        name: "Neon DB",
        logo: "https://avatars.githubusercontent.com/u/77690634?s=64&v=4",
        color: "#00e599",
      },
    ],
  },
  {
    title: "Front-end",
    skills: [
      {
        name: "JavaScript",
        logo: `${DEVICONS}/javascript/javascript-original.svg`,
        color: "#f7df1e",
      },
      {
        name: "TypeScript",
        logo: `${DEVICONS}/typescript/typescript-original.svg`,
        color: "#3178c6",
      },
      {
        name: "HTML5",
        logo: `${DEVICONS}/html5/html5-original.svg`,
        color: "#e34f26",
      },
      {
        name: "CSS3",
        logo: `${DEVICONS}/css3/css3-original.svg`,
        color: "#1572b6",
      },
      {
        name: "React",
        logo: `${DEVICONS}/react/react-original.svg`,
        color: "#61dafb",
      },
      {
        name: "Next.js",
        logo: `${DEVICONS}/nextjs/nextjs-original.svg`,
        color: "#e2e8f0",
      },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      {
        name: "Git",
        logo: `${DEVICONS}/git/git-original.svg`,
        color: "#f05032",
      },
      {
        name: "GitHub",
        logo: `${DEVICONS}/github/github-original.svg`,
        color: "#e2e8f0",
      },
      {
        name: "Swagger",
        logo: `${DEVICONS}/swagger/swagger-original.svg`,
        color: "#2EF527",
      },
    ],
  },
];
