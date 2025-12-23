import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProductScene from './ProductScene';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blush/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium mb-6"
            >
              <Sparkles size={16} className="text-primary" />
              Ceremonial Grade Chocolate
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground mb-6"
            >
              Take a bite
              <br />
              <span className="text-gradient italic">and enjoy</span>
              <br />
              the journey.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8"
            >
              Adaptogenic, ceremonial chocolate bars crafted with nature's finest ingredients for a transcendent experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl">
                Begin Your Journey
              </Button>
              <Button variant="outline" size="xl">
                Explore Flavors
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50"
            >
              {[
                { value: '5g', label: 'Active Compounds' },
                { value: '72%', label: 'Dark Chocolate' },
                { value: '100%', label: 'Natural' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-serif text-2xl md:text-3xl font-semibold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2"
          >
            <div className="absolute inset-0 animate-pulse-glow rounded-full" />
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <ProductScene />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#journey"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm font-medium">Discover More</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
