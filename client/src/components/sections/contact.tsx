import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-skopia-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Bioprocess?
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Join the next generation of biomanufacturers who are achieving unprecedented efficiency and quality 
          with AI-powered cellular intelligence.
        </p>
        
        <Card className="bg-white rounded-2xl max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-skopia-dark mb-6">Get in Touch</h3>
            <div className="text-center">
              <a 
                href="mailto:hello@skopiabiosystems.com" 
                className="text-xl text-skopia-green hover:text-skopia-dark flex items-center justify-center gap-3 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
                hello@skopiabiosystems.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
