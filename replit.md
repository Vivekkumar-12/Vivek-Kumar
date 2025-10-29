# Vivek Kumar - Portfolio Website

## Overview
A professional MERN stack portfolio website showcasing Vivek Kumar's resume, skills, projects, education, training, certifications, and achievements. Built with React, Express.js, Node.js, and styled with Tailwind CSS and Shadcn UI components.

## Project Status
✅ **Production Ready** - All features implemented and tested (October 29, 2025)

## Recent Changes (October 29, 2025)
- Initial portfolio website implementation with all sections
- Complete responsive design for mobile, tablet, and desktop
- Navigation with smooth scrolling to all sections
- About section with professional summary and key highlights
- Skills section with 5 categorized skill sets
- Projects showcase featuring 5 projects (Job Application Tracker as featured)
- Education timeline with 3 educational qualifications
- Training & Certifications section with detailed course information
- Achievements section highlighting hackathon participation
- Contact section with keyboard-accessible contact cards
- Backend API endpoints for portfolio data and static file serving
- Comprehensive end-to-end testing completed successfully

## Architecture

### Frontend (React + JavaScript)
- **Router**: Wouter for SPA routing
- **State Management**: TanStack Query for data fetching
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: Shadcn UI library
- **Pages**: 
  - Home (`/`) - Main portfolio page with all sections

### Backend (Express.js + Node.js)
- **API Routes**:
  - `GET /api/portfolio` - Returns complete portfolio data
  - `GET /api/resume` - Downloads PDF resume
  - `GET /api/profile-photo` - Serves profile photo
- **Data Storage**: In-memory (portfolioData.ts)
- **Static Assets**: Profile photo and resume PDF in attached_assets/

### Key Features
1. **Navigation**: Fixed header with smooth scroll to all sections
2. **Hero Section**: Profile photo, personal info, quick stats, CTAs, social links
3. **About Section**: Professional summary and 4 key highlight cards
4. **Skills Section**: 5 categorized skill cards with technology badges
5. **Projects Section**: 5 project cards with descriptions and tech stacks
6. **Education Section**: Timeline view of 3 educational qualifications
7. **Training & Certifications**: Split view of professional training and 7 certifications
8. **Achievements**: Hackathon participation with ranking details
9. **Contact Section**: 4 contact methods with keyboard accessibility
10. **Responsive Design**: Mobile-first with hamburger menu
11. **Accessibility**: Semantic HTML, keyboard navigation, focus states

## Technology Stack
- **Frontend**: React (JavaScript), Wouter, TanStack Query, Tailwind CSS, Shadcn UI
- **Backend**: Node.js, Express.js
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure
```
client/
  src/
    components/
      Navigation.tsx - Fixed header with smooth scroll navigation
      HeroSection.tsx - Profile photo and introduction
      AboutSection.tsx - Professional summary and highlights
      SkillsSection.tsx - Categorized skills display
      ProjectsSection.tsx - Project showcase with featured indicator
      EducationSection.tsx - Education timeline
      TrainingCertificatesSection.tsx - Training and certifications
      AchievementsSection.tsx - Achievements showcase
      ContactSection.tsx - Contact methods and footer
    pages/
      Home.tsx - Main portfolio page
      not-found.tsx - 404 page
    App.tsx - Application root with routing
    index.css - Global styles with design system
  index.html - HTML template with SEO meta tags
server/
  data/
    portfolioData.ts - Complete portfolio data structure
  routes.ts - API endpoints
  storage.ts - Storage interface (not used for portfolio)
  index.ts - Express server setup
shared/
  schema.ts - TypeScript schemas and types for portfolio data
attached_assets/
  profile photo_1761752240811.jpeg - Profile photo
  Vivek_kumar__1761752233424.pdf - Resume PDF
```

## Design System
- **Colors**: Professional blue primary (#3B82F6), neutral grays, proper contrast ratios
- **Typography**: Inter for sans-serif, JetBrains Mono for code/tech tags
- **Spacing**: Consistent 4px grid system
- **Components**: Shadcn UI with custom theme configuration
- **Animations**: Subtle fade-in, hover elevations, smooth scrolling
- **Responsive**: Mobile-first with breakpoints at 768px (md) and 1024px (lg)

## Running the Application
1. Development server runs on port 5000
2. Navigate to the Replit webview to see the portfolio
3. All data is served from `/api/portfolio` endpoint
4. Profile photo and resume are accessible via dedicated API routes

## User Preferences
- Pure JavaScript implementation (no TypeScript in React components)
- MERN stack architecture
- Modern, professional design
- Responsive across all devices
- Keyboard accessible
- SEO optimized with meta tags

## Future Enhancement Ideas
- Add project filtering by technology
- Implement contact form with email integration
- Add dark/light theme toggle
- Create a blog section
- Add animated skill proficiency bars
- Integrate analytics

## Notes
- The portfolio is fully static and doesn't require a database
- All data is managed in server/data/portfolioData.ts
- Profile photo and resume are served as static assets
- Smooth scrolling is implemented via CSS scroll-behavior
- All sections are keyboard accessible with proper focus states
