export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  type: "frontend" | "backend" | "fullstack";
  featured?: boolean;
  stars?: number;
  updatedAt?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level?: "beginner" | "intermediate" | "advanced";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
