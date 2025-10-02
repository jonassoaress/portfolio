import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "advanced" },
  { name: "Next.js", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "HTML/CSS", category: "frontend", level: "advanced" },
  { name: "JavaScript", category: "frontend", level: "advanced" },

  // Backend
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "Express", category: "backend", level: "advanced" },
  { name: "PostgreSQL", category: "backend", level: "intermediate" },
  { name: "MongoDB", category: "backend", level: "intermediate" },
  { name: "Prisma", category: "backend", level: "intermediate" },
  { name: "REST APIs", category: "backend", level: "advanced" },

  // Tools & Others
  { name: "Git", category: "tools", level: "advanced" },
  { name: "Docker", category: "tools", level: "intermediate" },
  { name: "Vercel", category: "tools", level: "advanced" },
  { name: "AWS", category: "tools", level: "intermediate" },
];

export const getSkillsByCategory = (category: Skill["category"]) => {
  return skills.filter((skill) => skill.category === category);
};
