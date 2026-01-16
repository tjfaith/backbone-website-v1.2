import "@/styles/globals.css";
import "@/styles/google_translate_element.css";
import "animate.css";
import "aos/dist/aos.css";
import { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";

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

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
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

        {/* <Script id="tawkto">
          {`
             var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/67af2a1f0bc1aa1a2cb09479/1ik23p38m';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
          `}
        </Script> */}
      </head>
      <body className={`${fontSans.className} ${fontBeauRivage.variable}`}>
        <PreLoader />
        <ChatButton />
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            // forcedTheme: "light",
            enableSystem: true,
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
