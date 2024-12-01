import { FC } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

export const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <Github size={20} />
          <span>Code</span>
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ExternalLink size={20} />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
};