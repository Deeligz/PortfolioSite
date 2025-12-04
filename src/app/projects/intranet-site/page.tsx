import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../../blog/building-ai-applications/page.module.css';

export const metadata: Metadata = {
  title: 'Intranet Site | Daniel Oyieke',
  description: 'Internal company portal providing employees with centralized access to resources, announcements, tools, and documentation. Features role-based access control and seamless integration with existing systems.',
  keywords: ['Intranet', 'Enterprise Portal', 'React', 'TypeScript', '.NET', 'SQL Server', 'Internal Tools'],
};

export default function IntranetSiteProject() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/#projects" className={styles.backLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Projects
        </Link>
      </nav>

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.category}>Enterprise Web Application</span>
          <h1 className={styles.title}>Intranet Site</h1>
          <div className={styles.meta}>
            <span className={styles.author}>Daniel Oyieke</span>
            <span className={styles.separator}>•</span>
            <span className={styles.readTime}>Southeastern Grocers</span>
          </div>
        </header>

        <div className={styles.heroImage}>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
            alt="Corporate intranet dashboard"
          />
        </div>

        <div className={styles.content}>
          <h2>Project Overview</h2>
          <p>
            The Intranet Site is a comprehensive internal portal designed to serve as the central hub for 
            company-wide communication, resources, and tools. This enterprise web application streamlines 
            how employees access information, collaborate with teams, and stay informed about company 
            updates and initiatives.
          </p>

          <h2>The Challenge</h2>
          <p>
            Large organizations often struggle with information silos, scattered resources, and inefficient 
            internal communication. Employees waste valuable time searching for documents, policies, and 
            tools across multiple disconnected systems. This fragmentation leads to reduced productivity 
            and inconsistent access to critical information.
          </p>
          <p>
            The goal was to create a unified platform that would consolidate all internal resources, 
            provide personalized experiences based on employee roles, and integrate seamlessly with 
            existing enterprise systems.
          </p>

          <h2>Key Features</h2>
          <h3>Centralized Resource Hub</h3>
          <p>
            The intranet serves as a single source of truth for all company resources. Employees can 
            quickly find policies, procedures, forms, and documentation through an intuitive search 
            interface and organized category structure.
          </p>

          <h3>Role-Based Access Control</h3>
          <p>
            A sophisticated permissions system ensures employees see only the content relevant to their 
            role and department. Administrators can easily manage access levels and create custom 
            permission groups for different teams and functions.
          </p>

          <h3>Company Announcements & News</h3>
          <p>
            A dynamic news feed keeps employees informed about company updates, events, and important 
            announcements. Content managers can schedule posts, target specific audiences, and track 
            engagement metrics.
          </p>

          <h3>Integrated Tools & Applications</h3>
          <p>
            The portal provides quick access to frequently used tools and applications, including links 
            to internal systems, productivity tools, and department-specific applications. Single sign-on 
            integration ensures a seamless user experience.
          </p>

          <h3>Employee Directory</h3>
          <p>
            A comprehensive employee directory makes it easy to find colleagues, view organizational 
            structure, and access contact information. Integration with HR systems ensures data is 
            always current and accurate.
          </p>

          <h2>Technical Implementation</h2>
          <p>
            The frontend was built using React with TypeScript, ensuring type safety and maintainability 
            across a large codebase. The component-based architecture allows for easy updates and 
            consistent UI patterns throughout the application.
          </p>
          <p>
            The backend leverages .NET for robust API development, with SQL Server providing reliable 
            data storage and complex query capabilities. The architecture supports high availability 
            and scales to accommodate thousands of concurrent users.
          </p>

          <h2>Security & Compliance</h2>
          <p>
            Security was a top priority throughout development. The application implements enterprise-grade 
            authentication through integration with the company&apos;s identity provider, ensuring secure 
            access while maintaining user convenience. All sensitive data is encrypted, and comprehensive 
            audit logging tracks user activities for compliance purposes.
          </p>

          <h2>Results & Impact</h2>
          <p>
            The Intranet Site has transformed how employees interact with company resources and each other. 
            Key improvements include reduced time spent searching for information, improved internal 
            communication, and higher employee engagement with company news and updates. The platform 
            has become an essential daily tool for employees across all departments.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>TypeScript</span>
            <span className={styles.tag}>.NET</span>
            <span className={styles.tag}>SQL Server</span>
            <span className={styles.tag}>Enterprise Security</span>
            <span className={styles.tag}>SSO Integration</span>
          </div>
        </div>
      </article>

      <footer className={styles.footer}>
        <Link href="/#projects" className={styles.footerLink}>
          ← Back to all projects
        </Link>
      </footer>
    </div>
  );
}

