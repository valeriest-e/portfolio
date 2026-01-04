import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa"
import { useTheme } from "next-themes";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "projects", label: "Projects" },
  { href: "about", label: "About" },
  { href: "contact", label: "Contact" },
];

interface HeaderProps {
  currentPageName?: string;
}

const Header = ({ currentPageName }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          
          {/* Logo + Breadcrumbs */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="font-mono font-bold text-lg text-foreground cursor-pointer select-none"
            >
              VB.
            </Link>

            {!isHome && currentPageName && (
              <>
                <span className="text-muted-foreground select-none font-mono text-sm">/</span>
                <span className="text-muted-foreground font-mono text-sm">{currentPageName}</span>
              </>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {isHome ? (
                    <button
                      onClick={() => {
                        const el = document.getElementById(link.href);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={`/#${link.href}`}
                      className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/valeriia-bilous/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary transition-colors round=sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-sm border border-border hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-sm border border-border hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </button>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {isHome ? (
                    <button
                      onClick={() => {
                        const el = document.getElementById(link.href);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        setIsMenuOpen(false);
                      }}
                      className="block font-mono text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={`/#${link.href}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-mono text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/valeriia-bilous/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary transition-colors round=sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;