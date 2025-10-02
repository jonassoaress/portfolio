import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { getSkillsByCategory } from "@/data/skills";
import Link from "next/link";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const frontendSkills = getSkillsByCategory("frontend");
  const backendSkills = getSkillsByCategory("backend");

  return (
    <main>
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Alguns dos meus trabalhos mais recentes e relevantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projetos"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Habilidades & Tecnologias
            </h2>
            <p className="text-lg text-gray-600">
              Ferramentas e linguagens que domino
            </p>
          </div>

          {/* Frontend */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-blue-600"></span> Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-green-600"></span> Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium hover:bg-green-100 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias e
            oportunidades
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </main>
  );
}
