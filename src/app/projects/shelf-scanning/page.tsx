import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../../blog/building-ai-applications/page.module.css';

export const metadata: Metadata = {
  title: 'Shelf Scanning Application | Daniel Oyieke',
  description: 'Mobile solution for retail shelf auditing and compliance checks. Features computer vision integration, automated reporting, and real-time analytics for store operations teams.',
  keywords: ['Computer Vision', 'Shelf Scanning', 'Retail Technology', 'AI', 'Azure', 'Mobile App'],
};

export default function ShelfScanningProject() {
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
          <span className={styles.category}>AI & Computer Vision</span>
          <h1 className={styles.title}>Shelf Scanning Application</h1>
          <div className={styles.meta}>
            <span className={styles.author}>Daniel Oyieke</span>
            <span className={styles.separator}>•</span>
            <span className={styles.readTime}>Southeastern Grocers</span>
          </div>
        </header>

        <div className={styles.heroImage}>
          <img 
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&h=600&fit=crop" 
            alt="Retail store shelves"
          />
        </div>

        <div className={styles.content}>
          <h2>Project Overview</h2>
          <p>
            The Shelf Scanning Application is an AI-powered mobile solution designed to transform how retail 
            stores conduct shelf audits and compliance checks. By leveraging computer vision technology, the 
            app automates the traditionally manual and time-consuming process of verifying shelf conditions, 
            product placement, and pricing accuracy.
          </p>

          <h2>The Challenge</h2>
          <p>
            Retail shelf compliance is a critical but labor-intensive process. Store teams spend countless 
            hours manually checking shelves for out-of-stock items, misplaced products, and pricing errors. 
            This manual approach is not only time-consuming but also prone to human error and inconsistency.
          </p>
          <p>
            The challenge was to create a solution that could accurately analyze shelf conditions in real-time, 
            provide actionable insights, and integrate seamlessly with existing store workflows.
          </p>

          <h2>Key Features</h2>
          <h3>Computer Vision Integration</h3>
          <p>
            At the heart of the application is a sophisticated computer vision system powered by Azure Cognitive 
            Services. The system can identify products, detect gaps on shelves, verify price tags, and flag 
            compliance issues—all from a simple photo capture.
          </p>

          <h3>Automated Reporting</h3>
          <p>
            The application automatically generates detailed compliance reports, highlighting issues that need 
            attention. Reports include visual annotations, severity rankings, and suggested actions, making it 
            easy for store teams to prioritize their work.
          </p>

          <h3>Real-Time Analytics</h3>
          <p>
            A comprehensive analytics dashboard provides store managers with real-time visibility into shelf 
            compliance across all aisles and departments. Historical trends help identify recurring issues 
            and measure improvement over time.
          </p>

          <h3>Intuitive Mobile Interface</h3>
          <p>
            The mobile app was designed with store associates in mind. A simple, intuitive interface allows 
            users to quickly scan shelves, review results, and take action—all without extensive training.
          </p>

          <h2>Technical Implementation</h2>
          <p>
            The application was built using React Native for the mobile frontend, with Azure Cognitive Services 
            providing the computer vision capabilities. The backend, built with Node.js, handles image processing, 
            data storage, and analytics computations.
          </p>
          <p>
            Special attention was paid to optimizing image capture and processing for mobile devices. The app 
            guides users to capture optimal images and provides immediate feedback on image quality before 
            processing.
          </p>

          <h2>AI & Machine Learning</h2>
          <p>
            The computer vision models were trained to recognize thousands of products specific to grocery retail. 
            The system continuously improves through feedback loops, learning from corrections made by store teams 
            to increase accuracy over time.
          </p>

          <h2>Results & Impact</h2>
          <p>
            The Shelf Scanning Application has dramatically reduced the time required for shelf audits while 
            improving accuracy. Store teams can now complete comprehensive shelf checks in a fraction of the 
            time, allowing them to focus on customer service and other high-value activities.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>React Native</span>
            <span className={styles.tag}>Computer Vision</span>
            <span className={styles.tag}>Azure Cognitive Services</span>
            <span className={styles.tag}>Node.js</span>
            <span className={styles.tag}>AI/ML</span>
            <span className={styles.tag}>Real-Time Analytics</span>
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

