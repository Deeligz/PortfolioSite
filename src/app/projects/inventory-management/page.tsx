import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../../blog/building-ai-applications/page.module.css';

export const metadata: Metadata = {
  title: 'Inventory Management System | Daniel Oyieke',
  description: 'Enterprise mobile application for real-time inventory tracking and management. Built for warehouse operations with offline capabilities, barcode scanning, and seamless data synchronization.',
  keywords: ['Inventory Management', 'Mobile Application', 'React Native', 'Enterprise Software', 'Warehouse Management'],
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
          <span className={styles.category}>Enterprise Mobile App</span>
          <h1 className={styles.title}>Inventory Management System</h1>
          <div className={styles.meta}>
            <span className={styles.author}>Daniel Oyieke</span>
            <span className={styles.separator}>•</span>
            <span className={styles.readTime}>Southeastern Grocers</span>
          </div>
        </header>

        <div className={styles.heroImage}>
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop" 
            alt="Warehouse inventory management"
          />
        </div>

        <div className={styles.content}>
          <h2>Project Overview</h2>
          <p>
            The Inventory Management System is an enterprise-grade mobile application designed to revolutionize 
            how warehouse teams track, manage, and synchronize inventory data across multiple locations. Built 
            to handle the demanding requirements of large-scale retail operations, this application serves as 
            the backbone of inventory operations for store associates.
          </p>

          <h2>The Challenge</h2>
          <p>
            Warehouse operations often face significant challenges with inventory accuracy, real-time data 
            synchronization, and offline functionality. Traditional systems struggle to keep up with the 
            fast-paced environment of modern retail, leading to discrepancies, delayed updates, and 
            inefficient workflows.
          </p>
          <p>
            The goal was to create a solution that would work seamlessly across different devices, including 
            specialized hardware like Zebra devices, while maintaining data integrity even in areas with 
            limited connectivity.
          </p>

          <h2>Key Features</h2>
          <h3>Real-Time Inventory Tracking</h3>
          <p>
            The application provides instant visibility into inventory levels across all locations. Updates 
            are synchronized in real-time when connected, ensuring all team members have access to the most 
            current data.
          </p>

          <h3>Offline Capabilities</h3>
          <p>
            Understanding that warehouse environments don&apos;t always have reliable connectivity, the app 
            features robust offline functionality. All operations can be performed offline and automatically 
            sync when connectivity is restored, with intelligent conflict resolution.
          </p>

          <h3>Barcode Scanning Integration</h3>
          <p>
            Integrated barcode scanning capabilities allow for rapid item identification and data entry. 
            The system supports multiple barcode formats and works with both device cameras and dedicated 
            scanning hardware.
          </p>

          <h3>Seamless Data Synchronization</h3>
          <p>
            A sophisticated sync engine ensures data consistency across all devices and the central database. 
            The system handles concurrent updates gracefully and provides clear feedback on sync status.
          </p>

          <h2>Technical Implementation</h2>
          <p>
            The application was built using React Native to ensure cross-platform compatibility while 
            maintaining native performance. SQLite provides local data storage for offline functionality, 
            while a robust REST API handles communication with backend services.
          </p>
          <p>
            Special attention was paid to optimizing performance on Zebra devices, which are commonly used 
            in warehouse environments. This included careful memory management, efficient rendering, and 
            integration with device-specific features like hardware barcode scanners.
          </p>

          <h2>Results & Impact</h2>
          <p>
            The Inventory Management System has significantly improved operational efficiency for warehouse 
            teams. Key improvements include reduced inventory discrepancies, faster stock counts, and 
            improved data accuracy across all locations.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>React Native</span>
            <span className={styles.tag}>TypeScript</span>
            <span className={styles.tag}>SQLite</span>
            <span className={styles.tag}>REST API</span>
            <span className={styles.tag}>Zebra Devices</span>
            <span className={styles.tag}>Offline-First</span>
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

