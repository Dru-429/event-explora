import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-background/80 border-b-2 border-primary text-foreground py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      {/* Logo/Brand */}
      <Link
        href="/"
        className="font-bold text-2xl text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Event Explora
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        {/* Home Link */}
        <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-border"></div>

        {/* CTA Button */}
        <Link
          href="/"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
        >
          Explore Events
        </Link>

        {/* GitHub Link */}
        <a
          href="https://github.com/dru-429/event-explora"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-background"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.58 2 12.25c0 4.49 2.87 8.29 6.84 9.64.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.07 1.53 1.07.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.26 9.26 0 0112 6.8c.85.004 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.95-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.27 10.27 0 0022 12.25C22 6.58 17.52 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      {/* Mobile: Only show app name and GitHub icon */}
      <div className="flex md:hidden items-center gap-2">
        <a
          href="https://github.com/dru-429/event-explora"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-background"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.58 2 12.25c0 4.49 2.87 8.29 6.84 9.64.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.07 1.53 1.07.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.26 9.26 0 0112 6.8c.85.004 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.95-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.27 10.27 0 0022 12.25C22 6.58 17.52 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  )
}
