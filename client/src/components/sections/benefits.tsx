import { Card, CardContent } from "@/components/ui/card";

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 gradient-benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ocellus-dark mb-6">
            Measurable Impact on Your Bottom Line
          </h2>
          <p className="text-xl text-ocellus-gray max-w-3xl mx-auto">
            Our customers report significant improvements in yield, quality consistency, and time-to-market 
            within months of implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-ocellus-green mb-2">+25%</div>
              <div className="text-lg font-semibold text-ocellus-dark mb-4">Yield Improvement</div>
              <p className="text-ocellus-gray">Real-time optimization leads to consistently higher productivity and better resource utilization.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-ocellus-blue mb-2">-40%</div>
              <div className="text-lg font-semibold text-ocellus-dark mb-4">Failed Batches</div>
              <p className="text-ocellus-gray">Early detection prevents costly failures and reduces waste throughout your production process.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-ocellus-orange mb-2">-60%</div>
              <div className="text-lg font-semibold text-ocellus-dark mb-4">Development Time</div>
              <p className="text-ocellus-gray">Accelerate process development with data-driven insights and predictive modeling.</p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardContent className="p-8 text-center">
            <blockquote className="text-xl text-ocellus-gray italic mb-6">
              "Ocellus transformed our fermentation process. We went from reactive troubleshooting to proactive optimization. 
              The insights we get from cellular analysis have been game-changing for our product quality and consistency."
            </blockquote>
            <div className="font-semibold text-ocellus-dark">Dr. Sarah Chen</div>
            <div className="text-sm text-ocellus-gray">VP of Manufacturing, BioInnovate Labs</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
