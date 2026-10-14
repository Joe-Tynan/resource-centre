# Resource Centre

A responsive resource centre built with React and TypeScript. It allows users to browse resources by category, search by title or tags, sort resources, and view individual resource details.

## Features

- Browse resources grouped by category by default.
- Search resources by title or tags.
- Sort resources alphabetically by category or by upload date, newest first.
- View individual resource details, including description, tags, category, duration, and upload date.
- Responsive card layout for different screen sizes.
- Accessible form labels and semantic HTML.

## Tech Stack

- React
- TypeScript
- React Router
- CSS Modules
- Vite
- Vitest & React Testing Library

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Run tests

```bash
npm run test
```

### Build for production

```bash
npm run build
```

## Implementation Notes

- Resource data is stored in mock data, making it easy to replace with an API in the future.
- Filtering, sorting, and grouping are handled by separate utility functions to keep the UI components focused on presentation.
- The default view groups resources by category. Selecting a sort option displays all matching resources in a single grid.
- React Router provides individual resource URLs and supports browser navigation.
- CSS Modules scope component styles and reduce the risk of naming conflicts.

## Testing

Tests cover the core resource utilities, including filtering by title and tags, category and date sorting, and resource grouping.

Component tests cover key user interactions and resource detail behaviour.

## Assumptions and Future Improvements

- Resource data is currently mocked rather than retrieved from an API.
- Future improvements could include API integration, pagination for larger collections, and additional filtering options.
