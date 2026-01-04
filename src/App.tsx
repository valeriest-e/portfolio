import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import Footer from "./components/Footer";

import ArtAppCaseStudy from "./pages/case-studies/ArtAppCaseStudy";
import WishFlowCaseStudy from "./pages/case-studies/WishFlowCaseStudy";
import ECommerceCaseStudy from "./pages/case-studies/ECommerceCaseStudy";
import LandingCaseStudy from "./pages/case-studies/LandingCaseStudy";
import PetHealthAppCaseStudy from "./pages/case-studies/PetHealthAppCaseStudy";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollRestoration from "./components/ScrollRestoration";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies/art-app" element={<ArtAppCaseStudy />} />
          <Route path="/case-studies/wishflow" element={<WishFlowCaseStudy />} />
          <Route path="/case-studies/e-commerce" element={<ECommerceCaseStudy />} />
          <Route path="/case-studies/landing" element={<LandingCaseStudy />} />
          <Route path="/case-studies/pethealth" element={<PetHealthAppCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </TooltipProvider>
  </ThemeProvider>
</QueryClientProvider>
);

export default App;
