import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const formatDate = (value?: string) => {
  if (!value) return null;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return dateFormatter.format(date);
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const typeColors = {
    frontend: "bg-blue-100 text-blue-800",
    backend: "bg-green-100 text-green-800",
    fullstack: "bg-purple-100 text-purple-800",
  };
  const formattedDate = formatDate(project.updatedAt);
  const hasStars = typeof project.stars === "number" && project.stars >= 0;

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

        {(formattedDate || hasStars) && (
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            {formattedDate ? (
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2h-1M7 5H6a2 2 0 00-2 2v12a2 2 0 002 2h1"
                  />
                </svg>
                {formattedDate}
              </span>
            ) : (
              <span />
            )}

            {hasStars && (
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {project.stars}
              </span>
            )}
          </div>
        )}

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
