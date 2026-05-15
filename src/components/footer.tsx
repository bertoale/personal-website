export default function Footer() {
  return (
    <footer className="mt-20 border-t px-0 py-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Albert. All rights reserved.
        </p>

        <div className="mt-3 flex justify-center gap-4 text-sm text-muted-foreground">
          <a
            href="https://github.com/bertoale"
            target="_blank"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>

          <span>•</span>

          <a
            href="#"
            target="_blank"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <span>•</span>

          <a
            href="mailto:toalber231@gmail.com"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
