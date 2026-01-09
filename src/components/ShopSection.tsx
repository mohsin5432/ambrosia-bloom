import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const products = [
  {
    id: 'midnight-velvet',
    name: 'Dark Chocolate Raspberry',
    subtitle: 'Ceremonial Mushroom Bar • 5g Actives',
    price: 45,
    image: '/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png',
    rating: 5,
    reviews: 128,
    badge: 'Bestseller'
  },
  {
    id: 'golden-sunrise',
    name: 'Milk Chocolate Hazelnut',
    subtitle: 'Ceremonial Mushroom Bar • 3g Actives',
    price: 40,
    image: '/lovable-uploads/d3adddc0-2d54-49ca-9b49-ecb8472b54dd.png',
    rating: 5,
    reviews: 94,
    badge: 'New'
  },
  {
    id: 'forest-whisper',
    name: 'White Chocolate Passion',
    subtitle: 'Ceremonial Mushroom Bar • 3g Actives',
    price: 42,
    image: '/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png',
    rating: 4,
    reviews: 67,
    badge: null
  },
  {
    id: 'ruby-dreams',
    name: 'Extra Dark Sea Salt',
    subtitle: 'Ceremonial Mushroom Bar • 7g Actives',
    price: 55,
    image: '/lovable-uploads/d3adddc0-2d54-49ca-9b49-ecb8472b54dd.png',
    rating: 5,
    reviews: 203,
    badge: 'Popular'
  },
  {
    id: 'spice-voyage',
    name: 'Mint Dark Chocolate',
    subtitle: 'Ceremonial Mushroom Bar • 5g Actives',
    price: 45,
    image: '/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png',
    rating: 4,
    reviews: 82,
    badge: null
  },
  {
    id: 'ocean-mist',
    name: 'Caramel Swirl',
    subtitle: 'Ceremonial Mushroom Bar • 4g Actives',
    price: 43,
    image: '/lovable-uploads/d3adddc0-2d54-49ca-9b49-ecb8472b54dd.png',
    rating: 5,
    reviews: 156,
    badge: 'Fan Favorite'
  }
];

// Split products into two rows
const row1 = products.slice(0, 3);
const row2 = products.slice(3, 6);

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer h-full"
    >
      <Link to={`/products/${product.id}`} className="block h-full">
        <div className="gradient-card rounded-md overflow-hidden border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative bg-gradient-to-br from-secondary to-champagne p-6 flex items-center justify-center aspect-square">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[140px] h-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
              whileHover={{ rotate: 2 }}
            />
            {product.badge && (
              <div className="absolute top-3 left-3 px-2 py-1 rounded-sm bg-primary text-primary-foreground text-xs font-medium">
                {product.badge}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={`${i < product.rating ? 'fill-accent text-accent' : 'fill-muted text-muted'}`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
            </div>

            <h3 className="font-serif text-base font-semibold text-foreground mb-1 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-primary text-xs font-medium mb-3 line-clamp-1">
              {product.subtitle}
            </p>

            {/* Price & CTA */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
              <span className="text-lg font-serif font-bold text-foreground">${product.price}</span>
              <Button variant="hero" size="sm" className="gap-1 text-xs px-3 py-1.5 h-auto">
                <ShoppingBag size={14} />
                Add
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ShopSection() {
  return (
    <section id="shop" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Shop Now
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6">
            Begin Your <span className="italic text-gradient">Voyage</span>
          </h2>
        </motion.div>

        {/* Product Carousels - 2 rows */}
        <div className="space-y-6">
          {/* Row 1 */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {row1.map((product, index) => (
                <CarouselItem key={product.id} className="pl-4 basis-1/2 md:basis-1/3">
                  <ProductCard product={product} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 rounded-sm" />
            <CarouselNext className="hidden md:flex -right-4 rounded-sm" />
          </Carousel>

          {/* Row 2 */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {row2.map((product, index) => (
                <CarouselItem key={product.id} className="pl-4 basis-1/2 md:basis-1/3">
                  <ProductCard product={product} index={index + 3} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 rounded-sm" />
            <CarouselNext className="hidden md:flex -right-4 rounded-sm" />
          </Carousel>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" asChild className="rounded-sm">
            <Link to="/products">View All Products</Link>
          </Button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
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
              className="text-center p-4 rounded-sm bg-background/50 border border-border/30"
            >
              <div className="text-foreground font-semibold text-sm">{item.value}</div>
              <div className="text-muted-foreground text-xs">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
