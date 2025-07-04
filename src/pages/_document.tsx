import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f6f7eb" />
        <meta name="author" content="Events Explorer" />
        <meta name="description" content="Discover and explore amazing events happening around you." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://youreventsite.com" />
      </Head>
      <body className="antialiased bg-background text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
