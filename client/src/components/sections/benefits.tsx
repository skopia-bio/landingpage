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
      insight: "Necesitábamos automatizar el monitoreo celular. El proceso manual con Vi-Cell es tedioso y nos impide tomar decisiones en tiempo real."
    },
    {
      vertical: "Pharma (CDMO)",
      company: "AGC Biologics",
      contact: "Lucas Bukata",
      insight: "Necesitábamos una solución label-free que nos permita monitorear el cultivo sin interferir con el proceso."
    },
    {
      vertical: "Bio-industrials",
      company: "Inmet",
      contact: "Gustavo Schujman",
      insight: "Necesitábamos predecir la producción y entender mejor la dinámica del proceso para optimizar nuestros rendimientos."
    },
    {
      vertical: "Enzimas",
      company: "Keclon",
      contact: "Hugo Menzella",
      insight: "Necesitábamos una herramienta de fingerprinting celular para control de calidad y prevención de fraudes en nuestra producción."
    },
    {
      vertical: "Foodtech (scale-up)",
      company: "Enifer",
      contact: "Simo Ellilä",
      insight: "Necesitábamos entender la correlación entre morfología celular y calidad del producto para mejorar nuestro scale-up."
    },
    {
      vertical: "Bioplásticos",
      company: "Inmet Bio",
      contact: "Leandro Nakamatsu",
      insight: "Necesitábamos detectar e identificar contaminantes tempranamente para evitar pérdidas de lotes completos."
    },
    {
      vertical: "Sabores",
      company: "Evodia Bio",
      contact: "Nicolás Drocchi",
      insight: "Necesitábamos determinar el momento óptimo de finalización de la fermentación para maximizar el rendimiento."
    },
    {
      vertical: "Bio-tools",
      company: "Cytoem",
      contact: "R. Cantero & H. Cantiello",
      insight: "Necesitábamos una solución que se integre con nuestros productos existentes para ofrecer análisis más completos."
    },
    {
      vertical: "Pharma",
      company: "Biosinaptica",
      contact: "Ricardo Kratje",
      insight: "Necesitábamos un sistema de monitoreo de salud celular específico para cultivos CHO que nos alerte de problemas tempranamente."
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
            Nuestros clientes potenciales han validado la necesidad de una solución 
            que transforme el monitoreo y optimización de bioprocesos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-skopia-green mb-2">9+</div>
              <div className="text-lg font-semibold text-skopia-dark mb-4">Verticales Validados</div>
              <p className="text-skopia-dark">Desde pharma hasta food-tech, nuestra solución responde a necesidades diversas de la industria.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-skopia-green mb-2">100%</div>
              <div className="text-lg font-semibold text-skopia-dark mb-4">Match con Pain Points</div>
              <p className="text-skopia-dark">Todas las empresas entrevistadas confirmaron la necesidad de mejor monitoreo de bioprocesos.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-skopia-green mb-2">85%</div>
              <div className="text-lg font-semibold text-skopia-dark mb-4">Tasa de Interés</div>
              <p className="text-skopia-dark">Alto interés en adopción temprana a través de todos los segmentos.</p>
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
                      <p className="text-skopia-dark text-sm italic">{validation.insight}</p>
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
