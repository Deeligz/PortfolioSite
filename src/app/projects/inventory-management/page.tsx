import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../../blog/building-ai-applications/page.module.css';

export const metadata: Metadata = {
  title: 'Stock Management System | Daniel Oyieke',
  description: 'Enterprise mobile application for real-time stock tracking and management. Built for warehouse operations with offline capabilities, barcode scanning, and seamless data synchronization.',
  keywords: ['Stock Management', 'Mobile Application', 'React Native', 'Enterprise Software', 'Warehouse Management'],
};

export default function InventoryManagementProject() {
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
          <span className={styles.category}>Enterprise Web App</span>
          <h1 className={styles.title}>Stock Management System</h1>
        </header>

        <div className={styles.heroImage}>
          <img
            src="/inventory.jpg"
            alt="Warehouse inventory management"
          />
        </div>

        <div className={styles.content}>
          <h2>Project Overview</h2>
          <p>
            Our team was assigned to develop a comprehensive stock management system to address critical
            challenges in retail operations, specifically helping stores maintain accurate inventory records
            and minimize product wastage. I led the technical implementation of this solution, architecting
            a robust system using React for the frontend interface, coupled with a .NET API backend and Azure
            SQL Database for reliable data management. This system empowers store associates to efficiently
            track stock levels, identify expiring products, and make informed decisions to reduce waste and
            optimize inventory turnover, ultimately contributing to millions of dollars in waste reduction
            savings for the company.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>.NET API</span>
            <span className={styles.tag}>MsSQL</span>
            <span className={styles.tag}>Azure</span>
            <span className={styles.tag}>Azure DevOps</span>
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

