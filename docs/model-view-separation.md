# Model-View Separation

## Import Direction Rules

```
Views may import view-model types.
Views must NOT import repositories, Payload config, or collections.

ViewModels may import domain types.
ViewModels must NOT query Payload.

Services may import repositories and domain types.
Services must NOT import React views.

Repositories may import Payload server utilities and domain types.
Repositories must NOT import React.

Models must NOT import application views.
```

## Layer Responsibilities

### Model Layer (`src/collections/`, `src/globals/`, `src/domain/`)
- Payload collection and global definitions
- Generated Payload types
- Domain types, enums, validation rules
- Collection hooks (data integrity)
- Access-control rules

### Repository Layer (`src/repositories/`)
- Data access only — Payload Local API calls
- Tenant-scoped queries
- "Not found" handled explicitly (return null)

### Service Layer (`src/services/`)
- Business logic and orchestration
- May call repositories and other services
- Independently testable
- Must not render React

### ViewModel Layer (`src/view-models/`)
- Transform domain data → presentation-ready
- Resolve localized values
- Apply safe defaults
- Normalize images, links
- Remove CMS-specific shapes
- Never query database

### View Layer (`src/views/`)
- React components (primitives, components, sections, templates)
- Receives typed ViewModel props
- Unaware of Payload
- Server Components by default
