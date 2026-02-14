import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const SUNDAES = [
  {
    name: "The Mississippi Mud",
    desc: "Chocolate fudge brownie, coffee ice cream, and hot fudge river.",
    price: "$12",
    rating: 4.9,
    image: "/images/sundae-mud.jpg"
  },
  {
    name: "Golden Fleur-de-Lis",
    desc: "Vanilla bean, edible gold leaf, and champagne caramel sauce.",
    price: "$16",
    rating: 5.0,
    image: "/images/sundae-gold.jpg"
  },
  {
    name: "Jazz Fest Jam",
    desc: "Strawberry basil sorbet topped with fresh berries and balsamic glaze.",
    price: "$11",
    rating: 4.8,
    image: "/images/sundae-berry.jpg"
  },
  {
    name: "Bourbon St. Float",
    desc: "Root beer float with a scoop of bourbon vanilla and whipped cream.",
    price: "$10",
    rating: 4.7,
    image: "/images/sundae-float.jpg"
  }
];

export function MenuHighlights() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Signature <span className="text-primary">Sundaes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Extravagant creations that are as beautiful as they are delicious.
            </p>
          </div>
          <Button variant="link" className="text-primary hover:text-primary/80 text-lg p-0 h-auto">
            View Full Menu <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUNDAES.map((item, i) => (
            <Card key={i} className="bg-card border-border/40 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden relative">
                 <img 
                   src={item.image} 
                   alt={item.name} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute top-3 right-3 bg-background/60 backdrop-blur-sm text-primary px-4 py-4 rounded text-sm font-bold border border-primary/20">
                   {item.price}
                 </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{item.desc}</p>
                <div className="flex items-center gap-1 text-primary text-xs font-medium">
                  <Star className="w-3 h-3 fill-primary" /> {item.rating} (120+ reviews)
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground">Add to Order</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuHighlights;
