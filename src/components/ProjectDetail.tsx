import { Project } from '@/types/project';
import { formatDate, formatCurrency } from '@/utils/projectUtils';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{project.projectName}</h2>
          <button onClick={onClose} className="close-button" aria-label="Close">
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className={`status-badge ${getStatusClass(project.status)}`}>
              {project.status}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Client:</span>
            <span className="detail-value">{project.clientName}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Start Date:</span>
            <span className="detail-value">{formatDate(project.startDate)}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">End Date:</span>
            <span className="detail-value">{formatDate(project.endDate)}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Budget:</span>
            <span className={`detail-value ${project.budget ? '' : 'text-muted'}`}>{project.budget ? formatCurrency(project.budget) : 'No budget available'}</span>
          </div>

            <div className="detail-row description">
              <span className="detail-label">Description:</span> 
              <p className={`detail-value ${project.description ? '' : 'text-muted'}`}>{project.description ? project.description : 'No description available'}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
