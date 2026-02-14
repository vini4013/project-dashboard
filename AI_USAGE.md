# AI Usage Documentation

## Tools Used

**Primary Tool**: GitHub Copilot (Claude Sonnet 4.5)

## How AI Was Used

### 1. Initial Setup
- **What**: Project structure, package.json, TypeScript config, react.js setup
- **Why**: Standard boilerplate - no value in typing manually
- **Result**: Accepted with minor tweaks to dependencies- Removed next.js and vite

### 2. Mock Data Generation 
- **What**: Created 13 diverse project entries
- **Modified**: 
  - Added project #10 with intentionally long names to test overflow
  - Ensured variety in statuses and date ranges
  - Made some descriptions optional to test edge cases
- **Result**: Mostly accepted, enhanced edge case coverage manually

### 3. Component Structure 
- **What**: Initial component scaffolding
- **AI Generated**: 
  - Basic component templates
  - Props interfaces
  - Event handler patterns
- **Modified**:
  - Refactored StatusFilter from dropdown to multi-select checkboxes (better UX)
  - Changed ProjectDetail routing approach from separate page to modal

### 4. Filtering Logic 
- **What**: `filterProjects` utility function
- **AI Generated**: Core filtering logic with immutability
- **Verified**: 
  - Tested edge cases manually
  - Confirmed no data mutation
  - Validated case-insensitive search works correctly
- **Result**: Accepted as-is after verification

### 5. Styling (Mixed)
- **AI Generated**: Initial CSS structure and layout
- **Modified**:
  - Minor tweeks
  - trunicated project names spanning more than 2 lines.
- **Result**: Mostly accepted with minor tweeks

## What I Changed or Rejected

### ❌ Rejected: Next.js and Vite
- **Why Rejected**: Seemed like an overkill for this scope
- **Replaced With**: Plain React


### ❌ Rejected: Separate Route for Detail View
- **Why Rejected**: Overkill for this scope, modal is simpler and faster
- **Replaced With**: Modal overlay with backdrop

### ❌ Rejected: Tailwind CSS
- **AI Initially Suggested**: Setting up Tailwind for styling
- **Why Rejected**: Assignment says "no UI libraries that abstract logic away"
- **Replaced With**: Plain CSS (cleaner for this scope)

### ⚠️ Modified: Filter UI Pattern
- **AI Generated**: Single-select dropdown for status
- **Why Changed**: Multi-select checkboxes are more powerful for filtering
- **Result**: Better UX, all filters visible at once


## What I Don't Fully Agree With

### 1. useMemo Usage
**AI Generated**: Memoized filtered results
**My Take**: Technically correct, but probably premature optimization for 10 items
**Why I Kept It**: Demonstrates understanding of performance considerations. Doesn't hurt, and would matter at scale.
