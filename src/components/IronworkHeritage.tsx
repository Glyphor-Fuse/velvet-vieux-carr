import React from "react";
import { motion } from "framer-motion";

export function IronworkHeritage() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Side Borders - CSS Ironwork */}
      <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block"></div>
      <div className="absolute top-0 bottom-0 right-4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-t-full overflow-hidden border-2 border-primary/20 p-2">
               <div className="absolute inset-2 rounded-t-full overflow-hidden">
                 <img 
                   src="/images/heritage-balcony.jpg" 
                   alt="French Quarter Balcony" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
               </div>
            </div>
            {/* Ornamental Caption */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 shadow-xl border border-primary/20 max-w-xs">
              <p className="font-serif italic text-primary text-lg">"Where history meets decadence."</p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Heritage in <span className="text-primary italic">Iron & Cream</span>
            </h2>
            <div className="w-24 h-1 bg-primary/50"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Inspired by the intricate wrought-iron balconies of Royal Street, our shop is a tribute to the craftsmanship of Old New Orleans. Just as the ironworkers twisted metal into art, we churn local cream into masterpiece flavors.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every scoop is a nod to the city's festive soul—rich, complex, and always ready for a celebration.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
              {[
                { label: "Founded", val: "2024" },
                { label: "Flavors", val: "24+" },
                { label: "Source", val: "Local" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-serif font-bold text-primary">{stat.val}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IronworkHeritage;
