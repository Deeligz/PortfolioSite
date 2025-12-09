import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../../blog/building-ai-applications/page.module.css';

export const metadata: Metadata = {
  title: 'Portfolio Site | Daniel Oyieke',
  description: 'A personal portfolio website built from scratch with React and Next.js, showcasing projects and technical expertise. Features a minimalist design philosophy with plans for a blog powered by headless WordPress.',
  keywords: ['Portfolio', 'React', 'Next.js', 'Web Development', 'WordPress', 'Headless CMS'],
};

export default function PortfolioSiteProject() {
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
          <span className={styles.category}>Personal Project</span>
          <h1 className={styles.title}>Portfolio Site</h1>
        </header>

        <div className={styles.heroImage}>
          <img
            src="/Portfolio.png"
            alt="Portfolio website design"
          />
        </div>

        <div className={styles.content}>
          <h2>Project Overview</h2>
          <p>
            I built this portfolio website from scratch using React and Next.js to showcase my projects,
            skills, and professional experience. The site was designed with a focus on simplicity and user
            experience, embodying a minimalist design philosophy that prioritizes clean layouts, modern
            aesthetics, and intuitive navigation. Every element was thoughtfully crafted to create a polished,
            professional presentation while maintaining fast performance and responsive design across all devices.
          </p>
          <p>
            The architecture leverages Next.js for server-side rendering and optimal performance, while the
            blog section is planned to utilize WordPress as a headless CMS. This approach combines the power
            of modern frontend frameworks with the familiar content management experience of WordPress, allowing
            for easy content updates while maintaining complete control over the design and user experience.
            The minimalist aesthetic ensures content remains the focal point, with subtle interactions and
            a carefully curated color palette that reflects professionalism and technical precision.
          </p>
          <p>
            A standout feature is the custom-built live chat integration that connects directly to Discord.
            When visitors use the chat feature, I receive instant notifications on my phone via Discord,
            enabling real-time conversations with potential clients and collaborators. This innovative solution
            provides a seamless communication experience without requiring third-party chat services, demonstrating
            practical problem-solving and API integration skills while maintaining the site&apos;s clean,
            professional appearance.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>Next.js</span>
            <span className={styles.tag}>TypeScript</span>
            <span className={styles.tag}>CSS Modules</span>
            <span className={styles.tag}>WordPress</span>
            <span className={styles.tag}>Headless CMS</span>
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
