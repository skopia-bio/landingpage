import { Check } from "lucide-react";

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ocellus-dark mb-6">
            Why Cells Tell the Complete Story
          </h2>
          <p className="text-xl text-ocellus-gray max-w-3xl mx-auto">
            While other approaches rely on indirect measurements, cellular imaging provides direct, 
            real-time insight into what's actually happening in your bioprocess.
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Microscopic view of healthy living cells showing detailed cellular structures"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="text-2xl font-bold text-ocellus-dark mb-6">The Cellular Advantage</h3>
            <p className="text-lg text-ocellus-gray mb-6">
              Cells are the engines of fermentation. Their morphology, behavior, and health directly determine process outcomes. 
              Unlike genomic or metabolomic data that requires extensive processing, cellular signatures are available instantly.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-ocellus-green mr-3" />
                <span className="text-ocellus-gray">Direct measurement of cellular health and viability</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-ocellus-green mr-3" />
                <span className="text-ocellus-gray">Real-time metabolic activity indicators</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-ocellus-green mr-3" />
                <span className="text-ocellus-gray">Early detection of stress and contamination</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-ocellus-green mr-3" />
                <span className="text-ocellus-gray">Predictive insights for yield optimization</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-ocellus-dark mb-8 text-center">Platform Capabilities</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-ocellus-blue mb-2">24/7</div>
              <div className="text-sm text-ocellus-gray">Continuous Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ocellus-blue mb-2">μm</div>
              <div className="text-sm text-ocellus-gray">Sub-cellular Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ocellus-blue mb-2">&lt;1min</div>
              <div className="text-sm text-ocellus-gray">Analysis Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ocellus-blue mb-2">99.5%</div>
              <div className="text-sm text-ocellus-gray">Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
