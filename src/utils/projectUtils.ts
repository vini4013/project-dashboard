import { Project, ProjectStatus } from '@/types/project';

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
