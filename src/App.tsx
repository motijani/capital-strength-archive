
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import Index from "./pages/Index";
import GymPage from "./pages/GymPage";
import ServicesPage from "./pages/ServicesPage";
import HoursRatesPage from "./pages/HoursRatesPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ShoppingPage from "./pages/ShoppingPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Removed BrowserRouter wrapper */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<ServicesPage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/hours" element={<HoursRatesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<ShoppingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Removed BrowserRouter wrapper */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
