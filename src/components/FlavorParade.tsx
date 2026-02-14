import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface Flavor {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
}

// --- Custom 3D Tilt Card Component ---
const FlavorFloat = ({ flavor, index }: { flavor: Flavor; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group w-full h-[450px] rounded-xl bg-card border border-border/50 shadow-2xl overflow-visible transition-all duration-200 ease-out"
    >
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-card to-background opacity-90"
        style={{ transform: "translateZ(0px)" }}
      />
      
      {/* Decorative Float Elements */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold z-20 shadow-lg" style={{ transform: "translateZ(40px)" }}>
        #{index + 1}
      </div>

      <div className="relative z-10 h-full flex flex-col p-6" style={{ transform: "translateZ(20px)" }}>
        <div className="flex-1 relative flex items-center justify-center mb-4">
          <motion.div 
            className="relative w-48 h-48 rounded-full bg-secondary/30 flex items-center justify-center shadow-inner"
            style={{ transform: "translateZ(30px)" }}
          >
             <img 
               src={flavor.image} 
               alt={flavor.name}
               className="w-40 h-40 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
             />
          </motion.div>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-primary/80 transition-colors">
            {flavor.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {flavor.description}
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-3">
           <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full border-primary/30 hover:bg-primary/10">
                <Info className="w-4 h-4 mr-2" /> Ingredients
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 bg-card border-border text-card-foreground">
              <h4 className="font-semibold text-primary mb-2">Key Notes</h4>
              <ul className="list-disc pl-4 text-sm space-y-1 text-muted-foreground">
                {flavor.ingredients.map((ing: string, i: number) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
          <Button size="sm" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
            Taste It
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const FLAVORS = [
  {
    name: "Bourbon St. Brittle",
    description: "Aged bourbon vanilla bean base with chunks of handmade peanut brittle and a ribbon of dark caramel.",
    image: "/images/flavor-bourbon.png",
    ingredients: ["Bourbon Vanilla", "Peanut Brittle", "Dark Caramel", "Sea Salt"]
  },
  {
    name: "Royal Praline",
    description: "Creamy pecan praline ice cream swirled with thick marshmallow fluff and candied pecans.",
    image: "/images/flavor-praline.png",
    ingredients: ["Toasted Pecans", "Brown Sugar", "Marshmallow", "Sweet Cream"]
  },
  {
    name: "Voodoo Berry",
    description: "A mysterious blend of blackberries, blueberries, and a hint of cayenne pepper for a spicy finish.",
    image: "/images/flavor-berry.png",
    ingredients: ["Blackberry", "Blueberry", "Cayenne", "Lemon Zest"]
  },
  {
    name: "Café du Monde",
    description: "Rich chicory coffee ice cream dusted with powdered sugar and beignet pieces.",
    image: "/images/flavor-coffee.png",
    ingredients: ["Chicory Coffee", "Beignet Pieces", "Powdered Sugar", "Milk"]
  },
  {
    name: "Mardi Gras King Cake",
    description: "Sweet cream cheese ice cream with cinnamon dough bites and purple, green, and gold sprinkles.",
    image: "/images/flavor-kingcake.png",
    ingredients: ["Cream Cheese", "Cinnamon", "Sugar Sprinkles", "Pastry Dough"]
  },
];

export function FlavorParade() {
  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary text-primary px-4 py-1">
            Signature Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            The Flavor Parade
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Swipe through our procession of artisanal scoops, each crafted with the spirit of the city.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto perspective-1000"
        >
          <CarouselContent className="-ml-4 md:-ml-6 py-10">
            {FLAVORS.map((flavor, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <FlavorFloat flavor={flavor} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
