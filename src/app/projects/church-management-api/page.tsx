import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../../blog/building-ai-applications/page.module.css';

export const metadata: Metadata = {
  title: 'Church Management System API | Daniel Oyieke',
  description: 'RESTful API for managing church operations, members, events, and administrative tasks. Built with .NET and C# for scalability and reliability.',
  keywords: ['Church Management', 'REST API', '.NET', 'C#', 'Backend Development', 'Church Software'],
};

export default function ChurchManagementAPIProject() {
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
          <span className={styles.category}>RESTful API</span>
          <h1 className={styles.title}>Church Management System API</h1>
        </header>

        <div className={styles.heroImage}>
          <img 
            src="/ChurchAPI.png" 
            alt="Church Management System API"
          />
        </div>

        <div className={styles.content}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <a 
              href="https://churchapi-prod.azurewebsites.net/swagger/index.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.liveButton}
            >
              View Live API Documentation
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <h2>Project Overview</h2>
          <p>
            The Church Management System API is a comprehensive RESTful backend service designed for 
            Southpoint Adventist Church to support church operations, member management, event coordination, 
            and administrative tasks. Built with .NET and C#, this API provides a robust foundation for 
            church management applications, enabling seamless integration with frontend clients and 
            third-party services. The API uses Azure SQL for reliable and scalable data storage.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>.NET</span>
            <span className={styles.tag}>C#</span>
            <span className={styles.tag}>REST API</span>
            <span className={styles.tag}>Azure SQL</span>
            <span className={styles.tag}>Entity Framework</span>
            <span className={styles.tag}>Backend Development</span>
            <span className={styles.tag}>API Design</span>
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

