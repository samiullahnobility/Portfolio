import type {
  ContactInfo,
  ExperienceItem,
  NavLink,
  PersonalInfo,
  ProcessStep,
  Project,
  Service,
  SkillGroup,
  SocialLink,
  Stat,
  TrustItem,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Samiullah",
  brand: "Samiullah.dev",
  role: "Full-Stack .NET, Angular, React and Next.js Developer",
  headline: "Building Reliable Software for Real Business Problems",
  summary:
    "I build APIs, dashboards, workflow systems, integrations, and modern database-driven web applications for practical business needs.",
  location: "Pakistan - available for remote work",
  availability: "Available for freelance and full-time opportunities",
  preferredWork: "Freelance projects, contract work, and professional software roles",
  expertise: "ASP.NET Core APIs, Angular dashboards, React/Next.js apps, SQL systems, integrations, and business automation",
  email: "your-email@example.com",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:your-email@example.com", icon: "email" },
  { label: "GitHub", href: "https://github.com/samiullahnobility/Portfolio", icon: "github" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Upwork", href: "#", icon: "external" },
  { label: "Fiverr", href: "#", icon: "external" },
];

export const heroStats: Stat[] = [
  { label: "Years Experience", value: "3+", helper: "Practical development" },
  { label: "Technologies", value: "15+", helper: ".NET, Angular, React, SQL" },
  { label: "Portfolio Projects", value: "5+", helper: "Business-focused systems" },
  { label: "Business Domains", value: "5", helper: "Healthcare, booking, analytics" },
];

export const trustItems: TrustItem[] = [
  { title: "Full-stack development", icon: "layers" },
  { title: "Business workflow automation", icon: "workflow" },
  { title: "REST API development", icon: "api" },
  { title: "Responsive web applications", icon: "monitor" },
  { title: "Database design", icon: "database" },
  { title: "Production-focused code", icon: "shield" },
];

export const aboutHighlights = [
  "Clean architecture",
  "Maintainable code",
  "Database-first and code-first development",
  "API integration",
  "Responsive frontend development",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description: "API-first backend systems with authentication, business logic, and background processing.",
    icon: "server",
    skills: ["ASP.NET Core", "C#", "Web API", "Entity Framework Core", "Identity", "JWT Authentication", "Background services", "Clean architecture"],
  },
  {
    title: "Frontend",
    description: "Responsive interfaces for dashboards, portals, forms, and admin workflows.",
    icon: "monitor",
    skills: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Blazor", "Responsive UI"],
  },
  {
    title: "Databases",
    description: "Structured data modeling, import logic, reporting queries, and performance-minded SQL work.",
    icon: "database",
    skills: ["SQL Server", "PostgreSQL", "Supabase", "Stored procedures", "Query optimization", "EF Core migrations"],
  },
  {
    title: "Tools and Practices",
    description: "Practical delivery habits for debugging, testing, documenting, and shipping software.",
    icon: "tool",
    skills: ["Git", "GitHub", "Swagger", "Postman", "Playwright", "Docker", "CI/CD", "Agile development"],
  },
];

export const projectFilters = ["All", "Full Stack", "Backend", "Frontend", "SaaS", "Business Systems"];

export const projects: Project[] = [
  {
    title: "DwellFix",
    slug: "dwellfix",
    category: "Maintenance Management",
    filters: ["Full Stack", "SaaS", "Business Systems"],
    problem: "Property and maintenance teams need a cleaner way to track requests, assign work, and follow operational status.",
    solution: "A modern maintenance management concept with role-based workflows, request tracking, and dashboard-ready operational views.",
    description: "A business system concept for managing maintenance requests, teams, statuses, and internal service workflows.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "SQL Server"],
    features: ["Request tracking", "Role-based workflows", "Operational dashboard", "Responsive portal UI"],
    detailsUrl: "#contact",
    sourceUrl: "#",
    liveUrl: "#",
    featured: true,
    preview: { label: "Maintenance", metric: "Workflow", accent: "cyan" },
  },
  {
    title: "CareDesk Pro",
    slug: "caredesk-pro",
    category: "Healthcare Admin",
    filters: ["Full Stack", "SaaS", "Business Systems"],
    problem: "Healthcare/admin teams need reliable tools for patient, claim, charge, and reporting workflows.",
    solution: "A practical admin platform approach focused on structured data, secure APIs, dashboards, and clean operational screens.",
    description: "Healthcare/admin platform concept for claims, charges, reporting, and internal team workflows.",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "EF Core", "Stored Procedures"],
    features: ["Admin dashboard", "Claim workflow", "Reporting views", "Database validation"],
    detailsUrl: "#contact",
    sourceUrl: "#",
    liveUrl: "#",
    featured: true,
    preview: { label: "Healthcare", metric: "Admin", accent: "blue" },
  },
  {
    title: "Slotra Appointment Booking MVP",
    slug: "slotra",
    category: "Booking Platform",
    filters: ["Full Stack", "SaaS", "Business Systems"],
    problem: "Service businesses need admin, staff, and customer workflows for appointment booking and availability.",
    solution: "A multi-app booking MVP with authentication, roles, service management, availability, and appointment tracking.",
    description: "A multi-app appointment booking platform with admin, customer, and staff workflows.",
    techStack: ["ASP.NET Core Web API", "Angular", "Next.js", "Blazor", "SQL Server"],
    features: ["JWT authentication", "Admin/staff/customer roles", "Service management", "Staff availability", "Customer booking flow"],
    detailsUrl: "#contact",
    sourceUrl: "#",
    liveUrl: "#",
    featured: true,
    preview: { label: "Booking", metric: "MVP", accent: "teal" },
  },
  {
    title: "RingCentral Call Analytics System",
    slug: "ringcentral-call-analytics",
    category: "Analytics Integration",
    filters: ["Backend", "Business Systems"],
    problem: "Call data needs to be pulled from RingCentral, stored reliably, and prepared for reporting dashboards.",
    solution: "A worker service that syncs call logs and analytics into SQL Server with retry handling, raw logging, and stored procedures.",
    description: "A backend service that pulls RingCentral call log and analytics data, stores it in SQL Server, and provides reporting-ready data.",
    techStack: [".NET Worker Service", "SQL Server", "RingCentral API", "Stored Procedures"],
    features: ["Scheduled API sync", "Call log import", "Derived metrics", "Retry handling", "Raw API logging", "Reporting stored procedures"],
    detailsUrl: "#contact",
    sourceUrl: "#",
    liveUrl: "#",
    featured: false,
    preview: { label: "Analytics", metric: "API Sync", accent: "cyan" },
  },
  {
    title: "AR Claims Management System",
    slug: "ar-claims-management",
    category: "Healthcare Workflow",
    filters: ["Full Stack", "Backend", "Business Systems"],
    problem: "Claims and charges need import matching, duplicate handling, denial updates, financial formatting, and SQL validation.",
    solution: "A healthcare/admin system with synchronized UI and backend logic for claim/charge management and data integrity.",
    description: "A healthcare/admin system for managing claims, charges, patient balances, denial reasons, claim imports, duplicate handling, and soft deletion.",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "EF Core", "Stored Procedures"],
    features: ["Claim and charge management", "Import matching", "Soft delete handling", "Denial reason updates", "Duplicate handling"],
    detailsUrl: "#contact",
    sourceUrl: "#",
    liveUrl: "#",
    featured: false,
    preview: { label: "Claims", metric: "SQL", accent: "blue" },
  },
  {
    title: "Freelance Business Web Applications",
    slug: "freelance-business-apps",
    category: "Client Systems",
    filters: ["Full Stack", "Frontend", "Business Systems"],
    problem: "Small businesses often need dashboards, admin panels, integrations, and workflows tailored to their operation.",
    solution: "Reusable frontend and backend patterns for client portals, admin screens, APIs, forms, and automation workflows.",
    description: "Custom business web application planning and development for freelance clients.",
    techStack: ["Next.js", "React", "Node.js", "ASP.NET Core", "SQL Server", "Tailwind CSS"],
    features: ["Client-focused pages", "Admin dashboard UI", "API integration", "Form handling", "Responsive layouts"],
    detailsUrl: "#contact",
    sourceUrl: "#",
    liveUrl: "#",
    featured: false,
    preview: { label: "Business", metric: "Apps", accent: "teal" },
  },
];

export const services: Service[] = [
  {
    title: "Full-stack web application development",
    icon: "layers",
    description: "Plan and build complete business web applications from database and API to polished frontend workflows.",
    deliverables: ["Responsive app UI", "Backend APIs", "Database integration"],
  },
  {
    title: "ASP.NET Core API development",
    icon: "api",
    description: "Secure, maintainable REST APIs with authentication, EF Core, validation, and clean business logic.",
    deliverables: ["REST endpoints", "JWT authentication", "Swagger documentation"],
  },
  {
    title: "Angular and React frontend development",
    icon: "monitor",
    description: "Professional dashboards, portals, tables, forms, filters, and business screens that work across devices.",
    deliverables: ["Dashboard UI", "Forms and tables", "Responsive layouts"],
  },
  {
    title: "Business workflow automation",
    icon: "workflow",
    description: "Turn repeated manual processes into reliable web workflows, scheduled jobs, and data sync tools.",
    deliverables: ["Automation flows", "Worker services", "Operational dashboards"],
  },
  {
    title: "Database design and optimization",
    icon: "database",
    description: "Design tables, stored procedures, imports, reporting queries, and practical performance improvements.",
    deliverables: ["Schema design", "Stored procedures", "Query fixes"],
  },
  {
    title: "Existing application modernization",
    icon: "refresh",
    description: "Improve messy codebases, upgrade UI patterns, fix backend issues, and stabilize business features.",
    deliverables: ["Code cleanup", "Bug fixes", "Feature improvements"],
  },
  {
    title: "API integration",
    icon: "plug",
    description: "Connect external APIs, sync data, add logging, handle retries, and prepare data for reporting.",
    deliverables: ["External API setup", "Sync jobs", "API logging"],
  },
  {
    title: "SaaS MVP development",
    icon: "rocket",
    description: "Build a practical MVP with the right core workflows, roles, dashboards, and deployment-ready structure.",
    deliverables: ["MVP planning", "Core workflows", "Deployment support"],
  },
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Discovery", description: "Understand the business problem, users, existing system, data flow, and success criteria." },
  { step: "02", title: "Requirements and planning", description: "Define features, edge cases, screens, API contracts, database needs, and delivery priorities." },
  { step: "03", title: "UI and architecture", description: "Design the frontend flow, backend structure, database approach, and integration strategy." },
  { step: "04", title: "Development", description: "Build the feature or system with clean components, reliable APIs, and practical database logic." },
  { step: "05", title: "Testing", description: "Check responsive layouts, form states, API behavior, SQL logic, validation, and edge cases." },
  { step: "06", title: "Deployment and support", description: "Prepare deployment configuration, explain the solution, and support future improvements." },
];

export const experience: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "Business web applications and freelance-ready systems",
    dateRange: "Recent work",
    responsibilities: [
      "Build API-driven dashboards, admin panels, booking flows, reporting screens, and database-backed business tools.",
      "Debug existing frontend, backend, SQL, API, deployment, and data handling issues.",
      "Create practical integrations, worker services, import systems, and reporting-ready data structures.",
    ],
    technologies: ["ASP.NET Core", "Angular", "React", "Next.js", "TypeScript", "SQL Server", "PostgreSQL", "Node.js"],
    achievements: ["Delivered practical MVP workflows", "Improved database-heavy business logic", "Created reusable frontend components"],
  },
];

export const contactInfo: ContactInfo = {
  heading: "Let us discuss your next business system",
  description:
    "Tell me about your API, dashboard, booking platform, SQL workflow, integration, or existing application issue. This form is a demo UI, so please use email or social links for real contact until it is connected to a backend.",
  note: "Demo form only. No message is sent yet.",
  location: personalInfo.location,
  availability: personalInfo.availability,
  projectTypes: ["ASP.NET Core API", "Angular Dashboard", "React / Next.js Website", "Node.js API", "SQL Server Work", "API Integration", "Bug Fixing", "Full Business System"],
  budgetRanges: ["Not sure yet", "Under $500", "$500 - $1,500", "$1,500 - $5,000", "$5,000+"],
};
