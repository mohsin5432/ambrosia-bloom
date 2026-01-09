import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-lg bg-chocolate/90 rounded-md border border-primary/30 px-6 py-3 shadow-elevated">
          <div className="flex items-center justify-between">
            {/* Left - Empty space for balance */}
            <div className="hidden md:block w-[140px]" />

            {/* Center - Logo */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/">
                <img src={logo} alt="Bon Voyage" className="h-8 md:h-10 w-auto" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Right - Cart & Shop Now */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-primary-foreground hover:text-primary transition-colors"
              >
                <ShoppingCart size={22} />
              </motion.button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-border/50"
            >
              <Link
                to="/products"
                className="block py-3 text-primary-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
