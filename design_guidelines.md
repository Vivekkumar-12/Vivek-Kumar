# Design Guidelines: Vivek Kumar's Portfolio Website

## Design Approach
**Reference-Based Approach** drawing inspiration from modern developer portfolios (Linear, GitHub, Vercel) with focus on clean typography, generous whitespace, and content clarity. The design emphasizes professionalism while maintaining a contemporary, developer-friendly aesthetic.

## Core Design Principles
- **Content-First**: Clear hierarchy that guides visitors through achievements, skills, and projects
- **Professional Impact**: Polished presentation suitable for recruiters and employers
- **Developer Identity**: Modern, tech-forward design that reflects software development expertise
- **Scannable Information**: Easy-to-digest sections with clear visual separation

---

## Typography System

**Primary Font**: Inter (Google Fonts) - Modern, highly legible
**Secondary Font**: JetBrains Mono (Google Fonts) - For code snippets and technical details

**Hierarchy**:
- Hero Name: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Headings: text-4xl md:text-5xl, font-bold
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Project/Item Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Details/Dates: text-sm md:text-base, font-medium
- Code/Tech Stack: text-sm, font-mono (JetBrains Mono)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section padding: py-16 to py-24 (mobile to desktop)
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-7xl with px-6 md:px-8

**Grid System**:
- Skills grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Projects grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Certificates: grid-cols-1 md:grid-cols-2

---

## Page Structure & Sections

### 1. Hero Section (100vh)
- Full-viewport impact section
- **Large circular profile photo** (w-48 h-48 md:w-64 h-64) positioned left or centered with subtle shadow
- Name, title "Full-Stack Developer", tagline
- Quick stats banner: "7.45 CGPA | 5+ Projects | 7+ Certifications"
- Primary CTA: "View Projects" and "Download Resume" buttons with backdrop-blur-md when over images
- Social links row: LinkedIn, GitHub, Email icons (from Heroicons)

### 2. About Section
- Two-column layout (md:grid-cols-2)
- Left: Brief professional summary (3-4 sentences)
- Right: Key highlights (Education, Location, Availability)
- Use horizontal lines or subtle dividers

### 3. Skills Section
- Four-column grid for skill categories
- Each category card: Icon, Category name, List of skills as tags/pills
- Categories: Languages, Frameworks, Tools/Platforms, Databases, Soft Skills
- Skill pills: Inline-flex with rounded-full styling

### 4. Projects Showcase (Primary Focus)
- Three-column grid on desktop, single column mobile
- Each project card:
  - Project title (prominent)
  - Date range (subtle, top-right)
  - 3-4 bullet points of description
  - Tech stack as pill badges at bottom
  - Hover effect: Subtle lift with shadow increase
- Featured project (Job Application Tracker) gets larger card or special treatment

### 5. Training & Certifications
- Two-column grid combining both sections
- Training card: CipherSchools with detailed description
- Certificate items: Institution name, course title, date
- Use card-based layout with consistent height

### 6. Achievements Section
- Spotlight card for Code-A-Hunt hackathon
- Large metric display: "15th / 200 teams"
- Duration badge, organizer info
- Room for future achievements

### 7. Education Timeline
- Vertical timeline design with connecting line
- Three education items with degree, institution, dates, CGPA/percentage
- Icons for each education level (graduation cap variations)

### 8. Contact Section
- Centered layout with large heading "Let's Connect"
- Contact methods in horizontal cards: Email, Mobile, LinkedIn, GitHub
- Each with icon, label, and clickable link
- Footer with copyright and "Built with MERN Stack" badge

---

## Component Library

**Navigation Bar**:
- Fixed top position with backdrop-blur
- Logo/Name on left, navigation links right
- Smooth scroll to sections
- Mobile: Hamburger menu icon

**Card Components**:
- Rounded corners: rounded-xl
- Padding: p-6 to p-8
- Shadow: shadow-lg with hover:shadow-xl transition
- Border: Optional subtle border

**Buttons**:
- Primary: px-8 py-3, rounded-full, font-semibold
- Secondary: Similar with outline variant
- Icon buttons: p-3, rounded-full
- Backdrop blur for buttons on images: backdrop-blur-md

**Badges/Pills**:
- Tech stack: px-3 py-1, rounded-full, text-sm
- Dates/Status: px-2 py-1, rounded-md, text-xs

**Icons**: Heroicons (outline style)
- Section icons, social media, contact methods
- Navigation icons
- Skill category icons

---

## Images

**Profile Photo**:
- Location: Hero section, prominently displayed
- Size: Large circular image (w-48 h-48 md:w-64 h-64)
- Treatment: Subtle shadow, possible subtle border
- Position: Left side of hero or centered above name

**No other images required** - Content-focused portfolio relying on typography and layout

---

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layouts
- Stacked navigation in menu
- Full-width cards
- Reduced font sizes and spacing
- Profile photo centered, smaller

**Tablet (768px - 1024px)**:
- Two-column grids where appropriate
- Balanced spacing

**Desktop (> 1024px)**:
- Three/four-column grids
- Maximum spacing and typography sizes
- Side-by-side layouts for content + visual

---

## Interactions & Animations

**Minimal, Professional Animations**:
- Smooth scroll behavior for navigation
- Hover states: Subtle scale (scale-105) and shadow changes
- Card hover: transform transition-all duration-300
- Link hover: Underline animation
- No distracting scroll-triggered animations
- Page load: Subtle fade-in for hero content only

---

## Accessibility

- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA labels for icon-only buttons
- Sufficient contrast ratios for all text
- Keyboard navigation support
- Focus visible states for all interactive elements
- Alt text for profile photo

---

## Technical Considerations

- Single-page application with smooth scroll
- Lazy loading for sections below fold
- Optimized profile photo delivery
- Mobile-first responsive approach
- SEO meta tags for portfolio visibility