import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Benefits() {
  const marketValidations = [
    {
      vertical: "Pharma (CDMO)",
      company: "mAbxience",
      contact: "Esteban Corley",
      insight: "We needed to automate cell monitoring. The manual process with Vi-Cell is tedious and prevents us from making real-time decisions."
    },
    {
      vertical: "Pharma (CDMO)",
      company: "AGC Biologics",
      contact: "Lucas Bukata",
      insight: "We needed a label-free solution that allows us to monitor the culture without interfering with the process."
    },
    {
      vertical: "Bio-industrials",
      company: "Inmet",
      contact: "Gustavo Schujman",
      insight: "We needed to predict production and better understand process dynamics to optimize our yields."
    },
    {
      vertical: "Enzymes",
      company: "Keclon",
      contact: "Hugo Menzella",
      insight: "We needed a cellular fingerprinting tool for quality control and fraud prevention in our production."
    },
    {
      vertical: "Foodtech (scale-up)",
      company: "Enifer",
      contact: "Simo Ellilä",
      insight: "We needed to understand the correlation between cell morphology and product quality to improve our scale-up."
    },
    {
      vertical: "Bioplastics",
      company: "Inmet Bio",
      contact: "Leandro Nakamatsu",
      insight: "We needed to detect and identify contaminants early to avoid losing entire batches."
    },
    {
      vertical: "Flavors",
      company: "Evodia Bio",
      contact: "Nicolás Drocchi",
      insight: "We needed to determine the optimal fermentation end-point to maximize yield."
    },
    {
      vertical: "Bio-tools",
      company: "Cytoem",
      contact: "R. Cantero & H. Cantiello",
      insight: "We needed a solution that integrates with our existing products to offer more comprehensive analysis."
    },
    {
      vertical: "Pharma",
      company: "Biosinaptica",
      contact: "Ricardo Kratje",
      insight: "We needed a CHO cell culture-specific health monitoring system that alerts us to problems early."
    }
  ];

  return (
    <section id="benefits" className="py-20 gradient-benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skopia-dark mb-6">
            Market Validation
          </h2>
          <p className="text-xl text-skopia-dark max-w-3xl mx-auto">
            Our potential customers have validated the need for a solution 
            that transforms bioprocess monitoring and optimization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-skopia-green mb-2">9+</div>
              <div className="text-lg font-semibold text-skopia-dark mb-4">Validated Verticals</div>
              <p className="text-skopia-dark text-justify">From pharmaceuticals to food biotechnology, our solution demonstrates versatility and adaptability across multiple industrial sectors.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-skopia-green mb-2">100%</div>
              <div className="text-lg font-semibold text-skopia-dark mb-4">Pain Points Match</div>
              <p className="text-skopia-dark text-justify">All interviewed companies identified the critical need to improve real-time monitoring and optimization of their bioprocesses.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-skopia-green mb-2">85%</div>
              <div className="text-lg font-semibold text-skopia-dark mb-4">Interest Rate</div>
              <p className="text-skopia-dark text-justify">The majority of surveyed companies showed high interest in early adoption of our technology, recognizing its transformative potential.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {marketValidations.map((validation, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-skopia-green mb-2">{validation.vertical}</div>
                      <div className="font-semibold text-skopia-dark mb-1">{validation.company}</div>
                      <div className="text-sm text-gray-600 mb-3">{validation.contact}</div>
                      <p className="text-skopia-dark text-sm italic text-justify">{validation.insight}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
