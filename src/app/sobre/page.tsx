import { skills } from "@/data/skills";

export default function AboutPage() {
  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Sobre Mim</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Conheça um pouco mais sobre minha jornada como desenvolvedor
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Bio */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Minha História
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Olá! Sou um desenvolvedor Full Stack apaixonado por criar
                  soluções web elegantes e eficientes. Minha jornada na
                  programação começou há X anos, e desde então tenho me dedicado
                  a aprender e aplicar as melhores práticas de desenvolvimento.
                </p>
                <p>
                  Atualmente, trabalho com tecnologias modernas como React,
                  Next.js, Node.js e TypeScript, sempre buscando entregar
                  produtos de alta qualidade que proporcionem a melhor
                  experiência possível para os usuários.
                </p>
                <p>
                  Além de desenvolver, adoro compartilhar conhecimento e
                  contribuir com a comunidade open source. Acredito que a
                  colaboração e o aprendizado contínuo são essenciais para o
                  crescimento profissional.
                </p>
              </div>
            </div>

            {/* Skills Detailed */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Habilidades Técnicas
              </h2>

              {/* Frontend */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-3xl">⚡</span>
                  Frontend Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Especializado em criar interfaces modernas, responsivas e
                  acessíveis
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skillsByCategory.frontend.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-3xl">🔧</span>
                  Backend Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Construindo APIs robustas, escaláveis e seguras
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skillsByCategory.backend.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-3xl">🛠️</span>
                  Ferramentas & DevOps
                </h3>
                <p className="text-gray-600 mb-6">
                  Experiência com ferramentas modernas de desenvolvimento e
                  deploy
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skillsByCategory.tools.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Interesses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Aprendizado Contínuo
                    </h4>
                    <p className="text-gray-600">
                      Sempre explorando novas tecnologias e melhores práticas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Open Source
                    </h4>
                    <p className="text-gray-600">
                      Contribuindo com a comunidade de desenvolvedores
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      UI/UX Design
                    </h4>
                    <p className="text-gray-600">
                      Criando interfaces intuitivas e agradáveis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Performance
                    </h4>
                    <p className="text-gray-600">
                      Otimizando aplicações para máxima eficiência
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Gostou do que viu?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Vamos conversar sobre como posso ajudar no seu próximo projeto
          </p>
          <a
            href="/contato"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Entre em Contato
          </a>
        </div>
      </section>
    </main>
  );
}
