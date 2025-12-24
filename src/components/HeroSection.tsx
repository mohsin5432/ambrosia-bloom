import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import chocolateBar from '@/assets/chocolate-bar-hero.png';

export default function HeroSection() {
  const circularText = "• CEREMONIAL CHOCOLATE • NATURAL INGREDIENTS • ADAPTOGENIC BLEND ";
  
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center">
      {/* Background decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[25vw] font-serif font-bold text-primary/[0.03] whitespace-nowrap select-none">
          BON VOYAGE
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Content - Minimal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 text-center lg:text-left z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground uppercase tracking-tight"
            >
              Take a bite
              <br />
              <span className="text-gradient italic font-medium">& enjoy</span>
              <br />
              the journey
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              <Button variant="hero" size="lg" className="uppercase tracking-widest text-sm">
                Shop Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Center Product Image with Rotating Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-6 flex items-center justify-center z-10 py-8 lg:py-0"
          >
            <div className="relative">
              {/* Rotating circular text */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ width: '600px', height: '600px', left: '50%', top: '50%', marginLeft: '-300px', marginTop: '-300px' }}
              >
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                    />
                  </defs>
                  <text className="fill-primary/40 text-[11px] uppercase tracking-[0.3em] font-medium">
                    <textPath href="#circlePath">
                      {circularText}{circularText}
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl scale-110" />
              
              {/* Product image with float animation */}
              <motion.img
                src={chocolateBar}
                alt="Bon Voyage Ceremonial Chocolate Bar"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[280px] md:w-[380px] lg:w-[480px] h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Stats - Minimal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 z-10"
          >
            <div className="space-y-10 text-center lg:text-right">
              {[
                { value: '100', suffix: '%', label: 'Natural' },
                { value: '72', suffix: '%', label: 'Dark Cacao' },
                { value: '5', suffix: 'g', label: 'Actives' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                >
                  <div className="font-serif text-4xl md:text-5xl font-bold text-primary">
                    {stat.value}
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-1">
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
