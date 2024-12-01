import { ApiEndpoint } from '../components/ApiEndpoint';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <ApiEndpoint
          method="GET"
          endpoint="/api/v1/projects"
          description="Fetch all my projects"
          response={`{
  "status": 200,
  "statusText": "OK",
  "data": {
    "count": ${projects.length},
    "projects": ${JSON.stringify(projects, null, 2)}
  }
}`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}