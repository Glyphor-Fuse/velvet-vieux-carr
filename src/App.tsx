import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlavorParade } from "@/components/FlavorParade";
import { IronworkHeritage } from "@/components/IronworkHeritage";
import { MenuHighlights } from "@/components/MenuHighlights";
import { LocationFooter } from "@/components/LocationFooter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
          <Navbar />
          <Hero />
          <FlavorParade />
          <IronworkHeritage />
          <MenuHighlights />
          <LocationFooter />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
