import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, MapPin, Twitter } from "lucide-react";

export function LocationFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-xl">
                 V
               </div>
               <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                 Velvet Vieux Carré
               </span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Bringing the magic of the French Quarter to your spoon. Authentic flavors, timeless style.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-primary">Explore</h4>
            <ul className="space-y-4">
              {["Our Flavors", "The Story", "Gift Cards", "Catering", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Column */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-primary">Visit Us</h4>
            <ul className="space-y-4 text-secondary-foreground/80">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  123 Royal Street<br />
                  New Orleans, LA 70130
                </span>
              </li>
              <li>
                <span className="block font-medium text-foreground">Hours:</span>
                Mon-Thu: 11am - 10pm<br />
                Fri-Sun: 11am - Midnight
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-primary">Join the Parade</h4>
            <p className="text-secondary-foreground/70 mb-4 text-sm">
              Get exclusive flavor drops and invites to our tasting events.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email address" 
                className="bg-background/10 border-primary/30 text-foreground placeholder:text-foreground/50 focus-visible:ring-primary" 
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
          <p>© 2024 Velvet Vieux Carré. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LocationFooter;
