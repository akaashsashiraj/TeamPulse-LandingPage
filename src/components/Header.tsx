import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/TeamPulseLogo.png';

const navItems = [
  { label: 'Product', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Employee Dashboard', href: '/employee-dashboard' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Why TeamPulse?', href: '/comparison' },
  //{ label: 'Resources', href: '#' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0">
          <img
            src={logoImage}
            alt="TeamPulse logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold" style={{ color: '#5B5FC7', fontFamily: "'Poppins', sans-serif", fontWeight: '700' }}>
            TeamPulse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://github.com/akaashsashiraj/TeamPulse-LandingPage/releases/download/v1.0.0/Team.Pulse.Agent.zip" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full" // Ensures the link takes up the full width like the button
          >
          <Button>Download Now</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-t mt-4"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;