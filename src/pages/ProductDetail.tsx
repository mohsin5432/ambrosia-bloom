import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Minus, Plus, ShoppingCart, Heart, Share2, Leaf, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const products = [
  {
    id: "midnight-velvet",
    name: "Midnight Velvet",
    subtitle: "72% Dark Cacao",
    description: "A symphony of deep, earthy notes with hints of cherry and espresso. Our signature dark chocolate crafted from single-origin Peruvian cacao beans, aged to perfection.",
    longDescription: "Experience the pinnacle of chocolate craftsmanship with Midnight Velvet. Each bar begins its journey in the misty highlands of Peru, where our partner farmers cultivate cacao using methods passed down through generations. The beans are carefully fermented and sun-dried before making their way to our artisan workshop, where they undergo a 72-hour conching process that develops their complex flavor profile.",
    price: 24,
    image: "/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png",
    tags: ["Vegan", "Organic", "Single Origin"],
    rating: 4.9,
    reviews: 128,
    weight: "80g",
    origin: "Peru",
    ingredients: ["Organic Cacao Beans", "Organic Cacao Butter", "Organic Coconut Sugar", "Vanilla Bean"],
    nutritionFacts: {
      servingSize: "20g",
      calories: 120,
      fat: "9g",
      carbs: "10g",
      protein: "2g",
      sugar: "6g"
    }
  },
  {
    id: "golden-sunrise",
    name: "Golden Sunrise",
    subtitle: "Salted Caramel Fusion",
    description: "Buttery caramel swirls dance through creamy milk chocolate, finished with fleur de sel. A luxurious blend that melts slowly, revealing layers of sweetness.",
    longDescription: "Golden Sunrise represents the perfect harmony between classic confectionery and modern artistry. Our master chocolatiers have spent years perfecting the caramel infusion technique, ensuring each bite delivers a cascade of flavors that unfold like a sunrise over the horizon.",
    price: 28,
    image: "/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png",
    tags: ["Bestseller", "Limited Edition"],
    rating: 4.8,
    reviews: 94,
    weight: "80g",
    origin: "Madagascar",
    ingredients: ["Milk Chocolate", "Organic Caramel", "Fleur de Sel", "Vanilla Extract"],
    nutritionFacts: {
      servingSize: "20g",
      calories: 130,
      fat: "8g",
      carbs: "14g",
      protein: "2g",
      sugar: "12g"
    }
  },
  {
    id: "forest-whisper",
    name: "Forest Whisper",
    subtitle: "Hazelnut Praline",
    description: "Roasted Piedmont hazelnuts enrobed in silky gianduja. Each piece is a tribute to the ancient forests where the finest nuts are harvested.",
    longDescription: "Forest Whisper takes you on a journey through the ancient hazelnut groves of Piedmont, Italy. These prized nuts are roasted to perfection and ground into a velvety praline that becomes one with our premium chocolate.",
    price: 32,
    image: "/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png",
    tags: ["Organic", "Award Winner"],
    rating: 4.9,
    reviews: 156,
    weight: "80g",
    origin: "Italy",
    ingredients: ["Dark Chocolate", "Piedmont Hazelnuts", "Cacao Butter", "Raw Cane Sugar"],
    nutritionFacts: {
      servingSize: "20g",
      calories: 140,
      fat: "10g",
      carbs: "11g",
      protein: "3g",
      sugar: "8g"
    }
  },
  {
    id: "ruby-dreams",
    name: "Ruby Dreams",
    subtitle: "Raspberry & Rose",
    description: "Delicate rose petals meet tangy raspberries in a white chocolate embrace. An ethereal creation that transports you to blooming gardens.",
    longDescription: "Ruby Dreams is a poetic creation that celebrates the romance between chocolate and botanicals. Real raspberry pieces and hand-picked rose petals are folded into our creamy white chocolate base.",
    price: 26,
    image: "/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png",
    tags: ["Vegan", "Floral"],
    rating: 4.7,
    reviews: 87,
    weight: "80g",
    origin: "France",
    ingredients: ["White Chocolate", "Freeze-dried Raspberries", "Rose Petals", "Natural Flavors"],
    nutritionFacts: {
      servingSize: "20g",
      calories: 125,
      fat: "7g",
      carbs: "15g",
      protein: "1g",
      sugar: "14g"
    }
  },
  {
    id: "spice-voyage",
    name: "Spice Voyage",
    subtitle: "Chili & Cinnamon",
    description: "Bold cayenne meets warm Ceylon cinnamon in dark chocolate. A daring expedition for those who seek adventure in every bite.",
    longDescription: "Spice Voyage is for the bold explorer. This daring creation combines the warmth of Ceylon cinnamon with the subtle heat of cayenne pepper, all wrapped in our signature 70% dark chocolate.",
    price: 25,
    image: "/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png",
    tags: ["Potent", "Spicy"],
    rating: 4.6,
    reviews: 72,
    weight: "80g",
    origin: "Mexico",
    ingredients: ["Dark Chocolate", "Ceylon Cinnamon", "Cayenne Pepper", "Organic Sugar"],
    nutritionFacts: {
      servingSize: "20g",
      calories: 115,
      fat: "8g",
      carbs: "11g",
      protein: "2g",
      sugar: "7g"
    }
  },
  {
    id: "ocean-mist",
    name: "Ocean Mist",
    subtitle: "Sea Salt & Lavender",
    description: "Mediterranean sea salt crystals sparkle atop lavender-infused dark chocolate. A coastal escape captured in every square.",
    longDescription: "Ocean Mist captures the essence of the Mediterranean coast. Hand-harvested sea salt from the pristine waters meets the calming notes of Provençal lavender.",
    price: 27,
    image: "/lovable-uploads/8e6c6168-8b40-464e-8285-c777687fabea.png",
    tags: ["Organic", "Calming"],
    rating: 4.8,
    reviews: 103,
    weight: "80g",
    origin: "Mediterranean",
    ingredients: ["Dark Chocolate", "Mediterranean Sea Salt", "Lavender Extract", "Cacao Butter"],
    nutritionFacts: {
      servingSize: "20g",
      calories: 118,
      fat: "8g",
      carbs: "10g",
      protein: "2g",
      sugar: "6g"
    }
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display text-foreground mb-4">Product not found</h1>
          <Link to="/products">
            <Button variant="outline">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </motion.div>
      </div>

      {/* Product Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-chocolate/20 via-background to-champagne/10 p-8 lg:p-12 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 left-4 flex flex-col gap-2"
              >
                {product.tags.map((tag, index) => (
                  <Badge 
                    key={tag} 
                    className="bg-primary/90 text-primary-foreground backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </motion.div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                {/* Title & Rating */}
                <div>
                  <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
                    {product.subtitle}
                  </p>
                  <h1 className="text-4xl lg:text-5xl font-display text-foreground mb-4">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-champagne fill-champagne' : 'text-muted'}`}
                        />
                      ))}
                      <span className="ml-2 text-foreground font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {product.longDescription}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Origin</p>
                      <p className="text-foreground font-medium">{product.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Weight</p>
                      <p className="text-foreground font-medium">{product.weight}</p>
                    </div>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display text-foreground">${product.price}</span>
                    <span className="text-muted-foreground">USD</span>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-6">
                    <span className="text-muted-foreground">Quantity</span>
                    <div className="flex items-center gap-4 bg-secondary/50 rounded-full px-4 py-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-foreground">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button size="xl" variant="hero" className="flex-1">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart — ${product.price * quantity}
                    </Button>
                    <Button
                      size="xl"
                      variant="outline"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={isWishlisted ? "text-rose border-rose" : ""}
                    >
                      <Heart className={`w-5 h-5 ${isWishlisted ? "fill-rose" : ""}`} />
                    </Button>
                    <Button size="xl" variant="outline">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-primary" />
                    <span>Sustainably Sourced</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients & Nutrition */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-display text-foreground">Ingredients</h2>
              <div className="flex flex-wrap gap-3">
                {product.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="px-4 py-2 rounded-full bg-background border border-border text-foreground text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Nutrition Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-display text-foreground">Nutrition Facts</h2>
              <div className="bg-background rounded-2xl p-6 border border-border">
                <p className="text-sm text-muted-foreground mb-4">Serving Size: {product.nutritionFacts.servingSize}</p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Calories", value: product.nutritionFacts.calories },
                    { label: "Fat", value: product.nutritionFacts.fat },
                    { label: "Carbs", value: product.nutritionFacts.carbs },
                    { label: "Protein", value: product.nutritionFacts.protein },
                    { label: "Sugar", value: product.nutritionFacts.sugar },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-3 rounded-xl bg-secondary/50">
                      <p className="text-xs text-muted-foreground uppercase">{item.label}</p>
                      <p className="text-lg font-medium text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
