import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-foreground text-background py-4 px-6 flex justify-between items-center">
      <div className="font-bold">
        <Link href="/">Events Explorer</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition-colors"
        >
          Home
        </Link>
        <a
          href="https://github.com/your-github-repo" // Replace with your actual repo URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-primary transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.58 2 12.25c0 4.49 2.87 8.29 6.84 9.64.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.07 1.53 1.07.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.26 9.26 0 0112 6.8c.85.004 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.95-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.27 10.27 0 0022 12.25C22 6.58 17.52 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
