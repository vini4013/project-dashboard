import { Project } from '@/types/project';
import { formatDate } from '@/utils/projectUtils';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'On Hold':
        return 'status-onhold';
      case 'Completed':
        return 'status-completed';
      default:
        return '';
    }
  };

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-header">
        <h3 className="project-name" >
          {project.projectName}
        </h3>
        <span className={`status-badge ${getStatusClass(project.status)}`}>
          {project.status}
        </span>
      </div>
      <div className="project-card-body">
        <div className="project-info">
          <span className="info-label">Client:</span>
          <span className="info-value">{project.clientName}</span>
        </div>
        <div className="project-info">
          <span className="info-label">Start Date:</span>
          <span className="info-value">{formatDate(project.startDate)}</span>
        </div>
        <div className="project-info">
          <span className="info-label">End Date:</span>
          <span className="info-value">{formatDate(project.endDate)}</span>
        </div>
      </div>
    </div>
  );
}
