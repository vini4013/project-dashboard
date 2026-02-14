# Project Dashboard

A clean, functional project management dashboard built with Next.js and TypeScript.

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Features

### ✅ Project List View
- Displays all projects with key information: name, client, status, dates
- Clean card-based layout
- Responsive grid design

### ✅ Filtering System
- **Search**: Filter by project name or client name (case-insensitive)
- **Status Filter**: Multi-select checkboxes for Active, On Hold, Completed
- Filters work in combination
- Original data is never mutated
- Real-time filtering with results count

### ✅ Project Detail View
- Modal overlay shows full project information
- Includes extra field: **Budget** (in USD)
- Click outside modal or close button to dismiss
- Handles missing optional fields gracefully

### ✅ Edge Cases Handled
- Empty state when no projects exist
- "No results" state when filters return empty
- Long project names (text wrapping and truncation)
- Long client names
- Missing optional fields (description, budget)
- Responsive design for mobile devices

## Assumptions Made

1. **Data Source**: Projects are hardcoded in a TypeScript file. In a real application, this would come from an API.

2. **Date Format**: Dates are stored as ISO strings (YYYY-MM-DD) and displayed in US format (e.g., "Jan 15, 2024").

3. **Budget Field**: Added as the extra required field. Stored as a number representing USD. Can be optional (some projects may not have budget assigned yet).

4. **Status Values**: Limited to exactly three values as specified: "Active", "On Hold", "Completed".

5. **Routing**: Using client-side modal for details instead of separate routes. This keeps state management simpler and provides better UX for quick views.

6. **Browser Support**: Targeting modern browsers (last 2 versions). Using standard ES2020+ features.

## Trade-offs

### Architecture Decisions

**✅ Chose: Next.js over plain React**
- Reasoning: Better developer experience, built-in TypeScript support, and structure
- Trade-off: Slightly more setup than create-react-app, but worth it for clarity

**✅ Chose: Modal for detail view instead of separate route**
- Reasoning: Simpler state management, better UX for quick views, less code
- Trade-off: No deep-linking to specific projects (acceptable for internal tool)

**✅ Chose: Client-side filtering over URL params**
- Reasoning: Simpler implementation, faster response, no page reloads
- Trade-off: Filters don't persist on page refresh (acceptable for this scope)

**✅ Chose: CSS over CSS-in-JS or Tailwind**
- Reasoning: Plain CSS is simpler, no extra dependencies, easier to maintain
- Trade-off: No automatic scoping (but Next.js CSS modules could be added if needed)

### Code Structure

**✅ Functional components only** (as required)
- Using hooks (useState, useMemo) for state management
- Clean separation of concerns

**✅ Component boundaries**
- SearchBar: Isolated search input
- StatusFilter: Isolated multi-select logic
- ProjectCard: Reusable card component
- ProjectList: Container handling empty states
- ProjectDetail: Modal for detailed view

**✅ Utility functions**
- `filterProjects`: Pure function, immutable filtering
- `formatDate`, `formatCurrency`: Reusable formatters

### Performance Considerations

**✅ Used `useMemo` for filtered results**
- Only recalculates when search or status filters change
- Prevents unnecessary re-renders

**✅ Avoided premature optimization**
- No virtualization (10 items is manageable)
- Would add react-window for 100+ projects

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles
├── components/
│   ├── ProjectCard.tsx     # Individual project card
│   ├── ProjectDetail.tsx   # Detail modal
│   ├── ProjectList.tsx     # List container + empty state
│   ├── SearchBar.tsx       # Search input
│   └── StatusFilter.tsx    # Multi-select status filter
├── data/
│   └── mockProjects.ts     # Mock data (10 projects)
├── types/
│   └── project.ts          # TypeScript interfaces
└── utils/
    └── projectUtils.ts     # Filtering and formatting logic
```

## Testing Scenarios

### Manual Testing Checklist
- [x] All 10 projects display correctly
- [x] Search works for project names
- [x] Search works for client names
- [x] Search is case-insensitive
- [x] Status filter works (single selection)
- [x] Status filter works (multiple selections)
- [x] Combined search + status filtering works
- [x] Empty state shows when all projects filtered out
- [x] Clicking project opens detail modal
- [x] Detail modal shows all fields correctly
- [x] Modal closes on backdrop click
- [x] Modal closes on X button
- [x] Long names handle properly (see project #10)
- [x] Missing optional fields show gracefully
- [x] Responsive on mobile devices

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Plain CSS
- **State Management**: React Hooks (useState, useMemo)
- **No external UI libraries** (as required)

## Future Enhancements

If this were a real project, I would consider:

1. **Add unit tests** (Jest + React Testing Library)
2. **Add E2E tests** (Playwright)
3. **Pagination** or virtualization for large datasets
4. **URL-based routing** for detail view with deep-linking
5. **Persist filters** in localStorage or URL params
6. **Sort functionality** (by date, name, status)
7. **Export functionality** (CSV, PDF)
8. **API integration** with loading states and error handling
9. **Accessibility improvements** (ARIA labels, keyboard navigation)
10. **Dark mode** support

---

**Note**: This project prioritizes clarity, correctness, and clean architecture over visual polish, as per the assignment requirements.
