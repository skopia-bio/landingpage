import { Router, Route, BaseLocationHook } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Custom hook to handle base URL
const useBasename = (base: string): BaseLocationHook => {
  return () => {
    const currentLocation = window.location.pathname;
    const path = currentLocation.startsWith(base) 
      ? currentLocation.slice(base.length) || "/" 
      : currentLocation;

    const navigate = (to: string) => {
      const newPath = to === "/" ? base : `${base}${to}`;
      window.history.pushState(null, "", newPath);
      return newPath;
    };

    return [path, navigate];
  };
};

function AppRouter() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/:rest*" component={NotFound} />
    </>
  );
}

function App() {
  const base = import.meta.env.BASE_URL;
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router hook={useBasename(base)}>
          <Toaster />
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
