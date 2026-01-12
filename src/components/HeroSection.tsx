import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Leaf, Globe, Sparkles } from 'lucide-react';

const marqueeItems = [
  { icon: Leaf, text: '100% Vegan' },
  { icon: Globe, text: 'Eco-friendly Packaging' },
  { icon: Heart, text: 'Heart-opening Adaptogen Blend' },
  { icon: Sparkles, text: 'Crafted with Organic Ingredients' },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/5501692/5501692-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Gradient Overlay - Bottom fade to primary color */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-2xl"
        >
          {/* Main Heading - Script/Cursive Style */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight italic">
            Take a bite and
            <br />
            <span className="block">enjoy the journey.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/90 text-lg md:text-xl font-light leading-relaxed">
            Adaptogenic, ceremonial chocolate bars crafted with
            <br className="hidden md:block" />
            nature's finest ingredients.
          </p>

          {/* CTA Button - Outlined Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-white/60 text-white bg-transparent hover:bg-white/10 uppercase tracking-[0.2em] text-sm px-10 py-6 rounded-sm"
            >
              Shop Now
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm py-4 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {/* Double the items for seamless loop */}
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <item.icon className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-sm md:text-base font-light tracking-wide">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
