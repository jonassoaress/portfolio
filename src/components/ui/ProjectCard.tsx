import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const typeColors = {
    frontend: "bg-blue-100 text-blue-800",
    backend: "bg-green-100 text-green-800",
    fullstack: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-indigo-600">
        {/* Placeholder - substituir por <Image /> do Next */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type Badge */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
            typeColors[project.type]
          }`}
        >
          {project.type.toUpperCase()}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center text-sm font-medium text-gray-700"
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
            >
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
