import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left - Hamburger Menu */}
          <button
            className="text-white hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>

          {/* Center - Logo */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/">
              <img src={logo} alt="Bon Voyage" className="h-6 md:h-8 w-auto brightness-0 invert" />
            </Link>
          </motion.div>

          {/* Right - User & Cart Icons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:opacity-80 transition-opacity hidden md:block"
            >
              <User size={24} strokeWidth={1.5} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:opacity-80 transition-opacity"
            >
              <ShoppingBag size={24} strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full mt-2 mx-6 bg-white/95 backdrop-blur-md rounded-sm border border-white/20 shadow-lg"
          >
            <div className="py-4 px-6">
              <Link
                to="/products"
                className="block py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/#journey"
                className="block py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </Link>
              <Link
                to="/#ingredients"
                className="block py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Ingredients
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
