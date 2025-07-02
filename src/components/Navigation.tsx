import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, LogOut, UserCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut, isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-black py-2"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section with Black Background */}
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/GGL.png"
              alt="GGL Logo"
              onClick={handleLogoClick}
              className="h-16 w-auto cursor-pointer transition-all duration-300 object-fill"
            />
            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
            <img
              src="/1GlobalEnterprises.png"
              alt="1 Global Enterprises Logo"
              className="hidden md:block h-10 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {["/", "/services", "/projects", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`nav-link font-medium ${isScrolled ? "text-kargon-dark" : "text-white"} hover:text-kargon-red ${isActive(path) ? "text-kargon-red" : ""}`}
              >
                {path.replace("/", "")?.toUpperCase() || "HOME"}
              </Link>
            ))}
            {user && (
              <Link to="/dashboard" className={`nav-link font-medium ${isScrolled ? "text-kargon-dark" : "text-white"} hover:text-kargon-red ${isActive("/dashboard") ? "text-kargon-red" : ""}`}>
                DASHBOARD
              </Link>
            )}
            {isAdmin && (
              <Link to="/admin" className={`nav-link font-medium ${isScrolled ? "text-kargon-dark" : "text-white"} hover:text-kargon-red ${isActive("/admin") ? "text-kargon-red" : ""}`}>
                ADMIN
              </Link>
            )}
          </nav>

          {/* User Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="ghost" className={`font-medium ${isScrolled ? "text-kargon-dark hover:text-kargon-red" : "text-white hover:text-white/80"} hover:bg-transparent`}>
                      <Shield className="mr-2 h-5 w-5" />
                      ADMIN
                    </Button>
                  </Link>
                )}
                <Link to="/dashboard">
                  <Button variant="ghost" className={`font-medium ${isScrolled ? "text-kargon-dark hover:text-kargon-red" : "text-white hover:text-white/80"} hover:bg-transparent`}>
                    <UserCircle className="mr-2 h-5 w-5" />
                    MY ACCOUNT
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  onClick={() => signOut()}
                  className={`font-medium ${isScrolled ? "text-kargon-dark hover:text-kargon-red" : "text-white hover:text-white/80"} hover:bg-transparent`}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  LOGOUT
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className={`font-medium ${isScrolled ? "text-kargon-dark hover:text-kargon-red" : "text-white hover:text-white/80"} hover:bg-transparent`}>
                    LOGIN
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-kargon-red hover:bg-kargon-red/90 text-white rounded-md">GET QUOTE</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? (
              <X className={isScrolled ? "text-kargon-dark" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-kargon-dark" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {["/", "/services", "/projects", "/contact"].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className={`font-medium text-kargon-dark hover:text-kargon-red py-2 ${isActive(path) ? "text-kargon-red" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {path.replace("/", "")?.toUpperCase() || "HOME"}
                </Link>
              ))}
              {user && (
                <Link to="/dashboard" className="font-medium text-kargon-dark hover:text-kargon-red py-2" onClick={() => setIsMenuOpen(false)}>
                  DASHBOARD
                </Link>
              )}
              {isAdmin && (
                <Link to="/admin" className="font-medium text-kargon-dark hover:text-kargon-red py-2" onClick={() => setIsMenuOpen(false)}>
                  ADMIN
                </Link>
              )}
              {user ? (
                <>
                  <button
                    className="font-medium text-kargon-dark hover:text-kargon-red py-2 flex items-center"
                    onClick={() => {
                      setIsMenuOpen(false);
                      signOut();
                    }}
                  >
                    <LogOut className="mr-2 h-5 w-5" /> LOGOUT
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="font-medium text-kargon-dark hover:text-kargon-red py-2" onClick={() => setIsMenuOpen(false)}>
                    LOGIN
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-kargon-red hover:bg-kargon-red/90 text-white w-full rounded-md mt-4">
                      GET QUOTE
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
