import { SortOption } from '@/utils/projectUtils';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort" className="filter-label">
        Sort by:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="sort-select"
      >
        <option value="name">Project Name</option>
        <option value="startDate">Start Date</option>
        <option value="endDate">End Date</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
}
