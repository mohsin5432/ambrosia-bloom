import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import chocolateBarImage from '@/assets/chocolate-bar.webp';
import { ShoppingBag, Star } from 'lucide-react';
export default function ShopSection() {
  return <section id="shop" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-secondary/30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Shop Now
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6">
            Begin Your <span className="italic text-gradient">Voyage</span>
          </h2>
        </motion.div>

        {/* Product Card */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto">
          <div className="gradient-card rounded-3xl overflow-hidden border border-border/50 shadow-elevated">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative bg-gradient-to-br from-secondary to-blush p-8 flex items-center justify-center">
                <motion.img alt="Bon Voyage Dark Chocolate Raspberry" className="w-full max-w-[280px] h-auto drop-shadow-2xl" whileHover={{
                scale: 1.05,
                rotate: 2
              }} transition={{
                type: 'spring',
                stiffness: 300
              }} src="/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Bestseller
                </div>
              </div>

              {/* Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
                  <span className="text-sm text-muted-foreground ml-2">(128 reviews)</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  Dark Chocolate Raspberry
                </h3>
                <p className="text-primary font-medium mb-4">
                  Ceremonial Mushroom Bar • 5g Actives
                </p>
                <p className="text-muted-foreground mb-6">
                  Experience the perfect harmony of rich 72% dark chocolate, tangy raspberry, and our proprietary blend of adaptogenic mushrooms.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['72% Cacao', '5g Actives', 'Vegan', 'Organic'].map(tag => <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      {tag}
                    </span>)}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-serif font-bold text-foreground">$45</span>
                    <span className="text-muted-foreground text-sm ml-2">per bar</span>
                  </div>
                  <Button variant="hero" size="lg" className="gap-2">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.2
      }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[{
          label: 'Free Shipping',
          value: 'Orders $75+'
        }, {
          label: 'Discreet Packaging',
          value: 'Always'
        }, {
          label: 'Lab Tested',
          value: '100% Pure'
        }, {
          label: 'Money Back',
          value: '30 Days'
        }].map((item, index) => <motion.div key={item.label} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1 * index
        }} className="text-center p-4 rounded-xl bg-background/50">
              <div className="text-foreground font-semibold">{item.value}</div>
              <div className="text-muted-foreground text-sm">{item.label}</div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}