import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">
          Portfolio
        </Link>
        <div className="flex gap-8">
          {[
            { path: "/", label: "Home" },
            { path: "/projects", label: "Projects" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-primary transition-colors ${
                isActive(path) ? "text-primary" : "text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;