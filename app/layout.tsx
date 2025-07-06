import "@/styles/globals.css";
import "animate.css";
import "aos/dist/aos.css";
import { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
// import Script from "next/script";

import { Providers } from "./providers";

// test
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Footer, Navbar, PreLoader, ChatButton } from "@/components";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
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
      <body className={fontSans.className}>
        <PreLoader />
        <ChatButton />
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          <main className="dark:bg-background-200">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
