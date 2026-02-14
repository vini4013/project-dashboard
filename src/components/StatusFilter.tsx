import { ProjectStatus } from '@/types/project';

interface StatusFilterProps {
  selectedStatuses: ProjectStatus[];
  onChange: (statuses: ProjectStatus[]) => void;
}

const STATUS_OPTIONS: ProjectStatus[] = ['Active', 'On Hold', 'Completed'];

export default function StatusFilter({ selectedStatuses, onChange }: StatusFilterProps) {
  const handleStatusToggle = (status: ProjectStatus) => {
    if (selectedStatuses.includes(status)) {
      onChange(selectedStatuses.filter((s) => s !== status));
    } else {
      onChange([...selectedStatuses, status]);
    }
  };

  return (
    <div className="status-filter">
      <label className="filter-label">Status:</label>
      <div className="status-options">
        {STATUS_OPTIONS.map((status) => (
          <label key={status} className="checkbox-label">
            <input
              type="checkbox"
              checked={selectedStatuses.includes(status)}
              onChange={() => handleStatusToggle(status)}
              className="checkbox"
            />
            <span>{status}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
