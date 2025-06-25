import { Router, Route, BaseLocationHook } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Custom hook to handle base URL
const useBasename = (base: string): BaseLocationHook => {
  return (...args: any[]): [string, (path: string, ...args: any[]) => any] => {
    const currentLocation = window.location.pathname;
    const path = currentLocation.startsWith(base) 
      ? currentLocation.slice(base.length) || "/" 
      : currentLocation;

    const navigate = (to: string, ...args: any[]) => {
      window.history.pushState(null, "", base + to);
    };

    return [path, navigate];
  };
};

function AppRouter() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </>
  );
}

function App() {
  const base = import.meta.env.BASE_URL;
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router base={base} hook={useBasename(base)}>
          <Toaster />
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
