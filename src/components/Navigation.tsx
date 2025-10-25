import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl md:text-3xl font-bold transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              NyayPathAsst
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("learn")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-gray-700 hover:text-gray-900" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              Learn
            </button>
            <button
              onClick={() => scrollToSection("topics")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-gray-700 hover:text-gray-900" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              Key Topics
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-gray-700 hover:text-gray-900" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-gray-700 hover:text-gray-900" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("topics")}
              className={`${
                isScrolled
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              Explore
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("learn")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Learn
            </button>
            <button
              onClick={() => scrollToSection("topics")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Key Topics
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("topics")}
              className="w-full bg-gray-900 text-white hover:bg-gray-800"
            >
              Explore
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
