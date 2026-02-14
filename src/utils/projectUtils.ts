import { Project, ProjectStatus } from '@/types/project';

export type SortOption = 'name' | 'startDate' | 'endDate' | 'status' | 'none';

export const filterProjects = (
  projects: Project[],
  searchTerm: string,
  selectedStatuses: ProjectStatus[]
): Project[] => {
  return projects.filter((project) => {
    // Search filter
    const matchesSearch =
      searchTerm === '' ||
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.clientName.toLowerCase().includes(searchTerm.toLowerCase());

    // Status filter
    const matchesStatus =
      selectedStatuses.length === 0 || selectedStatuses.includes(project.status);

    return matchesSearch && matchesStatus;
  });
};

export const sortProjects = (projects: Project[], sortBy: SortOption): Project[] => {
  if (sortBy === 'none') return projects;

  const sorted = [...projects];

  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => 
        a.projectName.localeCompare(b.projectName)
      );
    
    case 'startDate':
      return sorted.sort((a, b) => 
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );
    
    case 'endDate':
      return sorted.sort((a, b) => 
        new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
      );
    
    case 'status':
      const statusOrder: Record<ProjectStatus, number> = {
        'Active': 1,
        'On Hold': 2,
        'Completed': 3,
      };
      return sorted.sort((a, b) => 
        statusOrder[a.status] - statusOrder[b.status]
      );
    
    default:
      return sorted;
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatCurrency = (amount?: number): string => {
  if (amount === undefined) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount);
};
