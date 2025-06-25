# Ocellus Biotech Platform

## Overview

Ocellus Biotech is a web application for a company that provides AI-powered biomanufacturing intelligence through digital twin technology. The platform serves as a marketing landing page showcasing their cellular analysis technology for bioprocess optimization.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Styling**: Tailwind CSS with custom brand color variables
- **UI Components**: Comprehensive shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js 20
- **Database**: PostgreSQL with Drizzle ORM for schema management
- **Data Access**: Storage abstraction layer with in-memory implementation
- **Build System**: ESBuild for production bundling
- **Development**: Hot module replacement via Vite integration

### Key Components

#### Frontend Structure
- **Landing Page**: Single-page application with sections for hero, problem, solution, technology, benefits, and contact
- **Component Library**: Modular UI components following design system patterns
- **Form Validation**: Contact form with comprehensive validation using Zod schemas
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

#### Backend Structure
- **API Routes**: RESTful endpoints prefixed with `/api`
- **Storage Layer**: Interface-based design supporting multiple storage implementations
- **User Management**: Basic user schema with authentication preparation
- **Development Tools**: Request logging and error handling middleware

#### Database Schema
- **Users Table**: ID, username, and password fields for future authentication
- **Migrations**: Drizzle-kit managed database migrations
- **Type Safety**: Generated TypeScript types from database schema

## Data Flow

1. **Client Requests**: Browser requests routed through Vite dev server or Express static serving
2. **API Communication**: Frontend uses TanStack Query for API calls with automatic error handling
3. **Form Submission**: Contact forms validated client-side before submission
4. **Database Operations**: Storage interface abstracts database operations for flexibility

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives with shadcn/ui styling
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Validation**: Zod for runtime type checking
- **Styling**: Tailwind CSS with PostCSS processing

### Development Tools
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Development**: TSX for TypeScript execution

### Replit Integration
- **Cartographer**: Replit's development environment integration
- **Runtime Error Modal**: Development error overlay
- **PostgreSQL Module**: Replit-provided database service

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code as ES modules
- **Environment**: Production mode uses pre-built assets

### Development Environment
- **Hot Reloading**: Vite middleware integrated with Express server
- **Database**: PostgreSQL 16 module provided by Replit
- **Port Configuration**: Server runs on port 5000 with external port 80

### Replit Configuration
- **Autoscale Deployment**: Configured for automatic scaling
- **Module Dependencies**: Node.js 20, web server, and PostgreSQL
- **Build Process**: NPM scripts for development and production modes

## Changelog

```
Changelog:
- June 25, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```