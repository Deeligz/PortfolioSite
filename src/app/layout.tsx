import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget/ChatWidget";

export const metadata: Metadata = {
  title: "Daniel Oyieke - AI Software Engineer | AI-Powered Desktop, Mobile & Web Applications",
  description: "Daniel Oyieke is an AI Software Engineer specializing in building AI-powered desktop, mobile, and web applications. Expert in machine learning integration, computer vision, React Native, TypeScript, and enterprise AI solutions that drive real business results.",
  keywords: [
    "AI Software Engineer",
    "AI Developer",
    "Daniel Oyieke",
    "Artificial Intelligence Engineer",
    "Machine Learning Developer",
    "AI-Powered Applications",
    "AI Mobile Developer",
    "AI Web Developer",
    "Computer Vision Developer",
    "Enterprise AI Solutions",
    "React Native AI",
    "TypeScript AI Developer",
    "Full Stack AI Engineer",
    "AI Application Development",
    "Intelligent Applications Developer",
    "Jacksonville AI Engineer",
    "AI Desktop Applications",
    "LLM Integration Developer",
    "AI Software Development"
  ],
  authors: [{ name: "Daniel Oyieke" }],
  creator: "Daniel Oyieke",
  publisher: "Daniel Oyieke",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.danieloyieke.dev",
    siteName: "Daniel Oyieke - AI Software Engineer",
    title: "Daniel Oyieke - AI Software Engineer | AI-Powered Desktop, Mobile & Web Applications",
    description: "AI Software Engineer specializing in building intelligent applications with machine learning, computer vision, and enterprise AI solutions. Expert in React Native, TypeScript, and full-stack AI development.",
    images: [
      {
        url: "https://www.danieloyieke.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Oyieke - AI Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Oyieke - AI Software Engineer",
    description: "AI Software Engineer building intelligent desktop, mobile & web applications. Expert in machine learning, computer vision, React Native & TypeScript.",
    creator: "@danieloyieke",
    images: ["https://www.danieloyieke.dev/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/Tea.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/Tea.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/Tea.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Tea.png" />
        <link rel="canonical" href="https://www.danieloyieke.dev" />
        <meta name="author" content="Daniel Oyieke" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel Oyieke",
              url: "https://www.danieloyieke.dev",
              jobTitle: "AI Software Engineer",
              description: "AI Software Engineer specializing in building AI-powered desktop, mobile, and web applications that drive real business results",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jacksonville",
                addressRegion: "FL",
                addressCountry: "US"
              },
              sameAs: [
                "https://github.com/Deeligz",
                "https://www.linkedin.com/in/daniel-oyieke-b73249207/"
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "AI Application Development",
                "Computer Vision",
                "Natural Language Processing",
                "Large Language Models",
                "React Native",
                "TypeScript",
                "JavaScript",
                "Python",
                "Desktop Application Development",
                "Mobile Application Development",
                "Web Application Development",
                "Enterprise AI Solutions",
                "Full Stack Development"
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "AI Software Engineer",
                occupationLocation: {
                  "@type": "Country",
                  name: "United States"
                },
                description: "Develops AI-powered applications across desktop, mobile, and web platforms",
                skills: "Artificial Intelligence, Machine Learning, Computer Vision, React Native, TypeScript, Python, Full Stack Development"
              }
            })
          }}
        />
      </head>
      <body>
        <div className="topBlurBar"></div>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
