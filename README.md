# Project Dashboard

A clean, functional project management dashboard built with Next.js and TypeScript.

## Live Demo
https://vini4013.github.io/project-dashboard/

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



## Assumptions Made

1. **Data Source**: Projects are hardcoded in a TypeScript file. In a real application, this would come from an API.

2. **Date Format**: Dates are stored as ISO strings (YYYY-MM-DD) and displayed in US format (e.g., "Jan 15, 2024").

3. **Description& Budget Fields**: Added as the extra fields.  Can be optional (some projects may not have budget assigned yet and/or empty description).

4. **Status Values**: Limited to exactly three values as specified: "Active", "On Hold", "Completed".

5. **Routing**: Using client-side modal for details instead of separate routes. This keeps state management simpler and provides better UX for quick views.

## Trade-offs

### Architecture Decisions

**✅ Chose:React.js over Next.js**
- Reasoning: Simpler, more straightforward setup for a client-side only application
- Easier to deploy to GitHub Pages without server configuration
- Trade-off: Less structure out of the box, but appropriate for this scope

**✅ Chose: Modal for detail view instead of separate route**
- Reasoning: Simpler state management, better UX for quick views, less code
- Trade-off: No deep-linking to specific projects (acceptable for internal tool)

**✅ Chose: Client-side filtering over URL params**
- Reasoning: Simpler implementation, faster response, no page reloads
- Trade-off: Filters don't persist on page refresh (acceptable for this scope)

**✅ Chose: CSS over CSS-in-JS or Tailwind**
- Reasoning: Plain CSS is simpler, no extra dependencies, easier to maintain
- Trade-off: No automatic scoping 

**✅ Chose: Avoided premature optimization**
- No virtualization or pagination added (<20 items is manageable)


## Future Enhancements

If this were a real project, I would consider:

1. **Pagination** or virtualization for large datasets
2. **URL-based routing** for detail view with deep-linking
3. **Persist filters** in localStorage or URL params
4. **Accessibility improvements** (ARIA labels, keyboard navigation)



## Technology Stack

- **Library**: React 18
- **Language**: TypeScript
- **Styling**: Plain CSS
- **State Management**: React Hooks (useState, useMemo)
- **No external UI libraries** (as required)
