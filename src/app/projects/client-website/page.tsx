import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../../blog/building-ai-applications/page.module.css';

export const metadata: Metadata = {
  title: 'Client Website | Daniel Oyieke',
  description: 'A custom static website built for a client to showcase their services and brand identity. Modern, responsive design with optimized performance and SEO.',
  keywords: ['Static Website', 'React', 'Next.js', 'CSS', 'Web Development', 'Client Project'],
};

export default function ClientWebsiteProject() {
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
          <span className={styles.category}>Client Project</span>
          <h1 className={styles.title}>Look Within U</h1>
        </header>

        <div className={styles.heroImage}>
          <img
            src="/LookWithin.png"
            alt="Client website showcase"
          />
        </div>

        <div className={styles.content}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <a
              href="https://lookwithinu.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveButton}
            >
              View Live Site
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <h2>Project Overview</h2>
          <p>
            This custom website was built for a client to establish their online presence and
            showcase their services. The site utilizes Next.js on the frontend with WordPress as a
            headless CMS for content management, creating a professional digital storefront that
            effectively communicates the client&apos;s value proposition. This architecture combines
            modern frontend performance with the familiar content editing experience of WordPress.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>Next.js</span>
            <span className={styles.tag}>WordPress</span>
            <span className={styles.tag}>CSS</span>
            <span className={styles.tag}>Headless CMS</span>
            <span className={styles.tag}>SEO</span>
            <span className={styles.tag}>Responsive Design</span>
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
