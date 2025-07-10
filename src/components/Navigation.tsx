import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, UserCircle, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import CountrySelector from "@/components/CountrySelector";
import { getCurrentCountryFromPath } from "@/services/countryDetection";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const currentCountry = getCurrentCountryFromPath(location.pathname);
  const countryPrefix = currentCountry.code === 'SG' ? '' : `/${currentCountry.name.toLowerCase()}`;
  const isActive = (path: string) => location.pathname === path;
  const getNavLink = (basePath: string) =>
    currentCountry.code === 'SG' ? basePath : `/${currentCountry.name.toLowerCase()}${basePath}`;

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 shadow-md transition-all duration-300 py-[19px] bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img src="/oecl.png" alt="GGL Logo" className="h-10 w-auto cursor-pointer object-fill transition-all duration-300" />
            <div className="h-8 w-px bg-gray-500 hidden md:block"></div>
            <img alt="1 Global Enterprises Logo" src="/lovable-uploads/a2513c1d-2708-4143-a69b-fa65a1d4d1f2.png" className="hidden md:block h-11 w-auto object-contain transition-all duration-300" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to={getNavLink("/home")} className={`nav-link font-medium text-black hover:text-kargon-red ${isActive(getNavLink("/home")) || (currentCountry.code === 'SG' && isActive("/")) ? "text-kargon-red" : ""}`}>
              HOME
            </Link>
            <Link to={getNavLink("/about-us")} className={`nav-link font-medium text-black hover:text-kargon-red ${isActive(getNavLink("/about-us")) ? "text-kargon-red" : ""}`}>
              ABOUT US
            </Link>
            <Link to={currentCountry.code === 'IN' ? "/india/services" : "/services"} className={`nav-link font-medium text-black hover:text-kargon-red ${isActive(currentCountry.code === 'IN' ? "/india/services" : "/services") ? "text-kargon-red" : ""}`}>
              SERVICES
            </Link>
            <Link to={getNavLink("/blogs")} className={`nav-link font-medium text-black hover:text-kargon-red ${isActive("/blog") ? "text-kargon-red" : ""}`}>
              BLOGS
            </Link>
            <Link to={getNavLink("/contact")} className={`nav-link font-medium text-black hover:text-kargon-red ${isActive(getNavLink("/contact")) ? "text-kargon-red" : ""}`}>
              CONTACT
            </Link>
          </nav>

          {/* Auth Buttons and Country Selector */}
          <div className="hidden md:flex items-center gap-4">
            <CountrySelector />
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-black hover:text-kargon-red hover:bg-transparent">
                    <UserCircle className="mr-2 h-5 w-5" />
                    MY ACCOUNT
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-black hover:text-kargon-red hover:bg-transparent"
                  onClick={signOut}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  LOGOUT
                </Button>
              </>
            ) : (
              <Link to="/contact">
                <Button className="bg-kargon-red hover:bg-kargon-red/90 text-white rounded-md">
                  GET QUOTE
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? (
              <X className="text-black" size={24} />
            ) : (
              <Menu className="text-black" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white py-4 shadow-md animate-fade-in border-t">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link to={getNavLink("/home")} className={`font-medium text-black hover:text-kargon-red ${isActive(getNavLink("/home")) || (currentCountry.code === 'SG' && isActive("/")) ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                HOME
              </Link>
              <Link to={getNavLink("/about-us")} className={`font-medium text-black hover:text-kargon-red ${isActive(getNavLink("/about-us")) ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                ABOUT US
              </Link>
              <Link to={currentCountry.code === 'IN' ? "/india/services" : "/services"} className={`font-medium text-black hover:text-kargon-red ${isActive(currentCountry.code === 'IN' ? "/india/services" : "/services") ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                SERVICES
              </Link>
              <Link to="/blog" className={`font-medium text-black hover:text-kargon-red ${isActive("/blog") ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                BLOGS
              </Link>
              <Link to={getNavLink("/contact")} className={`font-medium text-black hover:text-kargon-red ${isActive(getNavLink("/contact")) ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </Link>

              <div className="pt-2">
                <CountrySelector />
              </div>

              {user ? (
                <div className="pt-2">
                  <Link to="/dashboard" className="flex items-center text-black hover:text-kargon-red py-2" onClick={() => setIsMenuOpen(false)}>
                    <UserCircle className="mr-2 h-5 w-5" />
                    MY ACCOUNT
                  </Link>
                  <button className="flex items-center text-black hover:text-kargon-red py-2" onClick={() => {
                    setIsMenuOpen(false);
                    signOut();
                  }}>
                    <LogOut className="mr-2 h-5 w-5" />
                    LOGOUT
                  </button>
                </div>
              ) : (
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-kargon-red hover:bg-kargon-red/90 text-white w-full rounded-md mt-4">
                    GET QUOTE
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
