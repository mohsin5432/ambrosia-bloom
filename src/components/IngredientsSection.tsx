import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ingredients = [
  {
    name: 'Ceremonial Cacao',
    origin: 'Ecuador',
    benefit: 'Heart-opening, mood-enhancing',
    description: 'Ethically sourced 72% dark chocolate from ancient cacao lineages.',
  },
  {
    name: 'Raspberry Extract',
    origin: 'Pacific Northwest',
    benefit: 'Antioxidant-rich, vibrant flavor',
    description: 'Wild-harvested raspberries for a tangy, uplifting taste profile.',
  },
  {
    name: 'Adaptogenic Blend',
    origin: 'Various',
    benefit: 'Stress relief, mental clarity',
    description: '5g of carefully selected functional mushrooms for a transcendent experience.',
  },
  {
    name: 'Coconut Sugar',
    origin: 'Philippines',
    benefit: 'Low glycemic, sustainable',
    description: 'Organic coconut sugar for balanced sweetness without the spike.',
  },
];

export default function IngredientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sectionRef}
      id="ingredients"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-secondary/20"
    >
      {/* Decorative Circles */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full border border-primary/10"
      />
      <motion.div
        style={{ y: parallaxY }}
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full border border-accent/10"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Pure & Natural
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6">
            Nature's <span className="italic text-gradient">Finest</span> Ingredients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every ingredient is thoughtfully selected for purity, potency, and the profound experience it contributes to your journey.
          </p>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="gradient-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium mt-1">
                      Origin: {ingredient.origin}
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    {ingredient.benefit.split(',')[0]}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {ingredient.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  <div className="absolute top-4 right-8 w-1 h-1 rounded-full bg-accent/30" />
                  <div className="absolute top-8 right-4 w-1 h-1 rounded-full bg-accent/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-chocolate text-cream shadow-elevated">
            <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
              <span className="text-champagne">✦</span>
            </div>
            <div className="text-left">
              <div className="font-serif text-lg font-semibold">100% Natural</div>
              <div className="text-xs text-cream/70">No artificial additives or preservatives</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
