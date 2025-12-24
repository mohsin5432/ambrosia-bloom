import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import chocolateBar from '@/assets/chocolate-bar-hero.png';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-serif font-bold text-primary/5 whitespace-nowrap select-none">
          BON VOYAGE
        </span>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush/30 via-transparent to-accent/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-160px)]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 text-center lg:text-left z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-6 uppercase tracking-tight"
            >
              Take a bite
              <br />
              <span className="text-gradient">and enjoy</span>
              <br />
              the journey.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-sm mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Adaptogenic, ceremonial chocolate bars crafted with nature's finest ingredients for a transcendent experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button variant="hero" size="xl" className="uppercase tracking-wider">
                Begin Your Journey
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 mt-12 justify-center lg:justify-start"
            >
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Center Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-4 flex items-center justify-center z-10"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              {/* Glow effect behind product */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              <img
                src={chocolateBar}
                alt="Bon Voyage Ceremonial Chocolate Bar"
                className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[450px] h-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 z-10"
          >
            {/* Navigation arrows */}
            <div className="hidden lg:flex gap-3 justify-end mb-12">
              <button className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300">
                <span className="text-xl">←</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300">
                <span className="text-xl">→</span>
              </button>
            </div>

            {/* Stats */}
            <div className="space-y-8 text-center lg:text-right">
              {[
                { value: '100', suffix: '%', label: 'Natural Ingredients' },
                { value: '0', suffix: '%', label: 'Artificial Additives' },
                { value: '5', suffix: 'g', label: 'Active Compounds' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="group"
                >
                  <div className="font-serif text-4xl md:text-5xl font-bold text-primary italic">
                    {stat.value}
                    <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                  </div>
                  <div className="text-sm md:text-base text-foreground font-medium uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
