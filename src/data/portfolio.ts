import type { ContactLink, NavLink, ProcessStep, Project, Service, SkillGroup, Stat } from "@/types/portfolio";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights = ["Backend APIs", "Admin Dashboards", "SQL Systems", "Business Automation"];

export const heroStats: Stat[] = [
  { label: "APIs Built", value: "REST" },
  { label: "SQL Procedures", value: "SPs" },
  { label: "Integrations", value: "API" },
  { label: "Projects Delivered", value: "MVP" },
];

export const aboutCards = [
  {
    title: "Backend Strong",
    description: "Comfortable designing APIs, auth flows, worker services, and backend logic that supports real workflows.",
  },
  {
    title: "Database Focused",
    description: "Experienced with SQL Server tables, stored procedures, imports, reporting queries, and data consistency issues.",
  },
  {
    title: "Business Problem Solver",
    description: "I focus on the actual operational problem behind the screen, then build practical software around it.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    skills: ["ASP.NET Core", "C#", "Entity Framework Core", "JWT Authentication", "REST APIs", "Worker Services", "Node.js", "Express.js"],
  },
  {
    title: "Frontend",
    skills: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "Bootstrap", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Database",
    skills: ["SQL Server", "Stored Procedures", "Query Optimization", "Data Imports", "Duplicate Handling", "Reporting Queries"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Swagger", "Postman", "Visual Studio", "VS Code", "npm", "SQL Server Management Studio"],
  },
  {
    title: "Integrations",
    skills: ["RingCentral API", "External APIs", "Webhooks", "API Sync Jobs", "API Logging", "Deployment Configuration"],
  },
];

export const projects: Project[] = [
  {
    title: "AR Claims & Charges Management System",
    description: "A healthcare/admin system for managing claims, charges, patient balances, denial reasons, claim imports, duplicate handling, and soft deletion.",
    techStack: ["ASP.NET Core", "Angular", "SQL Server", "EF Core", "Stored Procedures"],
    features: [
      "Claim and charge management",
      "Import matching by claim number, patient name, DOB, DOS, and claim total",
      "Soft delete handling",
      "Denial reason updates",
      "Numeric formatting for large financial values",
      "SQL validation and duplicate handling",
      "UI and backend synchronization",
    ],
    detailsUrl: "#contact",
    sourceUrl: "#contact",
  },
  {
    title: "RingCentral Call Analytics System",
    description: "A backend service that pulls RingCentral call log and analytics data, stores it in SQL Server, and provides reporting-ready data for dashboards.",
    techStack: [".NET Worker Service", "SQL Server", "RingCentral API", "Stored Procedures"],
    features: [
      "Scheduled API sync",
      "Call log import",
      "Derived call metrics",
      "Retry handling for API limits",
      "Raw API logging",
      "Reporting stored procedures",
      "Worker service configuration",
    ],
    detailsUrl: "#contact",
    sourceUrl: "#contact",
  },
  {
    title: "Slotra Appointment Booking MVP",
    description: "A multi-app appointment booking platform with admin, customer, and staff workflows.",
    techStack: ["ASP.NET Core Web API", "Angular", "Next.js", "Blazor", "SQL Server"],
    features: [
      "User registration and login",
      "JWT authentication",
      "Admin, staff, and customer roles",
      "Service management",
      "Staff availability",
      "Customer booking flow",
      "Appointment tracking",
      "Notification worker planning",
    ],
    detailsUrl: "#contact",
    sourceUrl: "#contact",
  },
  {
    title: "API Deployment & Database Migration Practice",
    description: "Practical deployment setup for .NET APIs and database migration from SQL Server to PostgreSQL for low-cost hosting environments.",
    techStack: [".NET API", "SQL Server", "PostgreSQL", "Render", "ngrok"],
    features: [
      "Local API exposure using ngrok",
      "Free/low-cost deployment planning",
      "SQL Server to PostgreSQL migration research",
      "Environment-based configuration",
      "API hosting experiments",
    ],
    detailsUrl: "#contact",
    sourceUrl: "#contact",
  },
  {
    title: "Freelance Business Web Applications",
    description: "Custom business web application planning and development for freelance clients, including dashboards, admin panels, APIs, and automation workflows.",
    techStack: ["Next.js", "React", "Node.js", "ASP.NET Core", "SQL Server", "Tailwind CSS"],
    features: [
      "Client-focused landing pages",
      "Admin dashboard UI",
      "API integration",
      "Form handling",
      "Responsive layouts",
      "Clean reusable frontend components",
    ],
    detailsUrl: "#contact",
    sourceUrl: "#contact",
  },
];

export const services: Service[] = [
  { title: "ASP.NET Core API Development", description: "Secure, scalable REST APIs using ASP.NET Core, EF Core, JWT, and clean architecture patterns." },
  { title: "Angular Dashboard Development", description: "Professional admin dashboards, tables, forms, filters, reports, and business workflows using Angular." },
  { title: "React & Next.js Web App Development", description: "Modern responsive web applications, landing pages, dashboards, and client portals using React and Next.js." },
  { title: "Node.js API Development", description: "Lightweight backend APIs, integrations, and automation services using Node.js and Express." },
  { title: "SQL Server Database Design", description: "Database tables, stored procedures, import logic, query fixes, reporting queries, and performance improvements." },
  { title: "API Integration & Automation", description: "External API integration, scheduled sync jobs, data import/export, logging, and automation workflows." },
  { title: "Bug Fixing & Code Debugging", description: "Fixing frontend, backend, SQL, API, deployment, and data handling issues in existing applications." },
  { title: "Admin Panels & Business Systems", description: "Custom internal systems for managing users, services, appointments, claims, reports, and operational data." },
];

export const whyWorkWithMe = [
  "I understand real database-heavy systems.",
  "I can work on existing messy codebases.",
  "I can debug frontend, backend, and SQL issues.",
  "I focus on practical working solutions.",
  "I can support MVPs and long-term systems.",
  "I build systems that solve business problems, not just screens.",
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand Requirements",
    description: "I review your business flow, existing code, database structure, and exact problem.",
  },
  {
    step: "02",
    title: "Plan the Solution",
    description: "I define the API, UI, database, and integration approach before implementation.",
  },
  {
    step: "03",
    title: "Build & Test",
    description: "I develop the feature, test edge cases, fix bugs, and make sure the system works properly.",
  },
  {
    step: "04",
    title: "Deliver & Support",
    description: "I provide clean delivery, explanation, and support for improvements or future changes.",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:your-email@example.com" },
  { label: "Upwork", href: "#" },
  { label: "Fiverr", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export const projectTypes = [
  "ASP.NET Core API",
  "Angular Dashboard",
  "React / Next.js Website",
  "Node.js API",
  "SQL Server Work",
  "API Integration",
  "Bug Fixing",
  "Full Business System",
];
