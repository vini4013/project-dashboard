import { useState, useMemo } from 'react';
import { mockProjects } from '@/data/mockProjects';
import { ProjectStatus } from '@/types/project';
import { filterProjects } from '@/utils/projectUtils';
import SearchBar from '@/components/SearchBar';
import StatusFilter from '@/components/StatusFilter';
import ProjectList from '@/components/ProjectList';
import ProjectDetail from '@/components/ProjectDetail';
import './styles.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<ProjectStatus[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return filterProjects(mockProjects, searchTerm, selectedStatuses);
  }, [searchTerm, selectedStatuses]);

  const selectedProject = selectedProjectId
    ? mockProjects.find((p) => p.id === selectedProjectId)
    : null;

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseDetail = () => {
    setSelectedProjectId(null);
  };

  return (
    <main className="container">
      <header className="header">
        <h1>Project Dashboard</h1>
        <p className="subtitle">
          Manage and track all your projects in one place
        </p>
      </header>

      <div className="filters">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <StatusFilter
          selectedStatuses={selectedStatuses}
          onChange={setSelectedStatuses}
        />
      </div>

      <div className="results-info">
        <span>
          Showing {filteredProjects.length} of {mockProjects.length} projects
        </span>
      </div>

      <ProjectList
        projects={filteredProjects}
        onProjectClick={handleProjectClick}
      />

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </main>
  );
}
