'use client';

import { useState, useEffect } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'blog'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

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
            <h2 className={styles.title}>AI-focused Software Engineer</h2>
            <p className={styles.tagline}>
              I build AI-powered enterprise applications that deliver measurable business impact.
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
              As a software engineer, I specialize in building scalable mobile applications that solve real business challenges. I focus on creating solutions that are not only technically sound but also drive tangible results for organizations and their users.
            </p>
            <p className={styles.bioText}>
              My expertise spans the full mobile development lifecycle, from architecture and implementation to deployment and optimization. I&apos;m particularly drawn to projects where <span className={styles.highlight}>innovation meets practicality</span>, delivering software that teams can rely on and businesses can grow with.
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
                <p className={styles.experienceDescription}>
                  Responsible for building AI-driven features with Azure AI Foundry to optimize tools used by store associates. 
                  Responsible for Developing, testing, and maintain cross-platform mobile and desktop applications using C# and .NET MAUI. 
                  Build and maintain efficient back-end services and APIs using .NET technologies. 
                  Debug and resolve issues in C# .NET MAUI applications, ensuring optimal performance across platforms. 
                  Participate in Agile/Scrum processes, including sprint planning and standups, to ensure timely delivery of features.
                </p>
                <div className={styles.techTags}>
                  <span className={styles.tag}>Azure AI Foundry</span>
                  <span className={styles.tag}>C#</span>
                  <span className={styles.tag}>.NET MAUI</span>
                  <span className={styles.tag}>.NET</span>
                  <span className={styles.tag}>REST APIs</span>
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
                <p className={styles.experienceDescription}>
                  Assisted in developing, testing, and maintaining applications using C# and .NET technologies. 
                  Built user interfaces with XAML to deliver intuitive application designs. 
                  Worked closely with QA teams to identify and fix bugs during the testing phase. 
                  Performed routine maintenance tasks and applied updates to existing applications.
                </p>
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
                <p className={styles.experienceDescription}>
                  Collaborated with clients to gather requirements, define project scope, and deliver customized web solutions. 
                  Wrote clean, maintainable, and scalable code using HTML, CSS, JavaScript, and frameworks like React. 
                  Offered ongoing website maintenance, updates, and technical support.
                </p>
                <div className={styles.techTags}>
                  <span className={styles.tag}>React</span>
                  <span className={styles.tag}>JavaScript</span>
                  <span className={styles.tag}>HTML & CSS</span>
                  <span className={styles.tag}>Web Development</span>
                </div>
              </div>
            </div>

            <a href="/resume.pdf" className={styles.resumeLink} target="_blank" rel="noopener noreferrer">
              View Full Résumé
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </section>

          {/* Projects Section */}
          <section id="projects" className={styles.section}>
            <a href="/projects/inventory-management" className={styles.projectItem}>
              <div className={styles.projectImage}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop" alt="Inventory Management System" />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                  Inventory Management System
                  <svg className={styles.externalLink} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </h3>
                <p className={styles.projectDescription}>
                  Enterprise mobile application for real-time inventory tracking and management. Built for warehouse operations with offline capabilities, barcode scanning, and seamless data synchronization.
                </p>
                <div className={styles.techTags}>
                  <span className={styles.tag}>React Native</span>
                  <span className={styles.tag}>TypeScript</span>
                  <span className={styles.tag}>SQLite</span>
                  <span className={styles.tag}>REST API</span>
                </div>
              </div>
            </a>

            <a href="/projects/shelf-scanning" className={styles.projectItem}>
              <div className={styles.projectImage}>
                <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=200&fit=crop" alt="Shelf Scanning Application" />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                  Shelf Scanning Application
                  <svg className={styles.externalLink} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </h3>
                <p className={styles.projectDescription}>
                  Mobile solution for retail shelf auditing and compliance checks. Features computer vision integration, automated reporting, and real-time analytics for store operations teams.
                </p>
                <div className={styles.techTags}>
                  <span className={styles.tag}>React Native</span>
                  <span className={styles.tag}>Computer Vision</span>
                  <span className={styles.tag}>Azure</span>
                  <span className={styles.tag}>Node.js</span>
                </div>
              </div>
            </a>

            <a href="/projects/price-checker" className={styles.projectItem}>
              <div className={styles.projectImage}>
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop" alt="Price Checker App" />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                  Price Checker App
                  <svg className={styles.externalLink} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </h3>
                <p className={styles.projectDescription}>
                  Customer-facing mobile app enabling instant price verification through barcode scanning. Integrated with real-time pricing databases and supports multiple store locations and promotional pricing.
                </p>
                <div className={styles.techTags}>
                  <span className={styles.tag}>React Native</span>
                  <span className={styles.tag}>Barcode Scanner</span>
                  <span className={styles.tag}>Firebase</span>
                  <span className={styles.tag}>GraphQL</span>
                </div>
              </div>
            </a>

            <a href="/projects/intranet-site" className={styles.projectItem}>
              <div className={styles.projectImage}>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop" alt="Intranet Site" />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                  Intranet Site
                  <svg className={styles.externalLink} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </h3>
                <p className={styles.projectDescription}>
                  Internal company portal providing employees with centralized access to resources, announcements, tools, and documentation. Features role-based access control and seamless integration with existing systems.
                </p>
                <div className={styles.techTags}>
                  <span className={styles.tag}>React</span>
                  <span className={styles.tag}>TypeScript</span>
                  <span className={styles.tag}>.NET</span>
                  <span className={styles.tag}>SQL Server</span>
                </div>
              </div>
            </a>

            <a href="/projects" className={styles.viewMoreLink}>
              View Full Project Archive
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </section>

          {/* Blog Section */}
          <section id="blog" className={styles.section}>
            <a href="/blog/building-ai-applications" className={styles.blogItem}>
              <span className={styles.blogDate}>December 2024</span>
              <h3 className={styles.blogTitle}>
                Building AI-Powered Applications: A Practical Guide
                <svg className={styles.externalLink} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </h3>
              <p className={styles.blogDescription}>
                Insights from building AI-powered enterprise applications that deliver real business value. Learn key principles for successful AI implementations.
              </p>
            </a>
          </section>

          <footer className={styles.footer}>
            <p>
              🌴 © {new Date().getFullYear()} 🌴
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
