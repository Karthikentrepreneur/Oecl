import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, UserCircle, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const {
    user,
    signOut,
    isAdmin
  } = useAuth();
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 w-full z-50 bg-black py-2 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img src="/oecl.png" alt="GGL Logo" className="h-10 w-auto cursor-pointer object-fill transition-all duration-300" />
            <div className="h-8 w-px bg-gray-500 hidden md:block"></div>
            <img alt="1 Global Enterprises Logo" src="/lovable-uploads/d67654d5-3b39-46c3-a167-8b9a025bbf05.png" className="hidden md:block h-8 w-auto object-contain transition-all duration-300" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={`nav-link font-medium text-white hover:text-kargon-red ${isActive("/") ? "text-kargon-red" : ""}`}>
              HOME
            </Link>
            <Link to="/services" className={`nav-link font-medium text-white hover:text-kargon-red ${isActive("/services") ? "text-kargon-red" : ""}`}>
              SERVICES
            </Link>
            <Link to="/projects" className={`nav-link font-medium text-white hover:text-kargon-red ${isActive("/projects") ? "text-kargon-red" : ""}`}>
              PROJECTS
            </Link>
            <Link to="/contact" className={`nav-link font-medium text-white hover:text-kargon-red ${isActive("/contact") ? "text-kargon-red" : ""}`}>
              CONTACT
            </Link>
            {user && <Link to="/dashboard" className={`nav-link font-medium text-white hover:text-kargon-red ${isActive("/dashboard") ? "text-kargon-red" : ""}`}>
                DASHBOARD
              </Link>}
            {isAdmin && <Link to="/admin" className={`nav-link font-medium text-white hover:text-kargon-red ${isActive("/admin") ? "text-kargon-red" : ""}`}>
                ADMIN
              </Link>}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? <>
                {isAdmin && <Link to="/admin">
                    <Button variant="ghost" className="text-white hover:text-kargon-red hover:bg-transparent">
                      <Shield className="mr-2 h-5 w-5" />
                      ADMIN
                    </Button>
                  </Link>}
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-white hover:text-kargon-red hover:bg-transparent">
                    <UserCircle className="mr-2 h-5 w-5" />
                    MY ACCOUNT
                  </Button>
                </Link>
                <Button variant="ghost" className="text-white hover:text-kargon-red hover:bg-transparent" onClick={signOut}>
                  <LogOut className="mr-2 h-5 w-5" />
                  LOGOUT
                </Button>
              </> : <>
                <Link to="/login">
                  <Button variant="ghost" className="text-white hover:text-kargon-red hover:bg-transparent">
                    LOGIN
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-kargon-red hover:bg-kargon-red/90 text-white rounded-md">
                    GET QUOTE
                  </Button>
                </Link>
              </>}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-black py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={`font-medium text-white hover:text-kargon-red ${isActive("/") ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                HOME
              </Link>
              <Link to="/services" className={`font-medium text-white hover:text-kargon-red ${isActive("/services") ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                SERVICES
              </Link>
              <Link to="/projects" className={`font-medium text-white hover:text-kargon-red ${isActive("/projects") ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                PROJECTS
              </Link>
              <Link to="/contact" className={`font-medium text-white hover:text-kargon-red ${isActive("/contact") ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </Link>
              {user && <Link to="/dashboard" className={`font-medium text-white hover:text-kargon-red ${isActive("/dashboard") ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                  DASHBOARD
                </Link>}
              {isAdmin && <Link to="/admin" className={`font-medium text-white hover:text-kargon-red ${isActive("/admin") ? "text-kargon-red" : ""}`} onClick={() => setIsMenuOpen(false)}>
                  ADMIN
                </Link>}
              {user ? <div className="pt-2">
                  {isAdmin && <Link to="/admin" className="flex items-center text-white hover:text-kargon-red py-2" onClick={() => setIsMenuOpen(false)}>
                      <Shield className="mr-2 h-5 w-5" /> ADMIN PANEL
                    </Link>}
                  <Link to="/dashboard" className="flex items-center text-white hover:text-kargon-red py-2" onClick={() => setIsMenuOpen(false)}>
                    <UserCircle className="mr-2 h-5 w-5" /> MY ACCOUNT
                  </Link>
                  <button className="flex items-center text-white hover:text-kargon-red py-2" onClick={() => {
              setIsMenuOpen(false);
              signOut();
            }}>
                    <LogOut className="mr-2 h-5 w-5" /> LOGOUT
                  </button>
                </div> : <>
                  <Link to="/login" className="text-white hover:text-kargon-red py-2" onClick={() => setIsMenuOpen(false)}>
                    LOGIN
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-kargon-red hover:bg-kargon-red/90 text-white w-full rounded-md mt-4">
                      GET QUOTE
                    </Button>
                  </Link>
                </>}
            </nav>
          </div>
        </div>}
    </header>;
};
export default Navigation;