import { TrendingDown, Clock, DollarSign } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ocellus-dark mb-6">
            The $4 Trillion Biomanufacturing Challenge
          </h2>
          <p className="text-xl text-ocellus-gray max-w-3xl mx-auto">
            While biomanufacturing promises sustainable solutions for food, materials, and medicine, 
            current production methods lack the precision needed to compete with traditional industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-ocellus-dark mb-3">Inconsistent Yields</h3>
            <p className="text-ocellus-gray">
              Batch-to-batch variability makes it impossible to predict outcomes or optimize processes effectively.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-ocellus-dark mb-3">Delayed Detection</h3>
            <p className="text-ocellus-gray">
              Critical issues are discovered too late, leading to costly failed batches and extended development cycles.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-ocellus-dark mb-3">High Production Costs</h3>
            <p className="text-ocellus-gray">
              Without real-time optimization, biomanufacturing struggles to achieve the cost efficiency needed for market competitiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
