import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative gradient-hero pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-skopia-dark leading-tight mb-6">
              See Inside Your{" "}
              <span className="text-skopia-green">Bioreactor</span>{" "}
              in Real-Time
            </h1>
            <p className="text-xl text-skopia-dark mb-8 leading-relaxed">
              Transform biomanufacturing with AI-powered cellular analysis. Our digital twin platform delivers actionable insights that optimize yield, reduce costs, and accelerate your path to market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-skopia-green hover:bg-skopia-dark text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-200 shadow-lg hover:shadow-xl"
                size="lg"
              >
                Schedule a Demo
              </Button>
              <Button
                onClick={() => scrollToSection("solution")}
                variant="outline"
                className="border-2 border-skopia-green text-skopia-green hover:bg-skopia-green hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-200"
                size="lg"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm text-skopia-dark">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-skopia-green mr-2" />
                <span>Real-time monitoring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-skopia-green mr-2" />
                <span>AI-driven insights</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-skopia-green mr-2" />
                <span>Scalable platform</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Advanced microscopy laboratory with cell analysis equipment"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
