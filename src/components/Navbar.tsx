import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <img
          src="/placeholder-logo.png"
          alt="DJJ Construction Logo"
          className="h-12 w-auto"
        />
        <div className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
        </div>
        <ul className="hidden md:flex space-x-4">
          {['home', 'services', 'testimonials', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-secondary transition-colors duration-300 py-2 px-3 rounded font-bold"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;