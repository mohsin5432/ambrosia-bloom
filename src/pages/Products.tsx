import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const products = [
  {
    id: 1,
    name: 'Dark Chocolate Raspberry',
    subtitle: 'Ceremonial Mushroom Bar • 5g Actives',
    description: 'Rich 72% dark chocolate with tangy raspberry and adaptogenic mushrooms.',
    price: 45,
    image: '/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png',
    tags: ['72% Cacao', '5g Actives', 'Vegan', 'Organic'],
    rating: 5,
    reviews: 128,
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Milk Chocolate Hazelnut',
    subtitle: 'Ceremonial Mushroom Bar • 3g Actives',
    description: 'Creamy milk chocolate with roasted hazelnuts and gentle mushroom blend.',
    price: 40,
    image: '/lovable-uploads/d3adddc0-2d54-49ca-9b49-ecb8472b54dd.png',
    tags: ['45% Cacao', '3g Actives', 'Organic'],
    rating: 5,
    reviews: 94,
    badge: 'New'
  },
  {
    id: 3,
    name: 'White Chocolate Passion',
    subtitle: 'Ceremonial Mushroom Bar • 3g Actives',
    description: 'Silky white chocolate with tropical passion fruit and calming adaptogens.',
    price: 42,
    image: '/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png',
    tags: ['White Cacao', '3g Actives', 'Vegan'],
    rating: 4,
    reviews: 67,
    badge: null
  },
  {
    id: 4,
    name: 'Extra Dark Sea Salt',
    subtitle: 'Ceremonial Mushroom Bar • 7g Actives',
    description: '85% dark chocolate with Himalayan sea salt and potent mushroom blend.',
    price: 55,
    image: '/lovable-uploads/d3adddc0-2d54-49ca-9b49-ecb8472b54dd.png',
    tags: ['85% Cacao', '7g Actives', 'Vegan', 'Potent'],
    rating: 5,
    reviews: 203,
    badge: 'Popular'
  },
  {
    id: 5,
    name: 'Mint Dark Chocolate',
    subtitle: 'Ceremonial Mushroom Bar • 5g Actives',
    description: 'Refreshing mint paired with smooth dark chocolate and balanced adaptogens.',
    price: 45,
    image: '/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png',
    tags: ['72% Cacao', '5g Actives', 'Vegan'],
    rating: 4,
    reviews: 82,
    badge: null
  },
  {
    id: 6,
    name: 'Caramel Swirl',
    subtitle: 'Ceremonial Mushroom Bar • 4g Actives',
    description: 'Buttery caramel ribbons through rich milk chocolate with gentle mushrooms.',
    price: 43,
    image: '/lovable-uploads/d3adddc0-2d54-49ca-9b49-ecb8472b54dd.png',
    tags: ['50% Cacao', '4g Actives', 'Organic'],
    rating: 5,
    reviews: 156,
    badge: 'Fan Favorite'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/20 via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            Our Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6"
          >
            Explore the <span className="italic text-gradient">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Discover our handcrafted collection of ceremonial chocolate bars, each designed to elevate your consciousness and delight your senses.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50"
        >
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Vegan', 'Organic', 'Potent', 'Bestsellers'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background/50 text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group"
            >
              <div className="gradient-card rounded-3xl overflow-hidden border border-border/50 shadow-elevated hover:shadow-glow transition-all duration-500">
                {/* Image */}
                <div className="relative bg-gradient-to-br from-secondary to-blush p-8 flex items-center justify-center aspect-square">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-[200px] h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ rotate: 2 }}
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${i < product.rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">({product.reviews})</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <span className="text-2xl font-serif font-bold text-foreground">${product.price}</span>
                    </div>
                    <Button variant="hero" size="sm" className="gap-1.5">
                      <ShoppingBag size={16} />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Free Shipping', value: 'Orders $75+' },
            { label: 'Discreet Packaging', value: 'Always' },
            { label: 'Lab Tested', value: '100% Pure' },
            { label: 'Money Back', value: '30 Days' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center p-6 rounded-xl bg-secondary/30 border border-border/50"
            >
              <div className="text-foreground font-semibold">{item.value}</div>
              <div className="text-muted-foreground text-sm">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
