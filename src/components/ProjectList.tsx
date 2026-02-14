import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
  onProjectClick: (projectId: string) => void;
}

export default function ProjectList({ projects, onProjectClick }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p>No projects found</p>
        <p className="empty-state-subtitle">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project.id)}
        />
      ))}
    </div>
  );
}
