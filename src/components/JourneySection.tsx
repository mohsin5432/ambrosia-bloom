import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Moon, Heart, Sparkles } from 'lucide-react';

const journeySteps = [
  {
    icon: Leaf,
    title: 'Sourced with Care',
    description: 'Hand-selected adaptogenic mushrooms and ceremonial-grade cacao from pristine, sustainable sources around the world.',
    color: 'text-primary',
  },
  {
    icon: Moon,
    title: 'Crafted with Intention',
    description: 'Each bar is infused with 5g of active compounds, carefully blended to create a harmonious and transformative experience.',
    color: 'text-rose',
  },
  {
    icon: Heart,
    title: 'Savored with Presence',
    description: 'Take a moment, breathe deep, and let each bite transport you to a state of profound relaxation and clarity.',
    color: 'text-accent',
  },
  {
    icon: Sparkles,
    title: 'Transformed by Nature',
    description: 'Experience the ancient wisdom of ceremonial practices, now available in a delicious, modern form.',
    color: 'text-primary',
  },
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          style={{ y }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            The Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6"
          >
            Your Journey Awaits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From earth to experience, every step of our process is designed to honor the sacred nature of these powerful ingredients.
          </motion.p>
        </motion.div>

        {/* Journey Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="gradient-card rounded-md p-8 h-full border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-primary font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-md bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${step.color}`}>
                  <step.icon size={28} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-md scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
