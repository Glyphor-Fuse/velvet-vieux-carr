import { React, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
           {/* Simple Icon Logo */}
           <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-lg">
             V
           </div>
           <span className={`font-serif text-xl font-bold tracking-tight ${scrolled ? "text-foreground" : "text-primary"}`}>
             Velvet Vieux Carré
           </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Our Story", "Flavors", "Locations", "Catering"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium">
            Visit Us
          </Button>
          <Button size="icon" variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary/10 relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-[10px] flex items-center justify-center text-secondary-foreground rounded-full">
              2
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
