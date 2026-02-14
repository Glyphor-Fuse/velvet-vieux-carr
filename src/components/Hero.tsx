import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background text-foreground pt-16">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(157,0,255,0.15),transparent_70%)] animate-pulse-slow" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        {/* Decorative Particles */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase">
            Est. New Orleans • 2024
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary drop-shadow-lg mb-6 max-w-4xl mx-auto"
        >
          Velvet <br className="md:hidden" /> Vieux Carré
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          Artisanal scoops inspired by the rhythm, soul, and decadence of the French Quarter. 
          A parade of flavor in every bite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-12 px-8 font-medium rounded-full shadow-lg shadow-primary/30">
            Order for Pickup
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 text-lg h-12 px-8 rounded-full">
            View the Parade <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative 'Ironwork' Bottom Border */}
      <div className="absolute bottom-0 w-full h-16 bg-background z-20" style={{ maskImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjAgQTIwIDIwIDAgMCAxIDIwIDAgQTIwIDIwIDAgMCAxIDQwIDIwIFoiIGZpbGw9ImJsYWNrIi8+PC9zdmc+')", maskSize: "40px 20px", maskRepeat: "repeat-x" }}></div>
    </section>
  );
}

export default Hero;
