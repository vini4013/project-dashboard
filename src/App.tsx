import { useState, useMemo } from 'react';
import { mockProjects } from '@/data/mockProjects';
import { ProjectStatus } from '@/types/project';
import { filterProjects, sortProjects, SortOption } from '@/utils/projectUtils';
import SearchBar from '@/components/SearchBar';
import StatusFilter from '@/components/StatusFilter';
import SortDropdown from '@/components/SortDropdown';
import ProjectList from '@/components/ProjectList';
import ProjectDetail from '@/components/ProjectDetail';
import './styles.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<ProjectStatus[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    const filtered = filterProjects(mockProjects, searchTerm, selectedStatuses);
    return sortProjects(filtered, sortBy);
  }, [searchTerm, selectedStatuses, sortBy]);

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
        <div className="filter-row">
          <StatusFilter
            selectedStatuses={selectedStatuses}
            onChange={setSelectedStatuses}
          />
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>
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
