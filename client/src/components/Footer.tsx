export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Anjalee Narenthiren. Building the future of robotics.
          </p>
          
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-github"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-linkedin"
            >
              LinkedIn
            </a>
            <a
              href="mailto:anjalee@example.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
