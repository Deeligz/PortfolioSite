'use client';

import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import ResumeModal from "@/components/ResumeModal/ResumeModal";

/* ============================================================
   🔒 COMING SOON TOGGLE
   Set to 'false' to reveal sections
   Set to 'true' to blur them with "Coming Soon" overlay
   ============================================================ */
const PROJECTS_COMING_SOON = false;
const BLOG_COMING_SOON = true;

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Handle scroll on page load and hash changes
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;

      if (hash) {
        // Scroll to the section specified by the hash
        const sectionId = hash.replace('#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Listen for hash changes (for client-side navigation)
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'blog'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Check if we're at the bottom of the page - if so, activate blog
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('blog');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      {/* Left Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.header}>
            <h1 className={styles.name}>Daniel Oyieke</h1>
            <h2 className={styles.title}>Software Engineer</h2>
            <p className={styles.tagline}>
              I build enterprise applications that deliver measurable business impact.
            </p>
          </div>

          <nav className={styles.nav}>
            <ul>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={activeSection === 'about' ? styles.active : ''}
                >
                  <span className={styles.navLine}></span>
                  <span className={styles.navText}>ABOUT</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className={activeSection === 'experience' ? styles.active : ''}
                >
                  <span className={styles.navLine}></span>
                  <span className={styles.navText}>EXPERIENCE</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className={activeSection === 'projects' ? styles.active : ''}
                >
                  <span className={styles.navLine}></span>
                  <span className={styles.navText}>PROJECTS</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className={activeSection === 'blog' ? styles.active : ''}
                >
                  <span className={styles.navLine}></span>
                  <span className={styles.navText}>BLOG</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className={styles.social}>
            <a href="https://github.com/Deeligz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/daniel-oyieke-b73249207/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </aside>

      {/* Right Content Area */}
      <main className={styles.main}>
        <div className={styles.content}>
          {/* About Section */}
          <section id="about" className={styles.section}>
            <p className={styles.bioText}>
              As a software engineer, I specialize in building scalable web, mobile, and desktop applications that solve real business challenges. I focus on creating solutions that are not only technically sound but also drive tangible results for organizations and their users.
            </p>
            <p className={styles.bioText}>
              My expertise spans the full application development lifecycle, from design to implementation to deployment and optimization. I strive to build and deliver software that teams can rely on that is <span className={styles.highlight}>clean, minimal</span> and easy to use.
            </p>
            <p className={styles.bioText}>
              Throughout my career, I&apos;ve worked with diverse teams and technologies, building everything from <span className={styles.highlight}>customer-facing web applications</span> to <span className={styles.highlight}>internal enterprise mobile applications</span> that run on specialized hardware like <span className={styles.highlight}>Zebra devices</span>. I thrive in environments where collaboration drives excellence, and where every line of code contributes to a larger vision.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className={styles.section}>
            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <span className={styles.experienceDate}>2023 — PRESENT</span>
              </div>
              <div className={styles.experienceContent}>
                <h3 className={styles.experienceTitle}>
                  Software Engineer 2 · Southeastern Grocers
                </h3>
                <ul className={styles.experienceDescription}>
                <li>Responsible for building a Stock management  Web  application using React and C# .NET api and MSSQL Database</li>
                  <li>Responsible for building Web AI Chatbot application using React Python and azure ai foundry.</li>     
                  <li>Develop, test, and maintain cross-platform mobile and desktop applications using C# and .NET MAUI.</li>
                  <li>Build and maintain efficient back-end services and APIs using .NET technologies.</li>
                  <li>Debug and resolve issues in C# .NET MAUI applications, ensuring optimal performance across platforms.</li>
                  <li>Upgraded and maintained internal company portal built on WordPress platform.</li>
                  <li>Participate in Agile/Scrum processes using Azure DevOps, including sprint planning and standups, to ensure timely delivery of features.</li>
                </ul>
                <div className={styles.techTags}>
                  <span className={styles.tag}>Azure AI Foundry</span>
                  <span className={styles.tag}>Azure DevOps</span>
                  <span className={styles.tag}>C#</span>
                  <span className={styles.tag}>.NET MAUI</span>
                  <span className={styles.tag}>.NET</span>
                  <span className={styles.tag}>REST APIs</span>
                  <span className={styles.tag}>WordPress</span>
                  <span className={styles.tag}>Agile/Scrum</span>
                </div>
              </div>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <span className={styles.experienceDate}>2022 — 2023</span>
              </div>
              <div className={styles.experienceContent}>
                <h3 className={styles.experienceTitle}>
                  Software Engineer · Southeastern Grocers
                </h3>
                <ul className={styles.experienceDescription}>
                  <li>Assisted in developing, testing, and maintaining applications using C# and .NET technologies.</li>
                  <li>Built user interfaces with XAML to deliver intuitive application designs.</li>
                  <li>Worked closely with QA teams to identify and fix bugs during the testing phase.</li>
                  <li>Performed routine maintenance tasks and applied updates to existing applications.</li>
                </ul>
                <div className={styles.techTags}>
                  <span className={styles.tag}>C#</span>
                  <span className={styles.tag}>.NET</span>
                  <span className={styles.tag}>XAML</span>
                  <span className={styles.tag}>QA Testing</span>
                </div>
              </div>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <span className={styles.experienceDate}>2020 — 2022</span>
              </div>
              <div className={styles.experienceContent}>
                <h3 className={styles.experienceTitle}>
                  Web Developer · Blu Decimal
                </h3>
                <ul className={styles.experienceDescription}>
                  <li>Collaborated with clients to gather requirements, define project scope, and deliver customized web solutions.</li>
                  <li>Wrote clean, maintainable, and scalable code using HTML, CSS, JavaScript, and frameworks like React.</li>
                  <li>Used WordPress as a content management system to maintain and update client sites.</li>
                  <li>Offered ongoing website maintenance, updates, and technical support.</li>
                </ul>
                <div className={styles.techTags}>
                  <span className={styles.tag}>React</span>
                  <span className={styles.tag}>JavaScript</span>
                  <span className={styles.tag}>HTML & CSS</span>
                  <span className={styles.tag}>WordPress</span>
                </div>
              </div>
            </div>

            <button onClick={() => setIsResumeModalOpen(true)} className={styles.resumeLink}>
              View Full Résumé
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </section>

          {/* Projects Section */}
          <section id="projects" className={styles.section}>
            <div className={PROJECTS_COMING_SOON ? styles.comingSoonWrapper : undefined}>
              <div className={PROJECTS_COMING_SOON ? styles.comingSoonContent : undefined}>

                <a href={PROJECTS_COMING_SOON ? undefined : "/projects/inventory-management"} className={styles.projectItem}>
                  <div className={styles.projectImage}>
                    <img src="/inventory.jpg" alt="Stock Management System" />
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>Stock Management System</h3>
                    <p className={styles.projectDescription}>
                      Enterprise inventory application built for tracking shelfs.
                    </p>
                    <div className={styles.techTags}>
                      <span className={styles.tag}>React</span>
                      <span className={styles.tag}>.NET API</span>
                      <span className={styles.tag}>MsSQL</span>
                    </div>
                  </div>
                </a>

                <a href={PROJECTS_COMING_SOON ? undefined : "/projects/client-website"} className={styles.projectItem}>
                  <div className={styles.projectImage}>
                    <img src="/LookWithin.png" alt="Look Within U" />
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>Look Within U</h3>
                    <p className={styles.projectDescription}>
                      Modern website showcasing their services and brand.
                    </p>
                    <div className={styles.techTags}>
                      <span className={styles.tag}>React</span>
                      <span className={styles.tag}>WordPress</span>
                      <span className={styles.tag}>CSS</span>
                    </div>
                  </div>
                </a>

              </div>

              {/* Coming Soon Overlay - only shown when PROJECTS_COMING_SOON is true */}
              {PROJECTS_COMING_SOON && (
                <div className={styles.comingSoonOverlay}>
                  <span className={styles.comingSoonBadge}>Coming Soon</span>
                </div>
              )}
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className={styles.section}>
            <div className={BLOG_COMING_SOON ? styles.comingSoonWrapper : undefined}>
              <div className={BLOG_COMING_SOON ? styles.comingSoonContent : undefined}>

                <a href={BLOG_COMING_SOON ? undefined : "/blog/building-ai-applications"} className={styles.blogItem}>
                  <span className={styles.blogDate}>December 2024</span>
                  <h3 className={styles.blogTitle}>Building AI-Powered Applications: A Practical Guide</h3>
                  <p className={styles.blogDescription}>
                    Insights from building AI-powered enterprise applications that deliver real business value.
                  </p>
                </a>

              </div>

              {/* Coming Soon Overlay - only shown when BLOG_COMING_SOON is true */}
              {BLOG_COMING_SOON && (
                <div className={styles.comingSoonOverlay}>
                  <span className={styles.comingSoonBadge}>Coming Soon</span>
                </div>
              )}
            </div>
          </section>

          <footer className={styles.footer}>
            <p>
              <img src="/florida.svg" alt="Florida" className={styles.floridaIcon} />
              © {new Date().getFullYear()}
               
            </p>
          </footer>
        </div>
      </main>

      {/* Resume Email Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}
