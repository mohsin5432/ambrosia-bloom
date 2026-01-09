import { motion } from 'framer-motion';
import { Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 bg-chocolate text-cream overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="font-serif text-3xl font-semibold mb-4">
              <span className="text-primary">BON</span> VOYAGE
            </h3>
            <p className="text-cream/70 max-w-md leading-relaxed mb-6">
              Crafting ceremonial chocolate experiences that honor ancient traditions while embracing modern wellness. Every bite is a journey.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-sm bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {['Our Story', 'Ingredients', 'Lab Results', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/70 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping', 'Returns', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/70 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-cream/50 text-sm">
            © 2024 Bon Voyage. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm">
            Crafted with intention ✦ Consumed with presence
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
