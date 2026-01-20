import "@/styles/globals.css";
import "@/styles/google_translate_element.css";
import "animate.css";
import "aos/dist/aos.css";
import { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

import { Providers } from "./providers";

// test
import { siteConfig } from "@/config/site";
import { fontBeauRivage, fontSans } from "@/config/fonts";
import {
  Footer,
  Navbar,
  PreLoader,
  ChatButton,
  AnnouncementModal,
} from "@/components";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL("https://mybackbone.io"),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://mybackbone.io",
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/img/fullLogo.svg",
        width: 1200,
        height: 630,
        alt: "Backbone Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/assets/img/fullLogo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "vxmQs4X-kK9PUvUpPnO_YfoA1YO4dkkbH1P78V7sE38",
  },
};


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  // themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="light" lang="en">
      <head>
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          name="viewport"
        />
      </head>
      <body className={`${fontSans.className} ${fontBeauRivage.variable}`}>
        <Script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Backbone",
              url: "https://mybackbone.io",
              logo: "https://mybackbone.io/logo.png",
            }),
          }}
          id="organization-schema"
          strategy="afterInteractive"
          type="application/ld+json"
        />

        <PreLoader />
        <ChatButton />
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            // forcedTheme: "light",
            enableSystem: true,
            storageKey: "backbone-website",
          }}
        >
          <main className="dark:bg-background-200">
            <Navbar />
            {/* <div id="google_translate_element"></div> */}
            {children}
          </main>
          <AnnouncementModal />
          <Footer />
          <Toaster />
        </Providers>

        {/* ✅ Google Translate Init Script */}
        {/* <Script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,es,fr,de,ar,bn', // Add more if needed
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
              }
            `,
          }}
          id="google-translate-init"
          strategy="afterInteractive"
        /> */}

        {/* ✅ Load Google Translate Script */}
        {/* <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
