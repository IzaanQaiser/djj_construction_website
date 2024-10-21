import React, { useState, useEffect } from 'react';
          import { Menu, X } from 'lucide-react';
          
          const Navbar: React.FC = () => {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [isMobile, setIsMobile] = useState(false);
          
            useEffect(() => {
              const checkMobile = () => {
                setIsMobile(window.innerWidth <= 768);
              };
          
              checkMobile();
              window.addEventListener('resize', checkMobile);
          
              return () => window.removeEventListener('resize', checkMobile);
            }, []);
          
            const scrollToSection = (sectionId: string) => {
              const section = document.getElementById(sectionId);
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }
            };
          
            return (
              <nav className="fixed top-0 left-0 right-0 bg-primary shadow-md z-50">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                  <img
                    src="/img/logo.png"
                    alt="DJJ Construction Logo"
                    className="h-16 w-auto m-2"
                  />
                  <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      {isMenuOpen ? (
                        <X className="h-6 w-6 text-white" />
                      ) : (
                        <Menu className="h-6 w-6 text-white" />
                      )}
                    </button>
                  </div>
                  <ul className={`${isMobile ? (isMenuOpen ? 'flex' : 'hidden') : 'flex'} ${isMobile ? 'flex-col absolute top-full left-0 right-0 bg-primary' : 'space-x-4'} md:flex md:space-x-4`}>
                    {['home', 'services', 'testimonials', 'contact'].map((item) => (
                      <li key={item} className={isMobile ? 'border-b border-gray-700' : ''}>
                        <button
                          onClick={() => scrollToSection(item)}
                          className="text-white hover:text-secondary transition-colors duration-300 py-2 px-3 rounded font-bold block w-full text-left"
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