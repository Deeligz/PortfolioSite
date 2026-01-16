import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../../blog/building-ai-applications/page.module.css';

export const metadata: Metadata = {
  title: 'Treasury Dashboard | Daniel Oyieke',
  description: 'Dashboard application for managing treasury operations and financial data. Built with React frontend and .NET API backend with MSSQL database.',
  keywords: ['Treasury Dashboard', 'React', '.NET', 'API', 'MSSQL', 'Financial Management', 'Dashboard'],
};

export default function TreasuryDashboardProject() {
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
          <span className={styles.category}>Financial Dashboard</span>
          <h1 className={styles.title}>Treasury Dashboard</h1>
        </header>

        <div className={styles.heroImage}>
          <img 
            src="/ChurchDashboard.png" 
            alt="Treasury Dashboard"
          />
        </div>

        <div className={styles.content}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <a 
              href="https://southpointsdatresury.org/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.liveButton}
            >
              View Live Dashboard
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <h2>Project Overview</h2>
          <p>
            The Treasury Dashboard is a comprehensive church financial management application designed to provide
            real-time insights into church treasury operations. Built with a modern React
            frontend and a robust .NET API backend, this dashboard enables the church to efficiently
            track, analyze, and manage their financial resources. The application leverages MSSQL database
            for reliable data storage and retrieval, ensuring data integrity and performance for critical
            financial operations.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>.NET</span>
            <span className={styles.tag}>API</span>
            <span className={styles.tag}>MSSQL</span>
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

