import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import Technology from "@/components/sections/technology";
import Benefits from "@/components/sections/benefits";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}
