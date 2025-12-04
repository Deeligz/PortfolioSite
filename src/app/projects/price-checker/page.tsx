import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../../blog/building-ai-applications/page.module.css';

export const metadata: Metadata = {
  title: 'Price Checker App | Daniel Oyieke',
  description: 'Customer-facing mobile app enabling instant price verification through barcode scanning. Integrated with real-time pricing databases and supports multiple store locations.',
  keywords: ['Price Checker', 'Barcode Scanner', 'Retail App', 'Firebase', 'GraphQL', 'Mobile Application'],
};

export default function PriceCheckerProject() {
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
          <span className={styles.category}>Customer-Facing App</span>
          <h1 className={styles.title}>Price Checker App</h1>
          <div className={styles.meta}>
            <span className={styles.author}>Daniel Oyieke</span>
            <span className={styles.separator}>•</span>
            <span className={styles.readTime}>Southeastern Grocers</span>
          </div>
        </header>

        <div className={styles.heroImage}>
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop" 
            alt="Customer scanning product barcode"
          />
        </div>

        <div className={styles.content}>
          <h2>Project Overview</h2>
          <p>
            The Price Checker App is a customer-facing mobile application that empowers shoppers to instantly 
            verify product prices while shopping. By simply scanning a product&apos;s barcode, customers can 
            access real-time pricing information, current promotions, and product details—enhancing 
            transparency and improving the shopping experience.
          </p>

          <h2>The Challenge</h2>
          <p>
            In retail environments, pricing discrepancies can lead to customer frustration and erode trust. 
            Customers often find themselves uncertain about prices, especially during sales or when shelf 
            tags are missing or outdated. Traditional price check stations are often inconveniently located 
            and create friction in the shopping journey.
          </p>
          <p>
            The challenge was to create a mobile solution that would give customers instant access to accurate 
            pricing information, support multiple store locations, and integrate seamlessly with existing 
            pricing systems.
          </p>

          <h2>Key Features</h2>
          <h3>Instant Barcode Scanning</h3>
          <p>
            The app features a fast, responsive barcode scanner that works with all standard retail barcode 
            formats. Customers can scan products in under a second, receiving immediate price information 
            without any waiting.
          </p>

          <h3>Real-Time Pricing Database</h3>
          <p>
            Prices are pulled directly from the store&apos;s real-time pricing database, ensuring customers 
            always see the most current and accurate prices. This includes regular prices, sale prices, 
            and any applicable promotions or discounts.
          </p>

          <h3>Multi-Store Support</h3>
          <p>
            The app automatically detects the customer&apos;s location and displays prices for their current 
            store. Customers can also manually select different store locations to compare prices or check 
            availability.
          </p>

          <h3>Promotional Pricing</h3>
          <p>
            The system clearly displays any active promotions, loyalty discounts, or special offers applicable 
            to scanned products. This helps customers maximize their savings and take advantage of deals they 
            might otherwise miss.
          </p>

          <h2>Technical Implementation</h2>
          <p>
            Built with React Native for cross-platform compatibility, the app delivers a native experience on 
            both iOS and Android devices. The barcode scanning functionality leverages the device&apos;s camera 
            with optimized image processing for quick, accurate scans.
          </p>
          <p>
            Firebase provides the real-time backend infrastructure, enabling instant price lookups and seamless 
            synchronization across the system. GraphQL powers the API layer, allowing efficient data fetching 
            and reducing unnecessary network requests.
          </p>

          <h2>User Experience Design</h2>
          <p>
            The app was designed with simplicity as the primary goal. The interface is clean and intuitive, 
            requiring no learning curve. Large, clear price displays ensure information is easy to read, 
            even in bright store lighting conditions.
          </p>
          <p>
            Accessibility was a key consideration, with support for screen readers, adjustable text sizes, 
            and high-contrast display options to ensure the app is usable by all customers.
          </p>

          <h2>Results & Impact</h2>
          <p>
            The Price Checker App has improved customer satisfaction by providing instant access to accurate 
            pricing information. The app has reduced price-check related inquiries at customer service desks 
            and helped build customer trust through pricing transparency.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>React Native</span>
            <span className={styles.tag}>Barcode Scanner</span>
            <span className={styles.tag}>Firebase</span>
            <span className={styles.tag}>GraphQL</span>
            <span className={styles.tag}>Real-Time Data</span>
            <span className={styles.tag}>Cross-Platform</span>
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

