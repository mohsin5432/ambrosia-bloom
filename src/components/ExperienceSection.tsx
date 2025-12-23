import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import chocolateBarImage from '@/assets/chocolate-bar.webp';

const experiences = [
  {
    title: 'Deep Relaxation',
    description: 'Feel the stress melt away as the adaptogenic compounds work their magic on your nervous system.',
  },
  {
    title: 'Enhanced Clarity',
    description: 'Experience heightened focus and mental clarity that opens new pathways of thought.',
  },
  {
    title: 'Inner Peace',
    description: 'Discover a profound sense of calm and connection to the present moment.',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-10, 0]);
  const textX = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            style={{ scale: imageScale, rotate: imageRotate }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-elevated"
            >
              <img
                src={chocolateBarImage}
                alt="Bon Voyage Ceremonial Chocolate Bar"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 to-transparent" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-elevated"
            >
              <div className="text-center">
                <div className="font-serif text-2xl font-bold">72%</div>
                <div className="text-xs opacity-80">Dark Chocolate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div style={{ x: textX }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                The Experience
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6">
                A Sensory <span className="italic text-gradient">Voyage</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Each square of our ceremonial chocolate is an invitation to pause, reflect, and embark on an inner journey. The rich, velvety texture melts on your tongue while the adaptogenic compounds begin their gentle work.
              </p>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center border-2 border-transparent group-hover:border-primary transition-colors duration-300">
                    <span className="font-serif text-primary font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {exp.description}
                    </p>
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
