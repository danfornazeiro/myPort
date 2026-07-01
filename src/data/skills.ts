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
    title: "Linguagens & Backend",
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
        name: "Python (Básico)",
        logo: `${DEVICONS}/python/python-original.svg`,
        color: "#3776ab",
      },
      {
        name: "SQL (MySQL/PostgreSQL)",
        logo: `${DEVICONS}/azuresqldatabase/azuresqldatabase-original.svg`,
        color: "#cc2927",
      },
    ],
  },
  {
    title: "Frameworks & Frontend",
    skills: [
      {
        name: "Spring Boot",
        logo: `${DEVICONS}/spring/spring-original.svg`,
        color: "#6db33f",
      },
      {
        name: "Node.js",
        logo: `${DEVICONS}/nodejs/nodejs-original.svg`,
        color: "#3c873a",
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
      {
        name: "Angular",
        logo: `${DEVICONS}/angularjs/angularjs-original.svg`,
        color: "#dd0031",
      },
      {
        name: "HTML",
        logo: `${DEVICONS}/html5/html5-original.svg`,
        color: "#e34f26",
      },
      {
        name: "CSS",
        logo: `${DEVICONS}/css3/css3-original.svg`,
        color: "#1572b6",
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
        name: "JPA/Hibernate",
        logo: `${DEVICONS}/hibernate/hibernate-original.svg`,
        color: "#bcae79",
      },
      {
        name: "SQL",
        logo: `${DEVICONS}/azuresqldatabase/azuresqldatabase-original.svg`,
        color: "#cc2927",
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
        name: "Postman",
        logo: `${DEVICONS}/postman/postman-original.svg`,
        color: "#ff6c37",
      },
      {
        name: "Figma",
        logo: `${DEVICONS}/figma/figma-original.svg`,
        color: "#f24e1e",
      },
      {
        name: "Trello",
        logo: `${DEVICONS}/trello/trello-original.svg`,
        color: "#0052cc",
      },
      {
        name: "Pacote Office",
        logo: `${DEVICONS}/microsoftoffice/microsoftoffice-original.svg`,
        color: "#f25022",
      },
    ],
  },
];
