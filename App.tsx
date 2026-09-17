import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ObfuscatorApp from "./pages/App";
import NotFound from "./pages/NotFound";
import { LanguageProvider, useLanguage } from "@/lib/i18n";

const queryClient = new QueryClient();

const RouteLanguageSync = () => {
  const location = useLocation();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    if (location.pathname.startsWith("/en") && lang !== "en") {
      setLang("en");
    }
  }, [location.pathname, lang, setLang]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteLanguageSync />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/app" element={<ObfuscatorApp />} />
            <Route path="/en" element={<Index />} />
            <Route path="/en/app" element={<ObfuscatorApp />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
