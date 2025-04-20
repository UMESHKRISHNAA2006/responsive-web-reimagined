
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-xl font-bold text-foreground transition-colors hover:text-primary">NOVA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            <div className="relative group">
              <a 
                href="#" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                Home
              </a>
            </div>
            <div className="relative group">
              <a 
                href="#" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                About
              </a>
            </div>
            <div className="relative group">
              <a 
                href="#" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                Services
              </a>
            </div>
            <div className="relative group">
              <a 
                href="#" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                Contact
              </a>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="ml-4"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/90 backdrop-blur-md shadow-lg">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
