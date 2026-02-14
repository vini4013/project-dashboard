export type ProjectStatus = 'Active' | 'On Hold' | 'Completed';

export interface Project {
  id: string;
  projectName: string;
  clientName: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  budget?: number; // Extra field: project budget in USD
  description?: string;
}
