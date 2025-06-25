import { Button } from "@/components/ui/button";
import { Microscope, Brain, RotateCcw, ArrowRight } from "lucide-react";

export default function Solution() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solution" className="py-20 gradient-solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocellus-dark mb-6">
              Your Digital Window Into Every Cell
            </h2>
            <p className="text-xl text-ocellus-gray mb-8 leading-relaxed">
              Ocellus combines advanced microscopy with AI to create a digital twin of your bioprocess. 
              Get unprecedented visibility into cellular health, metabolic activity, and productivity—all in real-time.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-ocellus-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <Microscope className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ocellus-dark mb-2">Continuous Monitoring</h3>
                  <p className="text-ocellus-gray">Advanced imaging systems capture cellular behavior throughout your entire process, providing data as rich as genomic analysis.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-ocellus-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ocellus-dark mb-2">AI-Powered Analysis</h3>
                  <p className="text-ocellus-gray">Machine learning algorithms translate complex cellular signatures into actionable insights and predictive recommendations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-ocellus-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <RotateCcw className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ocellus-dark mb-2">Real-Time Optimization</h3>
                  <p className="text-ocellus-gray">Instant alerts and recommendations enable immediate process adjustments, preventing failures before they happen.</p>
                </div>
              </div>
            </div>
            
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-ocellus-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
            >
              See It In Action
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Digital interface displaying cellular analysis and AI-driven insights"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
